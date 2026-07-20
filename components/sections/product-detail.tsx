import Image from 'next/image'
import { Check } from 'lucide-react'
import { Icon } from '@/components/ui/icon'
import { Reveal } from '@/components/ui/reveal'
import { products } from '@/lib/site'
import { cn } from '@/lib/utils'

type Product = (typeof products)[number]

const statusStyle: Record<string, string> = {
  Live: 'bg-brand-green/10 text-brand-green border-brand-green/20',
  'In Development': 'bg-brand-gold/10 text-amber-700 border-brand-gold/30',
  Portfolio: 'bg-primary/10 text-primary border-primary/20',
}

export function ProductDetail({ product, index }: { product: Product; index: number }) {
  const flipped = index % 2 === 1

  return (
    <section id={product.slug} className={cn('scroll-mt-24 py-16 sm:py-20', index % 2 === 1 ? 'bg-muted' : 'bg-background')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn('grid items-center gap-10 lg:grid-cols-2', flipped && 'lg:[&>*:first-child]:order-2')}>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={520}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-navy">
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
                  <Icon name={product.icon} className="relative h-20 w-20 text-white/70" />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={product.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">{product.badge}</span>
                <span
                  className={cn(
                    'rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold',
                    statusStyle[product.status] ?? statusStyle.Portfolio,
                  )}
                >
                  {product.status}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">{product.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-foreground">{cap.title}</h3>
                <ul className="mt-3 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
