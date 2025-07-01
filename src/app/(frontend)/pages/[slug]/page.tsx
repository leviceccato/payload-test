import { getPayload } from 'payload'
import { Pages } from '@/collections/Pages'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({ collection: Pages.slug })
  return pages.docs.map((doc) => ({ slug: doc.slug }))
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: Pages.slug,
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  if (!result.docs.length) {
    return notFound()
  }

  return <div>{result.docs[0].title}</div>
}
