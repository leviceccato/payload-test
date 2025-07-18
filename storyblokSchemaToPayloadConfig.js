import fs from 'fs'
import path from 'path'

const STORYBLOK_SPACE_ID = process.env.STORYBLOK_SPACE_ID
const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN

const API_URL = `https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}/components`

const COLLECTIONS_DIR = path.join('collections', '__generated__')
const COLLECTIONS_DIR_WITH_SRC = path.join('src', COLLECTIONS_DIR)
const COLLECTIONS_DIR_WITH_ALIAS = path.join('@', COLLECTIONS_DIR)

const BLOCKS_DIR = path.join('blocks', '__generated__')
const BLOCKS_DIR_WITH_SRC = path.join('src', BLOCKS_DIR)
const BLOCKS_DIR_WITH_ALIAS = path.join('@', BLOCKS_DIR)

const GLOBALS_DIR = path.join('globals', '__generated__')
const GLOBALS_DIR_WITH_SRC = path.join('src', GLOBALS_DIR)
const GLOBALS_DIR_WITH_ALIAS = path.join('@', GLOBALS_DIR)

const OVERRIDES = {
  redirect: {
    disabled: true,
  },
  errorPage: {
    isGlobal: true,
  },
  notFoundPage: {
    isGlobal: true,
  },
  customerMainPage: {
    isGlobal: true,
  },
  blogMainPage: {
    isGlobal: true,
  },
  guidesMainPage: {
    isGlobal: true,
  },
  eventsMainPage: {
    isGlobal: true,
  },
  integrationsMainPage: {
    isGlobal: true,
  },
  pricingMainPage: {
    isGlobal: true,
  },
  videosMainPage: {
    isGlobal: true,
  },
  templatesMainPage: {
    isGlobal: true,
  },
  reportsMainPage: {
    isGlobal: true,
  },
  favicon: {
    isGlobal: true,
  },
  language: {
    disabled: true,
  },
}

async function fetchStoryblokSchema() {
  const res = await fetch(API_URL, {
    headers: { Authorization: STORYBLOK_TOKEN },
  })
  if (!res.ok) throw new Error(await res.text())
  const data = await res.json()
  return data.components
}

function mapFileTypeToMimeType(fileType) {
  switch (fileType) {
    case 'images':
      return 'image'
    case 'videos':
      return 'video'
    default:
      throw new Error(`Unknown file type: ${fileType}`)
  }
}

