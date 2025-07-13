import '@/app/(frontend)/styles.css'
import Link from '@/components/Link'
import LivePreview from '@/components/LivePreview'
import { getDocs, getGlobal } from '@/utils/payload'
import { Pages } from '@/collections/Pages'
import type { NextLayout, GenerateLayoutMetadata } from '@/utils/next'
import { Settings } from '@/globals/Settings'

export const generateMetadata: GenerateLayoutMetadata = async () => {
  const settings = await getGlobal(Settings.slug)

  return {
    title: {
      default: settings.defaultTitle || 'Lyssna',
      template: settings.titleTemplate || '%s | Lyssna',
    },
  }
}

const Layout: NextLayout = async (props) => {
  const pages = await getDocs(Pages.slug)

  return (
    <html lang="en">
      <body>
        <LivePreview />
        <div className="p-4 mx-auto max-w-screen-md">
          <header className="flex items-center gap-2 h-12">
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

export default Layout
