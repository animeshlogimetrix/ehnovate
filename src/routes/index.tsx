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
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-[90vh] flex flex-col justify-center">
        <HeroBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="relative z-10">
              <Reveal>
                <span className="eyebrow-bar">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Innovation in Motion · 2026
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
                  Intelligent systems for a{" "}
                  <span className="text-[color:var(--brand-blue)]">safer,</span>{" "}
                  <span className="text-[color:var(--brand-green)]">smarter</span>{" "}
                  world.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Ehnovate Technologies delivers high-performance AI, security &
                  enterprise platforms that help institutions see faster, decide
                  sooner, and act with confidence.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Link
                    to="/products"
                    className="hard-shadow-gold hard-shadow-gold-hover inline-flex items-center gap-2 bg-[color:var(--brand-blue)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white"
                  >
                    Explore Products <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-[color:var(--brand-blue)] bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[color:var(--brand-blue)] hover:bg-slate-50 transition"
                  >
                    <Play className="h-4 w-4" /> Request a Demo
                  </Link>
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
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow-bar mb-6">About Us</span>
              <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
                Building the technology backbone for{" "}
                <span className="text-[color:var(--brand-green)]">safer, smarter institutions.</span>
              </h2>
              <div className="mt-6 h-2 w-24 bg-[color:var(--brand-gold)]" />
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Ehnovate Technologies is an AI and enterprise-software company
                building next-generation platforms for security, intelligence,
                and business operations. We convert raw data into fast,
                actionable decisions — for the people who cannot afford delay.
              </p>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[color:var(--brand-blue)]/90 transition"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/technology"
                    className="inline-flex items-center gap-2 border-2 border-foreground/20 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:border-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue)] transition"
                  >
                    Our technology
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-xl">
                {stats.map((s, i) => {
                  const accent = ["var(--brand-blue)", "var(--brand-green)", "var(--brand-gold)", "var(--brand-red)"][i % 4];
                  return (
                    <div
                      key={s.label}
                      className="group relative bg-white p-8 transition-colors"
                    >
                      <div
                        className="absolute top-0 left-0 h-1 w-full"
                        style={{ background: accent }}
                      />
                      <IconBadge icon={s.icon} color="blue" />
                      <div className="mt-5 text-4xl font-bold text-foreground">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative py-10 sm:py-14 bg-[color:var(--surface)]">
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Vision & Mission"
            title="What drives us forward"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full relative bg-white p-8 border border-slate-200 shadow-xl border-t-4 border-t-[color:var(--brand-blue)]">
                <IconBadge icon={Sparkles} color="blue" size="lg" />
                <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To become the most trusted technology partner for public safety and
                  enterprise operations — building intelligent systems that make
                  institutions safer, organisations smarter, and communities more
                  secure.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full relative bg-white p-8 border border-slate-200 shadow-xl border-t-4 border-t-[color:var(--brand-green)]">
                <IconBadge icon={ShieldCheck} color="green" size="lg" />
                <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {[
                    "Turn passive monitoring into proactive, AI-driven intelligence",
                    "Ship deployable, real-world systems — not research prototypes",
                    "Unify detection, communication and decision-making in one platform",
                    "Design for scale: from a single campus to nationwide deployments",
                  ].map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[color:var(--brand-green)]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES / PILLARS — Edge-to-edge kinetic grid */}
      <section className="relative py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow-bar mb-6">What We Do</span>
              <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                Engineering excellence <br />
                <span className="text-[color:var(--brand-green)]">at every scale.</span>
              </h2>
              <div className="mt-6 h-2 w-24 bg-[color:var(--brand-gold)]" />
            </div>
            <p className="max-w-sm text-xs uppercase font-bold tracking-widest text-muted-foreground">
              From AI surveillance to intelligence correlation to enterprise operations — one extensible core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
            {pillars.map((p, i) => {
              const hoverBg = ["var(--brand-blue)", "var(--brand-green)", "var(--brand-gold)"][i % 3];
              const isGold = i % 3 === 2;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div
                    className="group relative bg-white p-10 h-full transition-colors duration-300"
                    style={{
                      // hover color via inline style + group-hover through CSS var
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "#fff";
                    }}
                  >
                    <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                      <IconBadge icon={p.icon} color={p.color} size="lg" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-slate-100 group-hover:bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">
                      {p.tag}
                    </div>
                    <h3 className={`mt-4 text-2xl font-bold transition-colors ${isGold ? "group-hover:text-slate-900" : "group-hover:text-white"}`}>
                      {p.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed transition-colors ${isGold ? "text-muted-foreground group-hover:text-slate-900/80" : "text-muted-foreground group-hover:text-white/90"}`}>
                      {p.description}
                    </p>
                    <div className={`mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${isGold ? "text-slate-900" : "text-white"}`}>
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="relative py-20 sm:py-28 bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Products"
            title="Platforms engineered end-to-end"
            description="Every product is built in-house — from the AI model to the field officer's app."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => {
              const accent = {
                blue: "var(--brand-blue)",
                green: "var(--brand-green)",
                gold: "var(--brand-gold)",
                red: "var(--brand-red)",
              }[p.color];
              return (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    {/* Glow */}
                    <div
                      className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
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
                    <div className="relative mt-6 flex flex-wrap gap-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f.title} className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">
                          <f.icon className="h-3 w-3" /> {f.title}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                      style={{ color: accent }}
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the people who cannot afford delay"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[var(--shadow-elev)] transition-all">
                  <IconBadge icon={ind.icon} color={i % 2 === 0 ? "blue" : "green"} />
                  <div className="mt-4 font-semibold">{ind.name}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-10 sm:py-14 bg-[color:var(--ink)] text-white overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-gold)]">
              Why Ehnovate
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Technology & competitive advantage
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:bg-white/[0.06] transition">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-gold)]/15 text-[color:var(--brand-gold)] ring-1 ring-[color:var(--brand-gold)]/30">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-semibold text-white">{a.title}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Achievements"
            title="Milestones on the ground"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elev)] transition">
                  <IconBadge icon={a.icon} color={["blue", "gold", "green"][i % 3] as "blue" | "gold" | "green"} />
                  <div className="mt-4 font-semibold">{a.title}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative py-10 sm:py-14 bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Roadmap"
            title="What's next for Ehnovate"
          />
          <div className="mt-14 relative">
            <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[color:var(--brand-blue)] via-[color:var(--brand-green)] to-[color:var(--brand-gold)] rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmap.map((r, i) => (
                <Reveal key={r.phase} delay={i * 0.1}>
                  <div className="relative rounded-3xl border border-border bg-card p-7">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-4 w-4 rounded-full ring-4 ring-background"
                        style={{
                          background:
                            i === 0
                              ? "var(--brand-blue)"
                              : i === 1
                              ? "var(--brand-green)"
                              : "var(--brand-gold)",
                        }}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {r.phase}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{r.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {r.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <ChevronDown className="h-4 w-4 mt-0.5 shrink-0 -rotate-90 text-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
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
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[color:var(--ink)] text-white p-10 sm:p-16 shadow-[var(--shadow-elev)]">
            <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[color:var(--brand-blue)]/40 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[color:var(--brand-green)]/30 blur-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-gold)]">
                  <Cpu className="h-3.5 w-3.5" /> Let's build together
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                  Ready to see faster, decide sooner, act with confidence?
                </h2>
                <p className="mt-3 text-white/70 max-w-xl">
                  Talk to our team about a pilot, a deployment, or a strategic partnership.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-[color:var(--ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
                >
                  Contact sales <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
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
