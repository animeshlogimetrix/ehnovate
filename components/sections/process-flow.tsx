import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { owlProcess } from '@/lib/site'

export function ProcessFlow() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How OWL-AI Works"
          title="From passive footage to proactive response"
          description="Response time reduced from minutes to seconds — every step engineered for speed."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {owlProcess.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="group relative flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-foreground">{step}</p>
                {i < owlProcess.length - 1 && (
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand-green opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
