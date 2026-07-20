import { Icon } from '@/components/ui/icon'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { industries } from '@/lib/site'

export function IndustriesGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {withHeading && (
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Built for the people who cannot afford delay"
            description="From public safety to healthcare and enterprise operations, our platforms adapt to the environments that need them most."
          />
        )}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.07}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">{ind.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
