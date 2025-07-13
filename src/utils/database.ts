import { execSync } from 'node:child_process'

export const protectedDatabaseNames = new Set(['main'])

let cachedDatabaseName = ''

export function getDatabaseName(branchName?: string): string {
  if (cachedDatabaseName && !branchName) {
    return cachedDatabaseName
  }

  if (!branchName) {
    try {
      branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    } catch (error) {
      console.error(error)
      throw new Error('Could not get branch name')
    }
  }

  let databaseName = branchName
    .toLocaleLowerCase()
    // Replace invalid characters with hyphens
    // Invalid chars: /\. "$*<>:|?` and quotes, spaces, null chars
    .replace(/[\/\\. "$*<>:|?`'"'\s\0]+/g, '-')
    // Remove leading/trailing hyphens and clean up multiple consecutive hyphens
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

  // If name starts with a number, prefix with 'db-'
  if (/^\d/.test(databaseName)) {
    databaseName = `db-${databaseName}`
  }

  // Truncate to 64 characters (MongoDB's limit)
  if (databaseName.length > 64) {
    databaseName = databaseName.substring(0, 64)
    // Remove trailing hyphen if truncation created one
    databaseName = databaseName.replace(/-+$/, '')
  }

  cachedDatabaseName = databaseName

  return databaseName
}