function mapFieldType(components, component, field, key) {
  let comment = ''
  let groupFields = []
  let output = {
    name: field.display_name ?? key,
  }

  if (field.required) {
    output.required = true
  }

  if (field.description) {
    output.admin = output.admin ?? {}
    // Some Storyblok descriptions have newlines and quotes, clean these up
    output.admin.description = field.description
      .replace(/\n/g, ' ')
      .replace(/\s\s+/g, ' ')
      .replace(/"/g, '\\"')
  }

  switch (field.type) {
    case 'text':
      output.type = 'text'
      if (field.default_value !== undefined) {
        output.defaultValue = field.default_value
      }
      break
    case 'textarea':
      output.type = 'textarea'
      if (field.default_value !== undefined) {
        output.defaultValue = field.default_value
      }
      break
    case 'richtext':
      output.type = 'richText'
      if (
        Array.isArray(field.component_whitelist) &&
        field.component_whitelist.length > 0
      ) {
        output.editor = new Editor(field.component_whitelist)
      }
      break
    case 'number':
      output.type = 'number'
      if (field.min_value !== undefined) {
        output.min = field.min_value
      }
      if (field.max_value !== undefined) {
        output.max = field.max_value
      }
      if (field.steps !== undefined) {
        output.admin = output.admin ?? {}
        output.admin.step = field.steps
      }
      if (field.default_value !== undefined) {
        output.defaultValue = field.default_value
      }
      break
    case 'boolean':
      output.type = 'checkbox'
      if (!field.required && field.default_value) {
        output.defaultValue = true
      }
      break
    case 'image':
    case 'asset':
      output.type = 'upload'
      output.relationTo = 'assets'
      if (field.filetypes) {
        output.filterOptions = {
          mimeType: { contains: field.filetypes.map(mapFileTypeToMimeType) },
        }
      }
      break
    case 'option':
    case 'options':
      output.hasMany = field.type === 'options'
      if (
        field.source === 'internal_stories' &&
        Array.isArray(field.filter_content_type)
      ) {
        output.type = 'relationship'
        output.relationTo = field.filter_content_type

        if (field.max_options && Number(field.max_options) > 1) {
          output.maxRows = Number(field.max_options)
        }
        if (field.min_options) {
          output.minRows = Number(field.min_options)
        }
        break
      }
      if (Array.isArray(field.options)) {
        output.type = 'select'
        output.options = field.options.map((opt) => ({
          label: opt.name,
          value: opt.value,
        }))
        if (field.default_value) {
          output.defaultValue = field.default_value
        }
        break
      }
      // We aren't currently hitting this anywhere
      throw new Error(`Unhandled ${field.type} field: ${JSON.stringify(field)}`)
    case 'multioption':
      // We aren't currently using these
      throw new Error('Unhandled multioption field: ' + JSON.stringify(field))
    case 'bloks':
      output.type = 'blocks'
      output.blocks = []
      if (
        Array.isArray(field.component_whitelist) &&
        field.component_whitelist.length > 0
      ) {
        output.blockReferences = field.component_whitelist
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
            .map((comp) => comp.name)
        )
        output.blockReferences = targetBlocks
      }
      break
    case 'section':
    case 'tab':
      output.type = 'group'
      output.fields = new GroupFields(
        field.keys
          .filter((key) => key in component.schema)
          .map((key) => {
            groupFields.push(key)
            const { output } = mapFieldType(
              components,
              component,
              component.schema[key],
              key
            )
            return output
          })
      )
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
      output.relationTo = 'assets'
      output.hasMany = true
      if (field.filetypes) {
        output.filterOptions = {
          mimeType: { contains: field.filetypes.map(mapFileTypeToMimeType) },
        }
      }
      break
    case 'multilink':
      output.type = 'text'
      if (Object.keys(field).includes('link_scope')) {
        comment = `TODO: unhandled multilink field attributes 'link_scope'`
      }
      break
    case 'table':
      output.type = 'richText'
      output.editor = new Table()
      output.admin = output.admin ?? {}
      output.admin.description = `${
        output.admin.description ? `${output.admin.description} ` : ''
      }This field displays as a table editor. Since Payload v3.47 doesn't include a dedicated table field type, we've configured a rich text field to only allow table content as a workaround. To create the table you will need to type "/table" in the editor.`
      break
    default:
      throw new Error(`Unmapped field: ${JSON.stringify(field)}`)
  }

  return { output, comment, groupFields }
}

function objToJS(obj) {
  const imports = []
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
        return `${key}: ${JSON.stringify(value)}`
      }
      if (value instanceof Editor) {
        imports.push(
          'import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"'
        )
        return `${key}: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ${JSON.stringify(
          value.blocks
        )} })] })`
      }
      if (value instanceof GroupFields) {
        return `${key}: [${value.fields
          .map((field) => {
            const { imports: newImports, js } = objToJS(field)
            newImports.forEach((imp) => imports.push(imp))
            return `{ ${js} }`
          })
          .join(',\n      ')}
        ]`
      }
      if (value instanceof Table) {
        imports.push(
          'import { EXPERIMENTAL_TableFeature, lexicalEditor } from "@payloadcms/richtext-lexical"'
        )
        return `${key}: lexicalEditor({ features: () => [EXPERIMENTAL_TableFeature()], admin: { hideGutter: true, hideInsertParagraphAtEnd: true } })`
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

  return { imports, js }
}

function toPascalCase(str) {
  return str
    .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_ ]/g, '')
}

