import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/lib/site'

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Field Feedback"
          title="Trusted where response time matters"
          description="What teams across public safety, intelligence and industrial security say about deploying Ehnovate."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <Quote className="h-8 w-8 text-primary/30" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
