import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { getPayload } from '@/utils/payload'
import { chunk, asyncRetry } from '@/utils/misc'
import type { Payload } from 'payload'
import type { Asset } from '@/payload-types'

async function main() {
   const backupRaw = await readFile('./storyblok-backup.json', 'utf8')
   const backup = JSON.parse(backupRaw) as Backup

   // const stories = backup.stories.filter((story: any) => !story.is_folder)

   const payload = await getPayload()

   const startTime = performance.now()

   /**
    * First we create all of the documents. These return a mapping of the original
    * Storyblok ids to the newly created Payload ones.
    */
   const assetFolderIdMap = await createAssetFolders(payload, backup.assetFolders)
   const assetData = await createAssets(payload, backup.assets)

   /**
    * Then we update the document relationships to use the new ids using the
    * maps from the previous step.
    */
   await updateAssetFolders(payload, backup.assetFolders, assetFolderIdMap)
   await updateAssets(payload, assetData.assets, assetData.idMap, assetFolderIdMap)

   const endTime = performance.now()

   console.log(`Done in ${Math.round((endTime - startTime) / 1000)} seconds.`)
}

main().catch(console.error).finally(() => process.exit(0))

type Backup = {
   assetFolders: StoryblokAssetFolder[]
   assets: StoryblokAsset[]
   stories: StoryblokStory[]
}

type StoryblokStory = {}

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

/**
 * I'm chunking the assets to avoid potential memory issues. Note
 * that I haven't limit tested this.
 */
async function createAssets(
   payload: Payload,
   assets: StoryblokAsset[],
   batchSize = 10,
): Promise<{ idMap: Map<number, string>, assets: StoryblokAsset[] }> {
   const deduplicatedAssetData = deduplicateAssets(assets)

   const assetBatches = chunk(deduplicatedAssetData.assets, batchSize)

   const idMap = new Map<number, string>()

   for (const assetBatch of assetBatches) {
      const payloadAssets = await Promise.all(assetBatch.map(async asset => {
         /**
          * Was getting a SocketError sometimes when downloading assets. A bit of
          * googling revealed this might be a Node thing. No clear solution besides
          * just retrying was suggested.
          */
         const response = await asyncRetry(() => fetch(asset.filename))
         const arrayBuffer = await asyncRetry(() => response.arrayBuffer())

         console.log(`Downloaded asset "${asset.short_filename}"`)

         const payloadAsset = await payload.create({
            collection: 'assets',
            data: {
               alt: asset.alt || asset.short_filename,
            },
            file: {
               data: Buffer.from(arrayBuffer),
               mimetype: asset.content_type,
               name: asset.short_filename,
               size: arrayBuffer.byteLength,
            },
         })

         console.log(`Created asset "${asset.short_filename}"`)

         return [asset.id, payloadAsset.id] as const
      }))

      for (const [storyblokId, payloadId] of payloadAssets) {
         idMap.set(storyblokId, payloadId)
      }
   }

   /**
    * Here I'm adding the duplicate map to the main map. This is so it's easier to
    * map the duplicates since we'll be mapping the Storyblok ids any way.
    */
   for (const [duplicateId, id] of deduplicatedAssetData.duplicateIdMap) {
      const payloadId = idMap.get(id)
      if (!payloadId) {
         throw new Error(`Duplicate of asset ${id} not found`)
      }

      idMap.set(duplicateId, payloadId)
   }

   return {
      idMap,
      assets: deduplicatedAssetData.assets,
   }
}

async function updateAssets(
   payload: Payload,
   assets: StoryblokAsset[],
   idMap: Map<number, string>,
   folderIdMap: Map<number, string>,
): Promise<void> {
   const assetBatches = chunk(assets, 100)

   for (const assetBatch of assetBatches) {
      await Promise.all(assetBatch.map(async asset => {
         if (!asset.asset_folder_id) {
            return
         }

         const id = idMap.get(asset.id)
         if (!id) {
            throw new Error(`Asset ${asset.id} not found`)
         }

         const folderId = folderIdMap.get(asset.asset_folder_id)
         if (!folderId) {
            throw new Error(`Folder ${asset.asset_folder_id} not found`)
         }

         await payload.update({
            collection: 'assets',
            id,
            data: {
               folder: folderId,
            },
         })

         console.log(`Updated asset "${asset.short_filename}"`)
      }))
   }
}

async function updateAssetFolders(
   payload: Payload,
   folders: StoryblokAssetFolder[],
   idMap: Map<number, string>,
): Promise<void> {
   await Promise.all(folders.map(async folder => {
      const id = idMap.get(folder.id)
      if (!id) {
         throw new Error(`Folder ${folder.id} not found`)
      }

      const parentId = idMap.get(folder.parent_id)
      if (!parentId) {
         return
      }

      await payload.update({
         collection: 'payload-folders',
         id,
         data: {
            folder: parentId,
         },
      })

      console.log(`Updated folder "${folder.name}"`)
   }))
}

async function createAssetFolders(
   payload: Payload,
   folders: StoryblokAssetFolder[]
): Promise<Map<number, string>> {
   const folderEntries = await Promise.all(folders.map(async folder => {
      const payloadFolder = await payload.create({
         collection: 'payload-folders',
         data: {
            name: folder.name,
         },
      })

      console.log(`Created folder "${folder.name}"`)

      return [folder.id, payloadFolder.id] as const
   }))

   return new Map(folderEntries)
}

/**
 * Some assets seem to have the same name. This causes issues with Mongo when
 * trying to create them. Rather than use the id for the name I have decided
 * to remove the duplicates. I'm also returning a map of duplicate ids that
 * point to the original id. This is used for updating stories that reference
 * the duplicates.
 */
function deduplicateAssets(assets: StoryblokAsset[]): {
   assets: StoryblokAsset[],
   duplicateIdMap: Map<number, number>
} {
   const assetMap = new Map<string, StoryblokAsset>()
   const duplicateMap = new Map<string, number[]>()
   const duplicateIdMap = new Map<number, number>()

   for (const asset of assets) {
      const existingAsset = assetMap.get(asset.short_filename)
      if (existingAsset) {
         const existingIds = duplicateMap.get(asset.short_filename) ?? []
         duplicateMap.set(asset.short_filename, existingIds.concat(existingAsset.id))
      }

      assetMap.set(asset.short_filename, asset)
   }

   for (const [assetName, ids] of duplicateMap) {
      const asset = assetMap.get(assetName)
      if (!asset) {
         throw new Error(`Duplicate of asset ${assetName} not found`)
      }

      for (const id of ids) {
         duplicateIdMap.set(id, asset.id)
      }
   }

   return {
      assets: Array.from(assetMap.values()),
      duplicateIdMap,
   }
}
