import { getPayload } from '@/utils/payload'
import { getDatabaseName, protectedDatabaseNames } from '@/utils/database'

async function main() {
  const branchName = process.argv[4]

  if (!branchName) {
    throw new Error(
      'Branch name is required. Usage: pnpm payload run src/scripts/delete-database.ts <branch-name>'
    )
  }

  const databaseName = getDatabaseName(branchName)
  if (protectedDatabaseNames.has(databaseName)) {
    throw new Error(`Cannot delete protected database "${databaseName}"`)
  }

  const payload = await getPayload()
  const mongoClient = payload.db.connection.getClient()

  try {
    const admin = mongoClient.db().admin()
    const databasesResult = await admin.listDatabases()
    const databaseExists = databasesResult.databases.some(
      (database) => database.name === databaseName
    )
    if (!databaseExists) {
      console.log(
        `Database "${databaseName}" does not exist, nothing to delete`
      )
      process.exit(0)
    }

    const branchDb = mongoClient.db(databaseName)
    await branchDb.dropDatabase()
  } catch (error) {
    console.error(error)
    throw new Error(`Error deleting database "${databaseName}"`)
  }

  await mongoClient.close()
  console.log(`Database "${databaseName}" deleted`)
}

main()
