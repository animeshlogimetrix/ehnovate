import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/page-hero'
import { IndustriesGrid } from '@/components/sections/industries-grid'
import { StatsBand } from '@/components/sections/stats-band'
import { WhyChoose } from '@/components/sections/why-choose'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Ehnovate serves police and public safety, healthcare, campuses, industrial sites, government intelligence and enterprise operations.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Deployed where delay is not an option"
        description="Our platforms adapt to the environments that need real-time intelligence most — from public safety to healthcare and enterprise operations."
      />
      <IndustriesGrid withHeading={false} />
      <StatsBand />
      <WhyChoose tone="dark" />
      <Cta />
    </>
  )
}
