import { Compass, Target, Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const mission = [
  'Turn passive monitoring into proactive, AI-driven intelligence',
  'Ship deployable, real-world systems — not research prototypes',
  'Unify detection, communication and decision-making in one platform',
  'Design for scale: from a single campus to nationwide deployments',
]

export function VisionMission() {
  return (
    <section className="bg-[#FFFDED] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What Drives Us" title="Vision & Mission" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                To become the most trusted technology partner for public safety and enterprise operations — building
                intelligent systems that make institutions safer, organisations smarter, and communities more secure.
              </p>
              <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
              <span className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
              <ul className="mt-4 space-y-3">
                {mission.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
