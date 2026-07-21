import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { stats, advantages } from "@/lib/site-data";
import { Sparkles, ShieldCheck, Target, Compass, Network, Hexagon } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ehnovate Technologies" },
      { name: "description", content: "Ehnovate Technologies builds AI, security and enterprise systems. Learn about our vision, mission and company story." },
      { property: "og:title", content: "About — Ehnovate Technologies" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Building the technology backbone for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066A6] to-[#0B8F4D]">safer, smarter institutions</span>
          </>
        }
        description="Ehnovate Technologies is an AI and enterprise-software company building next-generation platforms for security, intelligence, and business operations."
      />

      {/* WHO WE ARE */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,102,166,0.03),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0066A6]/20 bg-[#0066A6]/5 px-4 py-1.5 text-sm font-semibold text-[#0066A6]">
                <Sparkles className="h-4 w-4" /> Who We Are
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066A6] to-[#0B8F4D]">intelligence</span> into every operation.
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0066A6] to-[#E6B21A] rounded-full" />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our engineering teams design end-to-end systems — from AI-powered
                  surveillance and investigative intelligence tools to enterprise
                  resource planning — that convert raw data into fast, actionable
                  decisions.
                </p>
                <p>
                  We build for the people who cannot afford delay — police and
                  public-safety teams, hospitals, campuses, industrial sites, and
                  enterprises — pairing deep-learning intelligence with real-time
                  communication in one unified ecosystem.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 shadow-2xl bg-[#0F172A] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066A6]/20 to-[#0F172A]/40 mix-blend-overlay z-10" />
                <img 
                  src="/owl-ai-dashboard.png" 
                  alt="AI Dashboard Illustration" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Floating Stat Cards */}
                {stats.slice(0, 2).map((s, idx) => (
                  <div 
                    key={s.label}
                    className={`absolute z-20 p-5 rounded-2xl glass border border-white/20 shadow-2xl backdrop-blur-md bg-white/10 text-white hover:-translate-y-1 transition-all duration-300 ${
                      idx === 0 ? "top-8 -left-4 sm:-left-8" : "bottom-8 -right-4 sm:-right-8"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0066A6] to-[#0B8F4D] text-white shadow-inner">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight">
                          <AnimatedCounter value={s.value} suffix={s.suffix} />
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/80">{s.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative py-24 sm:py-32 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,166,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#0B8F4D] mb-6">
                <Network className="h-4 w-4" /> Vision & Mission
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">What drives us forward</h2>
              <p className="text-lg text-white/60">We are committed to building the operational fabric for modern institutions.</p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-stretch">
            <Reveal delay={0.1}>
              <div className="group h-full rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-[#0066A6]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0066A6] to-blue-500/50 text-white shadow-lg border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    To become the most trusted technology partner for public safety and
                    enterprise operations — building intelligent systems that make
                    institutions safer, organisations smarter, and communities more
                    secure.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vertical Divider */}
            <div className="hidden md:flex flex-col items-center justify-center py-10">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            <Reveal delay={0.2}>
              <div className="group h-full rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-[#0B8F4D]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B8F4D] to-green-500/50 text-white shadow-lg border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Compass className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <ul className="space-y-4 text-white/70">
                    {[
                      "Turn passive monitoring into proactive, AI-driven intelligence",
                      "Ship deployable, real-world systems — not research prototypes",
                      "Unify detection, communication and decision-making in one platform",
                      "Design for scale: from a single campus to nationwide deployments",
                    ].map((m, i) => (
                      <li key={m} className="flex gap-4 items-start" style={{ animationDelay: `${i * 100}ms` }}>
                        <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0 text-[#0B8F4D]" />
                        <span className="text-base leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE EHNOVATE */}
      <section className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,166,0.05)_0%,transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E6B21A]/30 bg-[#E6B21A]/10 px-4 py-1.5 text-sm font-semibold text-[#b88d15] mb-6">
                <Hexagon className="h-4 w-4" /> Our Advantage
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">Why teams choose Ehnovate</h2>
              <p className="text-lg text-slate-600">Built to handle the complexity of the real world.</p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => {
              const gradients = [
                "from-[#0066A6] to-blue-400",
                "from-[#0B8F4D] to-green-400",
                "from-[#E6B21A] to-yellow-400",
              ];
              const colors = ["#0066A6", "#0B8F4D", "#E6B21A"];
              return (
                <Reveal key={a.title} delay={i * 0.1}>
                  <div className="group relative h-full rounded-[24px] border border-slate-200 bg-white p-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                    <div 
                      className="absolute top-0 inset-x-0 h-1 rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                      style={{ background: `linear-gradient(to right, ${colors[i % 3]}, transparent)` }}
                    />
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i % 3]} text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <a.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{a.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