function componentToPayloadConfig(components, component, type) {
  const fields = Object.entries(component.schema).map(([key, field]) =>
    mapFieldType(components, component, field, key)
  )

  const groupFields = new Set(
    fields.flatMap((field) => {
      return field.groupFields
    })
  )

  const filteredFields = fields.filter((field) => {
    return !groupFields.has(field.output.name)
  })

  const pascalName = toPascalCase(component.name)
  const imports = new Set()
  const fieldsString = filteredFields
    .map(({ output, comment }) => {
      if (comment.length > 0 && output === null) {
        return `// ${comment}`
      }
      const { imports: newImports, js } = objToJS(output)
      newImports.forEach((imp) => imports.add(imp))
      return `
    {
      ${comment ? `// ${comment}\n` : ''}${js}
    }`
    })
    .join(',\n')

  const payloadType = {
    collection: 'CollectionConfig',
    block: 'Block',
    global: 'GlobalConfig',
  }[type]
  if (!payloadType) {
    throw new Error(`Unknown type: ${type}`)
  }

  const slug = component.name.charAt(0).toLowerCase() + component.name.slice(1)

  return `import type { ${payloadType} } from "payload"\n${Array.from(imports)
    .join('\n')
    .trim()}

export const ${pascalName} = {
  slug: '${slug}',
  ${
    type === 'block'
      ? `admin: {
    disableBlockName: true,
  },`
      : ''
  }
  fields: [
    ${fieldsString}
  ]
} as const satisfies ${payloadType}
`
}

function schemaToIndex(schema, dir, constName) {
  const pascalNames = schema.map((collection) => toPascalCase(collection.name))

  const imports = pascalNames
    .map((pascalName) => {
      return `import { ${pascalName} } from "${dir}/${pascalName}"`
    })
    .join('\n')

  const indexContent = `${imports}

export const ${constName} = [
  ${pascalNames.join(',\n  ')}
]
`
  return indexContent
}

async function main() {
  fs.rmSync(COLLECTIONS_DIR_WITH_SRC, { recursive: true, force: true })
  fs.rmSync(BLOCKS_DIR_WITH_SRC, { recursive: true, force: true })
  fs.rmSync(GLOBALS_DIR_WITH_SRC, { recursive: true, force: true })

  if (!fs.existsSync(COLLECTIONS_DIR_WITH_SRC)) {
    fs.mkdirSync(COLLECTIONS_DIR_WITH_SRC, { recursive: true })
  }
  if (!fs.existsSync(BLOCKS_DIR_WITH_SRC)) {
    fs.mkdirSync(BLOCKS_DIR_WITH_SRC, { recursive: true })
  }
  if (!fs.existsSync(GLOBALS_DIR_WITH_SRC)) {
    fs.mkdirSync(GLOBALS_DIR_WITH_SRC, { recursive: true })
  }
  const unfilteredComponents = await fetchStoryblokSchema()
  const components = unfilteredComponents.filter((component) => {
    return !OVERRIDES[component.name]?.disabled
  })

  for (const component of components) {
    let tsContent = ''
    let filePath = ''
    const fileName = `${toPascalCase(component.name)}.ts`
    if (component.is_nestable) {
      tsContent = componentToPayloadConfig(components, component, 'block')
      filePath = path.join(BLOCKS_DIR_WITH_SRC, fileName)
    } else if (OVERRIDES[component.name]?.isGlobal) {
      tsContent = componentToPayloadConfig(components, component, 'global')
      filePath = path.join(GLOBALS_DIR_WITH_SRC, fileName)
    } else {
      tsContent = componentToPayloadConfig(components, component, 'collection')
      filePath = path.join(COLLECTIONS_DIR_WITH_SRC, fileName)
    }
    fs.writeFileSync(filePath, tsContent)
  }
  const collectionsIndexContent = schemaToIndex(
    components.filter(
      (component) =>
        !component.is_nestable && !OVERRIDES[component.name]?.isGlobal
    ),
    COLLECTIONS_DIR_WITH_ALIAS,
    'generatedCollections'
  )
  const globalsIndexContent = schemaToIndex(
    components.filter(
      (component) =>
        !component.is_nestable && OVERRIDES[component.name]?.isGlobal
    ),
    GLOBALS_DIR_WITH_ALIAS,
    'generatedGlobals'
  )
  const blocksIndexContent = schemaToIndex(
    components.filter((component) => component.is_nestable),
    BLOCKS_DIR_WITH_ALIAS,
    'generatedBlocks'
  )
  fs.writeFileSync(
    path.join(COLLECTIONS_DIR_WITH_SRC, '_index.ts'),
    collectionsIndexContent
  )
  fs.writeFileSync(
    path.join(GLOBALS_DIR_WITH_SRC, '_index.ts'),
    globalsIndexContent
  )
  fs.writeFileSync(
    path.join(BLOCKS_DIR_WITH_SRC, '_index.ts'),
    blocksIndexContent
  )
  console.log(
    `Payload collections, globals and blocks written to ${COLLECTIONS_DIR_WITH_SRC}, ${GLOBALS_DIR_WITH_SRC} and ${BLOCKS_DIR_WITH_SRC}`
  )
}

main().catch(console.error)

class Editor {
  constructor(blocks) {
    this.blocks = blocks
  }
}

class Table {}

class GroupFields {
  constructor(fields) {
    this.fields = fields
  }
}
