import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { AchievementsGrid } from '@/components/sections/achievements-grid'
import { StatsBand } from '@/components/sections/stats-band'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Real-world deployments and milestones — including the Kumbh Mela 2026 security deployment and two proprietary in-house AI platforms.',
}

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Milestones on the Ground"
        title="Proven where it matters most"
        description="From large-scale public-safety deployments to two proprietary AI platforms built entirely in-house."
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    <MapPin className="h-3.5 w-3.5" />
                    Haridwar, Uttarakhand
                  </span>
                  <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">Kumbh Mela 2026 Security Deployment</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
                    OWL-AI deployed for large-scale public-safety monitoring in coordination with the State Police and
                    Mela Authority — proving real-time detection and coordination at massive crowd scale.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: 'Scale', v: 'Massive crowd monitoring' },
                    { k: 'Partners', v: 'State Police & Mela Authority' },
                    { k: 'Platform', v: 'OWL-AI Surveillance' },
                    { k: 'Focus', v: 'Public safety & response' },
                  ].map((c, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">{c.k}</p>
                      <p className="mt-1 text-sm font-medium">{c.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AchievementsGrid withHeading />
      <StatsBand />
      <Cta />
    </>
  )
}
