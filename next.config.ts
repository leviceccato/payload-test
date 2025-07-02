import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const config = {} satisfies NextConfig

export default withPayload(config, { devBundleServerPackages: false })
