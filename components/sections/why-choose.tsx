import { Icon } from '@/components/ui/icon'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { whyChoose } from '@/lib/site'

export function WhyChoose({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'relative overflow-hidden bg-navy py-20 text-white sm:py-28' : 'bg-muted py-20 sm:py-28'}>
      {dark && <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone={dark ? 'light' : 'dark'}
          eyebrow="Why Ehnovate"
          title="Technology & competitive advantage"
          description="A unified, real-time platform where detection, intelligence and communication live together — not stitched-together tools."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07}>
              <div
                className={
                  dark
                    ? 'group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40'
                    : 'group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'
                }
              >
                <span
                  className={
                    dark
                      ? 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-sky-300'
                      : 'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'
                  }
                >
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className={dark ? 'mt-5 font-heading text-base font-bold text-white' : 'mt-5 font-heading text-base font-bold text-foreground'}>
                  {w.title}
                </h3>
                <p className={dark ? 'mt-2 text-sm leading-relaxed text-white/60' : 'mt-2 text-sm leading-relaxed text-muted-foreground'}>
                  {w.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
