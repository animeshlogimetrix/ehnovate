import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ehnovate Technologies to discuss AI surveillance, intelligence platforms and enterprise systems for your organisation.',
}

const details = [
  { icon: Mail, label: 'Email', value: siteConfig.email },
  { icon: Phone, label: 'Phone', value: siteConfig.phone },
  { icon: MapPin, label: 'Location', value: siteConfig.location },
  { icon: Clock, label: 'Response time', value: 'Within 1 business day' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build intelligent systems together"
        description="Tell us about your security, intelligence or enterprise challenge — our team will get back to you within one business day."
      />

      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Get in touch</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Whether you&apos;re a public-safety agency, hospital, enterprise or government unit,
                  we&apos;d love to understand your goals and show how Ehnovate can help.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </span>
                      <span className="mt-0.5 text-sm font-medium text-foreground">{d.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
