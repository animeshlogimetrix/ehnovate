import type { Metadata } from 'next'
import { Cpu, Radio, ShieldCheck, Layers, Globe2, Boxes } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { WhyChoose } from '@/components/sections/why-choose'
import { ProcessFlow } from '@/components/sections/process-flow'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Deep-learning threat scoring, unified AI and communication, smart wearable integration and scalable cloud architecture — the technology behind Ehnovate.',
}

const stack = [
  { icon: Cpu, title: 'Computer Vision & Deep Learning', description: 'Weapon recognition, behaviour analysis and biometric matching powered by purpose-built models.' },
  { icon: Radio, title: 'Real-Time Communication', description: 'One-to-one and group coordination channels embedded directly into the detection workflow.' },
  { icon: ShieldCheck, title: 'Hardware-Bound Security', description: 'Authentication tied to BIOS, MAC and GUID with role-based access and immutable audit trails.' },
  { icon: Layers, title: 'Correlation Engines', description: 'Three parallel engines — exact, fuzzy and phonetic — with analyst confidence scoring.' },
  { icon: Globe2, title: 'Offline-Capable Pipelines', description: 'Face recognition and correlation that run fully offline for air-gapped environments.' },
  { icon: Boxes, title: 'Modular Cloud Architecture', description: 'Extensible core scaling from a single site to nationwide, multi-agency deployments.' },
]

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="The intelligence engine behind every deployment"
        description="Deep-learning detection, real-time communication and ironclad security — unified in one modular, scalable platform."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Technology Stack"
            title="Engineered for speed, scale and security"
            description="Every capability is built in-house and designed to plug into one extensible core."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow />
      <WhyChoose tone="dark" />
      <Cta />
    </>
  )
}
