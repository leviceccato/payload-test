'use client'

import {
  useDocumentInfo,
  Button,
  ConfirmationModal,
  useModal,
  toast,
} from '@payloadcms/ui'
import { useRouter } from 'next/navigation'
import type { UIFieldClientComponent, UIFieldClientProps } from 'payload'

export const Deploy: UIFieldClientComponent = (props: UIFieldClientProps) => {
  const documentInfo = useDocumentInfo()
  const modal = useModal()
  const router = useRouter()

  async function deployRelease() {
    try {
      const publishResponse = await fetch(
        `/api/releases/${documentInfo.id}/publish`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (!publishResponse.ok) {
        throw new Error('Failed to publish release', { cause: publishResponse })
      }

      const deleteResponse = await fetch(`/api/releases/${documentInfo.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!deleteResponse.ok) {
        throw new Error('Failed to delete release', { cause: deleteResponse })
      }

      const deployResponse = await fetch(`/api/releases/deploy`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!deployResponse.ok) {
        throw new Error('Failed to deploy to Vercel', { cause: deployResponse })
      }
    } catch (error) {
      toast.error('Failed to deploy release', {
        description: error instanceof Error ? error.message : 'Unknown error',
      })
      return
    }
    router.push('/admin/collections/releases')
    toast.success('Release published')
  }

  return (
    <>
      <Button onClick={() => modal.openModal('confirm-deploy')}>
        Deploy release manually
      </Button>
      <ConfirmationModal
        modalSlug="confirm-deploy"
        heading="Confirm deploy"
        body="Are you sure you want to deploy this release?"
        onConfirm={deployRelease}
      />
    </>
  )
}

export default Deploy
