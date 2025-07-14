import { getDatabaseName, protectedDatabaseNames } from '@/utils/database'

async function main() {
  const branchName = process.argv[4]

  if (!branchName) {
    throw new Error(
      'Branch name is required. Usage: pnpm payload run src/scripts/delete-branch-assets.ts <branch-name>'
    )
  }

  const databaseName = getDatabaseName(branchName)
  if (protectedDatabaseNames.has(databaseName)) {
    throw new Error(`Cannot delete protected branch assets "${databaseName}"`)
  }

  console.log(`Branch assets "${databaseName}" deleted`)
}

main()
