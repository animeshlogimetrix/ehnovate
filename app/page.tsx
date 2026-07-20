import { Hero } from '@/components/home/hero'
import { Overview } from '@/components/home/overview'
import { StatsBand } from '@/components/sections/stats-band'
import { VisionMission } from '@/components/sections/vision-mission'
import { Services } from '@/components/sections/services'
import { ProductsShowcase } from '@/components/sections/products-showcase'
import { IndustriesGrid } from '@/components/sections/industries-grid'
import { WhyChoose } from '@/components/sections/why-choose'
import { AchievementsGrid } from '@/components/sections/achievements-grid'
import { RoadmapTimeline } from '@/components/sections/roadmap-timeline'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'
import { Cta } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Overview />
      <VisionMission />
      <Services />
      <ProductsShowcase />
      <IndustriesGrid />
      <WhyChoose tone="dark" />
      <AchievementsGrid />
      <RoadmapTimeline />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
