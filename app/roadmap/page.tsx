import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/page-hero'
import { RoadmapTimeline } from '@/components/sections/roadmap-timeline'
import { ProcessFlow } from '@/components/sections/process-flow'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Roadmap',
  description:
    'The Ehnovate roadmap — from deployed foundations to live video intelligence and full platform expansion.',
}

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="What's Next"
        title="Where Ehnovate is headed"
        description="A clear path from today's deployed foundations to live video intelligence and nationwide platform expansion."
      />
      <RoadmapTimeline withHeading={false} />
      <ProcessFlow />
      <Cta />
    </>
  )
}
