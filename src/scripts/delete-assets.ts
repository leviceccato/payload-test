import { getPayload } from '@/utils/payload'
import { chunk } from '@/utils/misc'

async function main() {
   const payload = await getPayload()

   const startTime = performance.now()

   const assets = await payload.find({
      collection: 'assets',
      pagination: false,
   })

   const assetBatches = chunk(assets.docs, 100)

   for (const assetBatch of assetBatches) {
      await payload.delete({
         collection: 'assets',
         where: {
            id: {
               in: assetBatch.map(asset => asset.id),
            },
         },
      })

      console.log(`Deleted ${assetBatch.length} assets`)
   }

   const assetFolders = await payload.find({
      collection: 'payload-folders',
      pagination: false,
   })

   const assetFolderBatches = chunk(assetFolders.docs, 100)

   for (const assetFolderBatch of assetFolderBatches) {
      await payload.delete({
         collection: 'payload-folders',
         where: {
            id: {
               in: assetFolderBatch.map(folder => folder.id),
            },
         },
      })

      console.log(`Deleted ${assetFolderBatch.length} asset folders`)
   }

   const endTime = performance.now()

   console.log(`Done in ${Math.round((endTime - startTime) / 1000)} seconds.`)
}

main().catch(console.error).finally(() => process.exit(0))
