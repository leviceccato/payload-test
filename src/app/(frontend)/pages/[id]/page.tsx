import { getPayload } from 'payload'
import { Pages } from '@/collections/Pages'
import config from '@/payload.config'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({ collection: Pages.slug })
  return pages.docs.map(({ id }) => ({ id }))
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const payload = await getPayload({ config })

  const doc = await payload.findByID({
    collection: Pages.slug,
    id: params.id,
  })

  return <div>{doc.id}</div>
}
