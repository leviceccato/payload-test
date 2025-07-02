import { getPayload } from 'payload'
import { Pages } from '@/collections/Pages'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Head from 'next/head'
import { draftMode } from 'next/headers'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: Pages.slug,
    where: {
      slug: {
        exists: true,
      },
    },
  })

  return pages.docs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const draft = await draftMode()

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: Pages.slug,
    limit: 1,
    draft: draft.isEnabled,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })
  return { title: result.docs[0].title }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const draft = await draftMode()

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: Pages.slug,
    limit: 1,
    draft: draft.isEnabled,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  const [doc] = result.docs

  if (!doc) {
    return notFound()
  }

  return (
    <div>
      {doc.content?.map((block) => (
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
