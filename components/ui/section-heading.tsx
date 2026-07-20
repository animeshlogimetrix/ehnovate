import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider',
              tone === 'light'
                ? 'border-white/15 bg-white/5 text-brand-gold'
                : 'border-primary/20 bg-primary/5 text-primary',
            )}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'text-pretty font-heading text-3xl font-bold tracking-tight sm:text-4xl',
            tone === 'light' ? 'text-white' : 'text-foreground',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={cn('text-pretty text-base leading-relaxed', tone === 'light' ? 'text-white/65' : 'text-muted-foreground')}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
