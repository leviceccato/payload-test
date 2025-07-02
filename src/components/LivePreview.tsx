'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export default function LivePreview() {
  const router = useRouter()

  return (
    <RefreshRouteOnSave
      refresh={router.refresh}
      serverURL={window.location.origin}
    />
  )
}
