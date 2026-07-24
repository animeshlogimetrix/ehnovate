import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Play,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { IconBadge } from "@/components/site/IconBadge";
import {
  pillars,
  products,
  industries,
  advantages,
  achievements,
  roadmap,
  stats,
} from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AIVisualization } from "@/components/site/AIVisualization";
import { HeroBackground } from "@/components/site/HeroBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ehnovate Technologies — AI Surveillance, Intelligence & Enterprise Systems" },
      { property: "og:title", content: "Ehnovate Technologies — AI, Security & Enterprise Systems" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const faqs = [
  {
    q: "What does Ehnovate Technologies build?",
    a: "We build AI-native platforms for security and intelligence — OWL-AI Surveillance and Secure-Link — plus an enterprise ERP suite, PCMS preventive-care systems and refurbished medical imaging solutions.",
  },
  {
    q: "Where has OWL-AI been deployed?",
    a: "OWL-AI has been deployed for large-scale public-safety monitoring at Kumbh Mela 2026 in Haridwar, in coordination with State Police and the Mela Authority.",
  },
  {
    q: "Can your intelligence platform run offline?",
    a: "Yes. Secure-Link's face recognition and correlation engines are built to run fully offline for classified, air-gapped environments, with hardware-bound authentication.",
  },
  {
    q: "Which industries do you serve?",
    a: "Public safety, healthcare, education campuses, industrial sites, government and enterprise — anywhere fast, trustworthy decisions matter.",
  },
  {
    q: "How can we partner with Ehnovate?",
    a: "Reach out via the Contact page. We work with agencies, integrators and enterprises on pilots, deployments and long-term partnerships.",
  },
];

const testimonials = [
  {
    quote:
      "The threat-to-alert response time has genuinely changed how our team operates on the ground.",
    name: "Field Command Lead",
    role: "State Police, Kumbh 2026",
  },
  {
    quote:
      "Secure-Link collapsed weeks of manual correlation into minutes — and the offline mode is essential for our environments.",
    name: "Senior Analyst",
    role: "Intelligence Bureau",
  },
  {
    quote:
      "One platform, real-time alerts, and multilingual UI — it fits how our officers actually work.",
    name: "Deployment Officer",
    role: "Public Safety Agency",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pb-20 lg:pt-32 lg:pb-28 min-h-[100vh] sm:min-h-[90vh] flex flex-col justify-center">
        {/* We removed the hard bg-slate-50 here to let the HeroBackground shine through */}
        <HeroBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <Reveal>
                <div className="inline-flex items-center rounded-full border border-[color:var(--brand-blue)]/20 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-[color:var(--brand-blue)] shadow-[0_0_15px_-3px_var(--brand-blue)]">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enterprise AI Solutions
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.05] tracking-tight text-foreground">
                  Intelligent systems for a{" "}
                  <br className="hidden sm:block lg:hidden" />
                  <span className="relative">
                    <span className="relative z-10 gradient-text">safer,</span>
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-[color:var(--brand-blue)]/10 blur-sm -z-10" />
                  </span>{" "}
                  smarter world.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed font-light mx-auto lg:mx-0">
                  Advanced AI surveillance, intelligence correlation, and enterprise platforms 
                  engineered to help institutions see faster, decide sooner, and act with 
                  absolute confidence.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                  <Link
                    to="/products"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_20px_-5px_var(--brand-blue)] hover:shadow-[0_0_30px_-5px_var(--brand-blue)] transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/50 backdrop-blur-md px-8 py-4 text-base font-semibold text-foreground border border-black/5 hover:bg-white/80 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Sales <Play className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </Reveal>

              {/* Bottom Hero Enhancement: Horizontal AI Network */}
              <Reveal delay={0.3}>
                <div className="mt-12 w-full max-w-lg hidden sm:block relative h-8">
                  <div className="absolute inset-0 flex items-center opacity-40">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[color:var(--brand-blue)] to-transparent" />
                    <div className="absolute left-1/4 w-1.5 h-1.5 rounded-full bg-[color:var(--brand-blue)] shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
                    <div className="absolute left-2/4 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <div className="absolute left-3/4 w-1.5 h-1.5 rounded-full bg-[color:var(--brand-blue)] shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
                  </div>
                  <motion.div 
                    className="absolute inset-0 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.div 
                      className="w-8 h-[2px] bg-cyan-300 rounded-full shadow-[0_0_8px_rgba(103,232,249,1)]"
                      animate={{ x: [0, 400] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </Reveal>
            </div>

            {/* Right — geometric tile */}
            <Reveal delay={0.2}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <AIVisualization />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Layer 10: Premium Hero Ending Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden">
          {/* Blurred gradient fade to white */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
          
          {/* Fading Blueprint Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, transparent, black)' }} />
          
          {/* Layered SVG Wave */}
          <svg className="absolute bottom-0 w-full h-auto text-white drop-shadow-[0_-10px_30px_rgba(37,99,235,0.1)]" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* Deepest abstract wave */}
            <path d="M0 100 C 320 20, 640 120, 1440 50 V 150 H 0 Z" fill="rgba(255,255,255,0.3)" />
            <path d="M0 120 C 480 40, 960 140, 1440 80 V 150 H 0 Z" fill="rgba(255,255,255,0.6)" />
            <path d="M0 140 C 400 100, 1000 60, 1440 120 V 150 H 0 Z" fill="currentColor" />
            
            {/* Connection traces over wave */}
            <path d="M0 100 C 320 20, 640 120, 1440 50" stroke="rgba(37,99,235,0.15)" strokeWidth="1" strokeDasharray="4 8" />
            <path d="M0 120 C 480 40, 960 140, 1440 80" stroke="rgba(6,182,212,0.1)" strokeWidth="0.5" />
          </svg>
          
          {/* Glowing connection lines crossing the threshold */}
          <div className="absolute bottom-0 left-[20%] w-px h-32 bg-gradient-to-t from-transparent via-[color:var(--brand-blue)]/20 to-transparent" />
          <div className="absolute bottom-0 left-[21%] w-px h-24 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent" />
          <div className="absolute bottom-0 right-[30%] w-px h-40 bg-gradient-to-t from-transparent via-[color:var(--brand-blue)]/15 to-transparent" />
          <div className="absolute bottom-[10%] right-[32%] w-2 h-2 rounded-full bg-cyan-400/20 blur-[2px]" />
          
          {/* Disappearing Particles */}
          <motion.div 
            className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{ y: [0, -20], opacity: [0, 0.4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute bottom-16 right-1/4 w-1 h-1 bg-[color:var(--brand-blue)] rounded-full"
            animate={{ y: [0, -30], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative py-16 sm:py-24">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[color:var(--brand-green)]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-bold tracking-widest uppercase mb-6 text-foreground/70">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
                Building the technology backbone for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[color:var(--brand-green)]">safer, smarter institutions.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[color:var(--brand-green)]/20 blur-sm -z-10" />
                </span>
              </h2>
              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-[color:var(--brand-gold)] to-transparent rounded-full" />
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                Ehnovate Technologies is an AI and enterprise-software company
                building next-generation platforms for security, intelligence,
                and business operations. We convert raw data into fast,
                actionable decisions — for the people who cannot afford delay.
              </p>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-blue)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_-5px_var(--brand-blue)] hover:shadow-[0_8px_30px_-5px_var(--brand-blue)] transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    to="/technology"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-white/50 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground border border-black/10 hover:bg-white/80 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">
                      Our technology
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-premium shadow-2xl border border-black/5 group">
                  <div className="absolute inset-0 bg-[color:var(--brand-green)]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                  <img 
                    src="/company-operations.png" 
                    alt="Company Operations Center" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  {/* Glass overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-green)] animate-pulse" />
                      Global Operations
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => {
                    const accent = ["var(--brand-blue)", "var(--brand-green)", "var(--brand-gold)", "var(--brand-red)"][i % 4];
                    return (
                      <div
                        key={s.label}
                        className="group relative glass-premium p-6 sm:p-8 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300"
                      >
                        <div
                          className="absolute top-0 left-0 h-1 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                        />
                        
                        {/* Subtle background icon */}
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                          <s.icon className="w-32 h-32" style={{ color: accent }} />
                        </div>

                        <div className="relative z-10">
                          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-sm border border-black/5 mb-6 group-hover:scale-110 transition-transform duration-300" style={{ color: accent }}>
                            <s.icon className="w-6 h-6" />
                          </div>
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                            <AnimatedCounter value={s.value} suffix={s.suffix} />
                          </div>
                          <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {s.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative py-16 sm:py-24 bg-[color:var(--ink)] text-white overflow-hidden">
        {/* Deep layered backgrounds for enterprise feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand-blue)_10%,transparent),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 mesh-bg opacity-10 pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <SectionHeader
            eyebrow="Vision & Mission"
            title="What drives us forward"
            dark={true}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="group h-full relative p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[color:var(--brand-blue)]/20 text-cyan-400 mb-8 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Our Vision</h3>
                  <p className="mt-6 text-lg text-white/70 leading-relaxed font-light">
                    To become the most trusted technology partner for public safety and
                    enterprise operations — building intelligent systems that make
                    institutions safer, organisations smarter, and communities more
                    secure.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group h-full relative p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-green)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-transparent" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[color:var(--brand-green)]/20 text-emerald-400 mb-8 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
                  <ul className="mt-6 space-y-4 text-white/70 font-light">
                    {[
                      "Turn passive monitoring into proactive, AI-driven intelligence",
                      "Ship deployable, real-world systems — not research prototypes",
                      "Unify detection, communication and decision-making in one platform",
                      "Design for scale: from a single campus to nationwide deployments",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-emerald-400 mt-1.5 shrink-0">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES / PILLARS — Architecture Nodes Visualization */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[color:var(--brand-blue)]/20 bg-[color:var(--brand-blue)]/5 text-xs font-bold tracking-widest uppercase mb-6 text-[color:var(--brand-blue)]">
                What We Do
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                Engineering excellence <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-[color:var(--brand-green)]">at every scale.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[color:var(--brand-green)]/20 blur-sm -z-10" />
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-xs uppercase font-bold tracking-widest text-muted-foreground/80 leading-relaxed border-l-2 border-[color:var(--brand-gold)] pl-4">
              From AI surveillance to intelligence correlation to enterprise operations — one extensible core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const hoverBg = ["var(--brand-blue)", "var(--brand-green)", "var(--brand-gold)"][i % 3];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div
                    className="group relative glass-premium h-full rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-black/5 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                  >
                    {/* Hover Glow Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0"
                      style={{ backgroundColor: hoverBg }}
                    />
                    
                    {/* Image Header */}
                    {p.image && (
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden shrink-0">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-6">
                          <div 
                            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-lg border border-black/5 group-hover:rotate-3 transition-transform duration-500"
                            style={{ color: hoverBg }}
                          >
                            <p.icon className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Top gradient border */}
                    <div 
                      className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-20"
                      style={{ background: `linear-gradient(90deg, transparent, ${hoverBg}, transparent)` }}
                    />

                    <div className="relative z-10 p-8 sm:p-10 flex-1 flex flex-col">
                      {!p.image && (
                        <div 
                          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/5 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                          style={{ color: hoverBg }}
                        >
                          <p.icon className="w-8 h-8" />
                        </div>
                      )}
                      <div className="inline-block mb-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded bg-slate-900 group-hover:bg-opacity-90 transition-colors shadow-sm self-start">
                        {p.tag}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-black transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-slate-700 transition-colors mb-8">
                        {p.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Link
                          to="/technology"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all group-hover:gap-3"
                          style={{ color: hoverBg }}
                        >
                          <span className="border-b-2 border-transparent group-hover:border-current pb-0.5 transition-all">Explore Platform</span> <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative py-20 sm:py-28 bg-[color:var(--surface)] overflow-hidden">
        {/* Subtle mesh background for depth */}
        <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHeader
            eyebrow="Products"
            title="Platforms engineered end-to-end"
            description="Every product is built in-house — from the AI model to the field officer's app."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => {
              const accent = {
                blue: "var(--brand-blue)",
                green: "var(--brand-green)",
                gold: "var(--brand-gold)",
                red: "var(--brand-red)",
              }[p.color];
              return (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <div className="group relative h-full rounded-3xl glass-premium p-8 hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-black/[0.03] hover:border-black/5 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]">
                    {/* Deep Glow */}
                    <div
                      className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-0 group-hover:opacity-[0.15] blur-3xl transition-opacity duration-700 pointer-events-none"
                      style={{ background: accent }}
                    />
                    {/* Accent bar */}
                    <div
                      className="absolute top-0 left-0 h-1 w-16 group-hover:w-full transition-[width] duration-500"
                      style={{ background: accent }}
                    />
                    <div className="relative flex items-start justify-between">
                      <IconBadge icon={p.icon} color={p.color} size="lg" />
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ring-1"
                        style={{
                          color: accent,
                          background: `color-mix(in oklab, ${accent} 10%, transparent)`,
                          boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${accent} 25%, transparent)`,
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-xl font-bold">{p.name}</h3>
                    <div className="relative mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {p.tagline}
                    </div>
                    <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                    
                    {p.image && (
                      <div className="relative mt-6 w-full h-40 rounded-xl overflow-hidden shadow-lg border border-black/5 group-hover:shadow-2xl transition-all duration-500">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                      </div>
                    )}
                    <div className="relative mt-8 flex flex-wrap gap-2">
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f.title} className="inline-flex items-center gap-1.5 rounded-lg bg-black/[0.02] border border-black/5 px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase text-slate-600 shadow-sm hover:bg-black/[0.04] transition-colors">
                          <f.icon className="h-3 w-3" style={{ color: accent }} /> {f.title}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all group-hover:gap-4"
                      style={{ color: accent }}
                    >
                      <span className="border-b-2 border-transparent group-hover:border-current pb-0.5 transition-all">Explore Platform</span> <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Deep mesh background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[color:var(--brand-blue)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[color:var(--brand-green)]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the people who cannot afford delay"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05}>
                <div className="group relative h-full rounded-3xl border border-black/5 bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col">
                  {/* Image section */}
                  {ind.image && (
                    <div className="relative w-full h-40 sm:h-48 shrink-0 overflow-hidden bg-slate-100">
                      <img 
                        src={ind.image} 
                        alt={ind.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply opacity-90 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                      
                      {/* Floating icon */}
                      <div className="absolute bottom-4 left-6 z-10 shrink-0 p-3 rounded-xl bg-white shadow-md text-[color:var(--brand-blue)] group-hover:scale-110 transition-transform duration-500">
                        <ind.icon className="h-6 w-6" />
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10 bg-white/50 backdrop-blur-md">
                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {!ind.image && (
                      <div className="shrink-0 p-3 rounded-xl bg-slate-50 border border-black/5 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 text-[color:var(--brand-blue)] w-fit mb-4">
                        <ind.icon className="h-6 w-6" />
                      </div>
                    )}
                    
                    <div className="font-bold text-lg sm:text-xl text-foreground group-hover:text-[color:var(--brand-blue)] transition-colors relative z-10">{ind.name}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light relative z-10">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-16 sm:py-24 bg-[color:var(--ink)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--brand-gold)_5%,transparent),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 mesh-bg opacity-20 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/20 bg-[color:var(--brand-gold)]/5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[color:var(--brand-gold)] shadow-[0_0_15px_-3px_var(--brand-gold)]">
              Why Ehnovate
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Technology & competitive advantage
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--brand-gold)]/10 text-[color:var(--brand-gold)] border border-[color:var(--brand-gold)]/20 shadow-[0_0_15px_-3px_var(--brand-gold)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <a.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-6 text-xl font-bold text-white tracking-tight">{a.title}</div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed font-light">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS - Mission Control Style */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Tech abstract overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.02] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <SectionHeader
            eyebrow="Achievements"
            title="Milestones on the ground"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => {
              const accent = ["var(--brand-blue)", "var(--brand-gold)", "var(--brand-green)"][i % 3];
              return (
                <Reveal key={a.title} delay={i * 0.05}>
                  <div className="group relative h-full rounded-2xl glass-premium border border-black/5 p-8 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden">
                    {/* Glowing Accent Corner */}
                    <div 
                      className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none" 
                      style={{ background: accent }}
                    />
                    
                    <div 
                      className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-50 border border-black/5 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 mb-6"
                      style={{ color: accent }}
                    >
                      <a.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="text-2xl font-bold text-foreground mb-3">{a.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROADMAP - Interactive Timeline */}
      <section className="relative py-16 sm:py-24 bg-[color:var(--surface)] overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <SectionHeader
            eyebrow="Roadmap"
            title="What's next for Ehnovate"
          />
          <div className="mt-20 relative">
            {/* Continuous glowing connection line */}
            <div className="hidden md:block absolute top-[28px] left-8 right-8 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-blue)] via-[color:var(--brand-green)] to-[color:var(--brand-gold)] w-full opacity-50" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roadmap.map((r, i) => {
                const accent = [
                  "var(--brand-blue)",
                  "var(--brand-green)",
                  "var(--brand-gold)"
                ][i % 3];
                
                return (
                  <Reveal key={r.phase} delay={i * 0.1}>
                    <div className="relative group">
                      {/* Node point */}
                      <div className="hidden md:flex absolute -top-4 left-6 w-14 h-14 items-center justify-center bg-[color:var(--surface)] rounded-full z-10">
                        <div 
                          className="h-6 w-6 rounded-full ring-4 ring-white shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:scale-125 transition-transform duration-300"
                          style={{ background: accent, boxShadow: `0 0 20px ${accent}` }}
                        />
                      </div>

                      <div className="relative md:mt-8 rounded-3xl glass-premium border border-black/5 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500">
                        <div className="flex md:hidden items-center gap-3 mb-6">
                          <div
                            className="h-4 w-4 rounded-full ring-4 ring-white"
                            style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                          />
                          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {r.phase}
                          </span>
                        </div>
                        
                        <div className="hidden md:block mb-4">
                          <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-black/5">
                            {r.phase}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight mb-6">{r.title}</h3>
                        <ul className="space-y-4">
                          {r.items.map((it) => (
                            <li key={it} className="flex items-start gap-3 group/item">
                              <span 
                                className="mt-1 shrink-0 p-1 rounded-full bg-slate-100 group-hover/item:bg-white transition-colors border border-transparent group-hover/item:border-black/5"
                                style={{ color: accent }}
                              >
                                <ArrowRight className="h-3 w-3" />
                              </span>
                              <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-slate-800 transition-colors">
                                {it}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by the teams on the front line"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elev)] transition">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className="h-4 w-4 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]"
                      />
                    ))}
                  </div>
                  <Quote className="mt-5 h-6 w-6 text-primary/40" />
                  <p className="mt-3 text-foreground leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-10 sm:py-14 bg-[color:var(--surface)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <Reveal>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 mb-3"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Ambient surrounding glow */}
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[color:var(--brand-blue)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[color:var(--brand-green)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[color:var(--ink)] text-white p-12 sm:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white/10 hover:border-white/20 transition-all duration-700">
            {/* Deep animated mesh background inside card */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
            
            {/* Dynamic Orbs */}
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-[color:var(--brand-blue)] to-transparent opacity-40 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[color:var(--brand-green)] to-transparent opacity-30 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-gold)]/10 blur-[100px] pointer-events-none" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-gold)] backdrop-blur-md shadow-[0_0_20px_-5px_var(--brand-gold)]">
                  <Cpu className="h-4 w-4" /> Let's build together
                </div>
                <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Ready to see faster, <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                    decide sooner, act with confidence?
                  </span>
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-xl font-light leading-relaxed">
                  Talk to our team about a pilot, a deployment, or a strategic partnership.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group/btn relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[color:var(--ink)] px-8 py-4 text-base font-bold uppercase tracking-wider overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Contact sales <ArrowRight className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/products"
                  className="group/btn2 relative inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  View products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
