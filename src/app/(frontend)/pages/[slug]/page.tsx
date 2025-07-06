import { Pages } from '@/collections/Pages'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getDocBySlug, getParamsByCollection } from '@/utils/payload'
import type {
  NextPage,
  GenerateStaticParams,
  GenerateMetadata,
} from '@/utils/next'

type Params = {
  slug: string
}

export const generateStaticParams: GenerateStaticParams<Params> = async () => {
  return getParamsByCollection(Pages.slug)
}

export const generateMetadata: GenerateMetadata<Params> = async (props) => {
  const params = await props.params
  const page = await getDocBySlug(Pages.slug, params.slug)

  return { title: page.title }
}

const Page: NextPage<Params> = async (props) => {
  const params = await props.params
  const page = await getDocBySlug(Pages.slug, params.slug)

  return (
    <div>
      {page.content?.map((block) => (
        <div key={block.id} className="prose lg:prose-xl">
          {block.blockType === 'Heading' ? (
            <h2>{block.heading}</h2>
          ) : block.blockType === 'Rich Text' ? (
            block.richText && (
              <RichText
                data={block.richText}
                converters={({ defaultConverters }) => {
                  return {
                    ...defaultConverters,
                    blocks: {
                      ...defaultConverters.blocks,
                      CustomBlock: () => {
                        return (
                          <div className="border p-2">
                            <span className="font-bold">Custom Block</span>
                            <br />
                            This is an example of a custom block. Showing that
                            we can have arbitrary blocks or components nested in
                            the rich text editor.
                          </div>
                        )
                      },
                    },
                  }
                }}
              />
            )
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Page
