import { readFile } from 'node:fs/promises'
import { getPayload } from '@/utils/payload'
import type { Payload } from 'payload'

async function main() {
   let backup: Backup
   try {
      const backupRaw = await readFile(
         './storyblok-backup.json',
         'utf-8'
      )
      backup = JSON.parse(backupRaw)
   } catch (error) {
      console.error('Error reading backup file', error)
      throw error
   }

   // const stories = backup.stories.filter((story: any) => !story.is_folder)

   const payload = await getPayload()

   const startTime = performance.now()

   await createRedirects(payload, backup.stories)

   const endTime = performance.now()

   console.log(`Done in ${Math.round((endTime - startTime) / 1000)} seconds.`)
}

main().catch(console.error).finally(() => process.exit(0))

type Backup = {
   assetFolders: StoryblokAssetFolder[]
   assets: StoryblokAsset[]
   stories: StoryblokStory[]
}

type StoryblokStory = any

type StoryblokAssetFolder = {
   id: number
   name: string
   parent_id: number
}

type StoryblokAsset = {
   id: number
   alt: string
   asset_folder_id: number | null
   content_type: string
   filename: string
   short_filename: string
}

async function createRedirects(
   payload: Payload,
   stories: StoryblokStory[]
): Promise<void> {
   const redirects = stories.filter(story => {
      return story.content?.component === 'redirect'
   })

   const redirectMap = new Map<string, any>()

   for (const redirect of redirects) {
      redirectMap.set(redirect.content.source, redirect)
   }

   for (const redirect of redirectMap.values()) {
      try {
         await payload.create({
            collection: 'redirects',
            data: {
               from: redirect.content.source,
               to: {
                  type: 'custom',
                  url: redirect.content.destination,
               },
               type: redirect.content.statusCode,
            },
         })
      } catch (exception) {
         console.error(`Error creating redirect "${redirect.name}"`)
         throw exception
      }

      console.log(`Created redirect "${redirect.name}"`)
   }
}
