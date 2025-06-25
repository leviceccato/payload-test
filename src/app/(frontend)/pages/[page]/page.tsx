import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function Page(props: {
  params: Promise<{ page: string }>
}) {
  const params = await props.params
  const payload = await getPayload({ config })

  const pageData = await payload.find({
    collection: 'pages',
    where: { field: { equals: params.page } },
  })

  return <div>{pageData.docs[0].field}</div>
}
