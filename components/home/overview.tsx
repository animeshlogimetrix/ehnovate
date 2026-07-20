import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const points = [
  'AI-powered surveillance and investigative intelligence tools',
  'Enterprise resource planning built on a secure core',
  'Deep-learning intelligence paired with real-time communication',
  'One unified ecosystem — from a single campus to nationwide',
]

export function Overview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Ehnovate"
            title="The technology backbone for safer, smarter institutions"
            description="Ehnovate Technologies is an AI and enterprise-software company building next-generation platforms for security, intelligence, and business operations. We design end-to-end systems that convert raw data into fast, actionable decisions."
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: 'Built for', v: 'Police, hospitals, campuses, industrial sites & enterprises', tone: 'primary' },
              { k: 'Approach', v: 'Deployable real-world systems — not research prototypes', tone: 'green' },
              { k: 'Unified', v: 'Detection, communication & decision-making in one platform', tone: 'gold' },
              { k: 'Designed for', v: 'Scale — single campus to nationwide deployments', tone: 'red' },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mb-3 h-1 w-10 rounded-full"
                  style={{
                    background:
                      card.tone === 'primary'
                        ? 'var(--brand-blue)'
                        : card.tone === 'green'
                          ? 'var(--brand-green)'
                          : card.tone === 'gold'
                            ? 'var(--brand-gold)'
                            : 'var(--brand-red)',
                  }}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{card.k}</p>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">{card.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
