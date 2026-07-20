import { Award } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { achievements } from '@/lib/site'

export function AchievementsGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {withHeading && (
          <SectionHeading
            eyebrow="Milestones on the Ground"
            title="Achievements"
            description="Real-world deployments and proprietary platforms that prove our technology performs when it matters most."
          />
        )}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-amber-600">
                  <Award className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-base font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                <span className="mt-4 h-1 w-10 rounded-full bg-brand-gold transition-all group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
