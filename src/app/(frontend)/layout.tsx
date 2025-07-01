import type { ReactNode } from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'
import Image from 'next/image'
import Link from '@/components/Link'
import LivePreview from '@/components/LivePreview'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: ReactNode }) {
  const payload = await getPayload({ config })

  const [header, pages] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.find({ collection: 'pages' }),
  ])

  return (
    <html lang="en">
      <body>
        <LivePreview />
        <div className="p-4 mx-auto max-w-screen-md">
          <header className="flex items-center gap-2 h-12">
            {typeof header.logo !== 'number' && header.logo?.url && (
              <div className="relative h-full aspect-square">
                <Image
                  src={header.logo.url}
                  alt={header.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <Link href="/" className="text-xl">
              Home
            </Link>
          </header>
          <ul className="flex gap-4">
            {pages.docs.map((page) => (
              <li key={page.id}>
                <Link href={`/pages/${page.slug}`}>{page.title}</Link>
              </li>
            ))}
          </ul>
          <hr className="mt-4" />
          <main className="mt-4">{props.children}</main>
        </div>
      </body>
    </html>
  )
}
