'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LivePreview() {
  const router = useRouter()
  const [serverURL, setServerURL] = useState('')

  useEffect(() => {
    setServerURL(window.location.origin)
  }, [])

  return (
    serverURL && (
      <RefreshRouteOnSave refresh={router.refresh} serverURL={serverURL} />
    )
  )
}
