import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const STORYBLOK_SPACE_ID = process.env.STORYBLOK_SPACE_ID
const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN

const API_URL = `https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}/components`
const COLLECTIONS_DIR = path.join('src', 'collections')
const BLOCKS_DIR = path.join('src', 'blocks')

async function fetchStoryblokSchema() {
  const res = await fetch(API_URL, {
    headers: { Authorization: STORYBLOK_TOKEN },
  })
  if (!res.ok) throw new Error(await res.text())
  const data = await res.json()
  return data.components
}

function mapFieldType(components, component, field, key) {
  let comment = ''
  let output = { name: key }

  if (field.required) {
    output.required = true
  }

  if (field.description) {
    // Some Storyblok descriptions have newlines and quotes, clean these up
    output.label = field.description.replace(/\n/g, '').replace(/"/g, '\\"')
  }

  switch (field.type) {
    case 'text':
      output.type = 'text'
      break
    case 'textarea':
      output.type = 'textarea'
      break
    case 'richtext':
      output.type = 'richText'
      break
    case 'number':
      output.type = 'number'
      break
    case 'boolean':
      output.type = 'checkbox'
      break
    case 'image':
    case 'asset':
      output.type = 'upload'
      output.relationTo = 'media'
      break
    case 'option':
    case 'options':
      if (
        field.source === 'internal_stories' &&
        Array.isArray(field.filter_content_type)
      ) {
        // console.log(` ${key}:`, field.filter_content_type)

        output.type = 'relationship'
        output.relationTo =
          field.filter_content_type.length === 1
            ? field.filter_content_type[0]
            : field.filter_content_type.at(-1)

        if (field.max_options && Number(field.max_options) > 1) {
          output.hasMany = true
        }
        break
      }
      if (Array.isArray(field.options)) {
        output.type = 'select'
        output.options = field.options.map((opt) => ({
          label: opt.name,
          value: opt.value,
        }))
        break
      }
      // We aren't currently hitting this anywhere
      throw new Error(`Unhandled ${field.type} field: ${JSON.stringify(field)}`)
    case 'multioption':
      // We aren't currently using these
      throw new Error('Unhandled multioption field: ' + JSON.stringify(field))
    case 'bloks':
      output.type = 'blocks'
      if (
        Array.isArray(field.component_whitelist) &&
        field.component_whitelist.length > 0
      ) {
        output.blocks = field.component_whitelist.map((block) =>
          Symbol.for(toPascalCase(block))
        )
        if (field.minimum) {
          output.minRows = field.minimum
        }
        if (field.maximum) {
          output.maxRows = field.maximum
        }
      } else {
        const componentGroupUUIDs = field.component_group_whitelist
        const targetBlocks = componentGroupUUIDs.flatMap((folder) =>
          components
            .filter((comp) => comp.component_group_uuid === folder)
            .map((comp) => Symbol.for(toPascalCase(comp.name)))
        )
        output.blocks = targetBlocks
      }
      break
    case 'section':
      // Not totally straightforward to generate the group
      output = null
      comment = `TODO: Create a group (${field.display_name}: ${field.keys.join(',')})`
      break
    case 'tab':
      // Not totally straightforward to generate the tab
      output = null
      comment = `TODO: Create a tab (${field.display_name}: ${field.keys.join(',')})`
      break
    case 'datetime':
      output.type = 'date'
      output.admin = {
        date: {
          pickerAppearance: field.disable_time ? 'dayOnly' : 'dayAndTime',
        },
      }
      break
    case 'multiasset':
      output.type = 'upload'
      output.relationTo = 'media'
      output.hasMany = true
      output.filterOptions = {
        mimeType: { contains: field.filetypes },
      }
      break
    case 'multilink':
      output.type = 'text'
      if (Object.keys(field).includes('link_scope')) {
        comment = `TODO: unhandled multilink field attributes 'link_scope'`
      }
      break
    case 'table':
      // Could be array or richText, fallback to json
      output.type = 'json'
      comment = 'TODO: Table: consider custom implementation'
      break
    default:
      throw new Error(`Unmapped field: ${JSON.stringify(field)}`)
  }

  return { output, comment }
}

function objToJS(obj) {
  let blockImports = []
  const js = Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return `${key}: []`
        }
        if (typeof value[0] === 'string') {
          // eg. relationTo: ["someCollection"]
          return `${key}: [${value.map((v) => `"${v}"`).join(', ')}]`
        }
        if (typeof value[0] === 'symbol') {
          // eg.
          // import { SomeConst } from "@/blocks/SomeConst"
          // ...
          // blocks: [SomeConst]
          const symbols = value.map((v) => Symbol.keyFor(v))
          blockImports.push(...symbols)
          return `${key}: [${symbols.join(', ')}]`
        }
        return `${key}: ${JSON.stringify(value)}`
      }
      if (typeof value === 'string') {
        return `${key}: "${value}"`
      }
      if (typeof value === 'object' && value !== null) {
        return `${key}: ${JSON.stringify(value)}`
      }
      return `${key}: ${value}`
    })
    .join(',\n      ')

  return { blockImports, js }
}

function toPascalCase(str) {
  return str
    .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_ ]/g, '')
}

function componentToPayloadConfig(components, component, type) {
  const allBlockImports = []
  const fields = Object.entries(component.schema).map(([key, field]) =>
    mapFieldType(components, component, field, key)
  )
  const pascalName = toPascalCase(component.name)
  const fieldsString = fields
    .map(({ output, comment }) => {
      if (comment.length > 0 && output === null) {
        return `// ${comment}`
      }
      const { blockImports, js } = objToJS(output)
      allBlockImports.push(...blockImports)
      return `
    {
      ${comment ? `// ${comment}\n` : ''}${js}
    }\n`
    })
    .join(',')

  const uniqueBlockImports = [...new Set(allBlockImports)]
  const importStatement = type === 'collection' ? 'CollectionConfig' : 'Block'
  const typeAnnotation = type === 'collection' ? 'CollectionConfig' : 'Block'

  const blockImportsString =
    uniqueBlockImports.length > 0
      ? `\n${uniqueBlockImports.map((i) => `import { ${i} } from "@/blocks/${i}"`).join('\n')}`
      : ''

  return `import { ${importStatement} } from "payload"${blockImportsString}

export const ${pascalName}: ${typeAnnotation} = {
  slug: '${component.name.charAt(0).toLowerCase()}${component.name.slice(1)}',
  fields: [
    ${fieldsString}
  ]
}
`
}

async function main() {
  if (!fs.existsSync(COLLECTIONS_DIR)) {
    fs.mkdirSync(COLLECTIONS_DIR, { recursive: true })
  }
  if (!fs.existsSync(BLOCKS_DIR)) {
    fs.mkdirSync(BLOCKS_DIR, { recursive: true })
  }
  const components = await fetchStoryblokSchema()
  for (const component of components) {
    let tsContent = ''
    let filePath = ''
    const fileName = `${toPascalCase(component.name)}.ts`
    if (component.is_nestable) {
      tsContent = componentToPayloadConfig(components, component, 'block')
      filePath = path.join(BLOCKS_DIR, fileName)
    } else {
      tsContent = componentToPayloadConfig(components, component, 'collection')
      filePath = path.join(COLLECTIONS_DIR, fileName)
    }
    fs.writeFileSync(filePath, tsContent)
  }
  console.log(
    `Payload collections and blocks written to ${COLLECTIONS_DIR} and ${BLOCKS_DIR}`
  )
}

main().catch(console.error)
