import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { roadmap } from '@/lib/site'

const phaseColor: Record<string, string> = {
  NOW: 'var(--brand-green)',
  NEXT: 'var(--brand-blue)',
  AHEAD: 'var(--brand-gold)',
}

export function RoadmapTimeline({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {withHeading && (
          <SectionHeading
            tone="light"
            eyebrow="What's Next"
            title="The Ehnovate roadmap"
            description="From deployed foundations to live video intelligence and full platform expansion."
          />
        )}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {roadmap.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 0.12}>
              <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wider text-navy"
                    style={{ background: phaseColor[phase.phase] }}
                  >
                    {phase.phase}
                  </span>
                  <span className="text-xs text-white/40">Phase {i + 1}</span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{phase.title}</h3>
                <ul className="mt-4 space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: phaseColor[phase.phase] }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
