import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Icon } from '@/components/ui/icon'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { products } from '@/lib/site'
import { cn } from '@/lib/utils'

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Live: 'bg-brand-green/10 text-brand-green border-brand-green/20',
    'In Development': 'bg-brand-gold/10 text-amber-700 border-brand-gold/30',
    Portfolio: 'bg-primary/10 text-primary border-primary/20',
  }
  return (
    <span className={cn('rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold', map[status] ?? map.Portfolio)}>
      {status}
    </span>
  )
}

export function ProductsShowcase() {
  const featured = products.slice(0, 2)
  const rest = products.slice(2)

  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Flagship platforms, engineered in-house"
          description="Proprietary AI products built to detect, correlate and coordinate — deployed in the field, not stuck in the lab."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                href={`/products#${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image || '/images/hero-ai-network.png'}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary backdrop-blur">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <StatusPill status={p.status} />
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">{p.badge}</p>
                    <h3 className="font-heading text-xl font-bold text-white">{p.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/products#${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <StatusPill status={p.status} />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
