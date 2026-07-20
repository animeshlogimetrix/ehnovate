import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { StatsBand } from '@/components/sections/stats-band'
import { VisionMission } from '@/components/sections/vision-mission'
import { WhyChoose } from '@/components/sections/why-choose'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Ehnovate Technologies is an AI and enterprise-software company building next-generation platforms for security, intelligence, and business operations.',
}

const principles = [
  'End-to-end systems, from AI surveillance to enterprise resource planning',
  'Deep-learning intelligence paired with real-time communication',
  'Deployable real-world systems — not research prototypes',
  'One unified ecosystem across detection, communication and decisions',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building the technology backbone for safer, smarter institutions"
        description="An AI and enterprise-software company converting raw data into fast, actionable decisions for the people who cannot afford delay."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Where intelligence meets real-time action"
              description="Ehnovate Technologies designs AI-powered surveillance and investigative intelligence tools alongside enterprise systems — all engineered end-to-end by our own teams."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We build for the people who cannot afford delay — police and public-safety teams, hospitals, campuses,
                industrial sites, and enterprises — pairing deep-learning intelligence with real-time communication in
                one unified ecosystem.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-muted p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: 'Founded on', v: 'Engineering intelligent, deployable systems' },
                  { k: 'Focus', v: 'Security, intelligence & enterprise operations' },
                  { k: 'Reach', v: 'Single campus to nationwide deployments' },
                  { k: 'Languages', v: 'English, Hindi & Marathi' },
                ].map((c, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.k}</p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand />
      <VisionMission />
      <WhyChoose />
      <Cta />
    </>
  )
}
