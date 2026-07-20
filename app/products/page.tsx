import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/page-hero'
import { Icon } from '@/components/ui/icon'
import { Reveal } from '@/components/ui/reveal'
import { ProductDetail } from '@/components/sections/product-detail'
import { ProcessFlow } from '@/components/sections/process-flow'
import { Cta } from '@/components/sections/cta'
import { products } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Ehnovate products: OWL-AI Surveillance, Secure-Link Intelligence, Ehnovate ERP Suite, PCMS and healthcare solutions.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Platforms that detect, correlate and coordinate"
        description="A portfolio of AI, intelligence and enterprise systems — engineered end-to-end and deployed where response time matters."
      />

      <section className="border-b border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {products.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`#${p.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon name={p.icon} className="h-4 w-4 text-primary" />
                {p.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {products.map((product, i) => (
        <ProductDetail key={product.slug} product={product} index={i} />
      ))}

      <ProcessFlow />
      <Cta />
    </>
  )
}
