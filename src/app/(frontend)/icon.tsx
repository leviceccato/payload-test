import { getGlobal, normaliseAsset } from '@/utils/payload'
import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import { Settings } from '@/globals/Settings'
import type { NextIcon } from '@/utils/next'

export const contentType = 'image/png'

export const size = {
  width: 32,
  height: 32,
}

const Icon: NextIcon = async () => {
  const settings = await getGlobal(Settings.slug)
  const favicon = normaliseAsset(settings.favicon)

  if (!favicon?.url) {
    notFound()
  }

  return new ImageResponse(
    (
      <img
        src={`${process.env.NEXT_PUBLIC_PROD_URL}${favicon.url}`}
        width={size.width}
        height={size.height}
      />
    ),
    size
  )
}

export default Icon
