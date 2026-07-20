import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="Ehnovate Technologies home">
      <span className="relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/5">
        <Image src="/images/ehnovate-logo.jpeg" alt="Ehnovate Technologies logo" fill sizes="40px" className="object-cover" priority />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-extrabold tracking-tight',
            variant === 'light' ? 'text-white' : 'text-primary',
          )}
        >
          EHNOVATE
        </span>
        <span
          className={cn(
            'text-[0.62rem] font-semibold uppercase tracking-[0.22em]',
            variant === 'light' ? 'text-white/70' : 'text-brand-green',
          )}
        >
          Technologies
        </span>
      </span>
    </Link>
  )
}
