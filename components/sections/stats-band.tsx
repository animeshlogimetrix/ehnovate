import { Counter } from '@/components/ui/counter'
import { Reveal } from '@/components/ui/reveal'
import { stats } from '@/lib/site'

export function StatsBand() {
  return (
    <section className="relative -mt-px bg-navy-soft py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-brand-gold" />
              <p className="mt-3 text-sm text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
