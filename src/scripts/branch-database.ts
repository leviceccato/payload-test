import { getPayload } from '@/utils/payload'
import { getDatabaseName } from '@/utils/database'

async function main() {
  const fromDatabaseName = process.argv[4]

  if (!fromDatabaseName) {
    throw new Error(
      'From database name is required. Usage: pnpm payload run src/scripts/branch-database.ts <from-database-name>'
    )
  }

  const payload = await getPayload()

  const mongoClient = payload.db.connection.getClient()

  const databaseName = getDatabaseName()
  const fromDatabase = mongoClient.db(fromDatabaseName)
  const branchDatabase = mongoClient.db(databaseName)

  const fromDatabaseCollections = await fromDatabase.listCollections().toArray()

  for (const collectionInfo of fromDatabaseCollections) {
    const docs = await fromDatabase
      .collection(collectionInfo.name)
      .find({})
      .toArray()

    if (docs.length > 0) {
      await branchDatabase
        .collection(collectionInfo.name)
        .drop()
        .catch(() => {}) // Ignore if doesn't exist
      await branchDatabase.collection(collectionInfo.name).insertMany(docs)
    }
  }

  console.log(`Database "${databaseName}" created`)
}

main()
