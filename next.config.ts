import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import { z } from 'zod'

const config = {} satisfies NextConfig

export default withPayload(config, { devBundleServerPackages: false })

/**
 * Validate environment variables with Zod. This will fail the build
 * if any are missing or invalid. We cast their types afterwards
 * since we can be sure they're correct.
 */

const envSchema = z.object({
  PAYLOAD_SECRET: z.string(),
  PREVIEW_SECRET: z.string(),
  BLOB_READ_WRITE_TOKEN: z.string(),
  VERCEL_DEPLOY_HOOK: z.string().url(),
  NEXT_PUBLIC_PROD_URL: z.string().url(),
  MONGODB_PASSWORD: z.string(),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
