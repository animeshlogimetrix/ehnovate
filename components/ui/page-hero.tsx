import { Reveal } from './reveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-white sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
