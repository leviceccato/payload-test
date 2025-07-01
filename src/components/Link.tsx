'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function Link({
  children,
  ...props
}: React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <NextLink
      {...props}
      className={`${pathname === props.href && 'text-blue-500'} ${props.className ?? ''}`}
    >
      {children}
    </NextLink>
  )
}
