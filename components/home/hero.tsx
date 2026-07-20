'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { Counter } from '@/components/ui/counter'

const chips = ['AI Surveillance', 'Intelligence Platforms', 'Enterprise Software']

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/hero-ai-network.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-20 text-center sm:px-6 sm:pt-40 sm:pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
        >
          See faster. Decide sooner.{' '}
          <span className="bg-gradient-to-r from-primary via-sky-400 to-brand-green bg-clip-text text-transparent">
            Act with confidence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Ehnovate Technologies engineers intelligent AI surveillance, investigative intelligence, and enterprise
          systems — converting raw data into fast, actionable decisions for the people who cannot afford delay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore Products
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { icon: ShieldCheck, value: 2, suffix: '', label: 'AI Platforms' },
            { icon: Zap, value: 3, suffix: 's', label: 'Threat-to-Alert' },
            { icon: ShieldCheck, value: 3, suffix: '', label: 'Languages' },
            { icon: Zap, value: 6, suffix: '+', label: 'Use Cases' },
          ].map((s, i) => (
            <div key={i} className="glass-dark rounded-2xl border border-white/10 p-4 text-center">
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-white/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
