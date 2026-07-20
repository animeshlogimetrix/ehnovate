import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { IconBadge } from "@/components/site/IconBadge";
import { stats, advantages } from "@/lib/site-data";
import { Sparkles, ShieldCheck, Target, Compass } from "lucide-react";

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
            <span className="gradient-text">safer, smarter institutions</span>
          </>
        }
        description="Ehnovate Technologies is an AI and enterprise-software company building next-generation platforms for security, intelligence, and business operations."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8">
              <IconBadge icon={Sparkles} color="blue" size="lg" />
              <h2 className="mt-6 text-2xl font-bold">Who we are</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our engineering teams design end-to-end systems — from AI-powered
                surveillance and investigative intelligence tools to enterprise
                resource planning — that convert raw data into fast, actionable
                decisions.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We build for the people who cannot afford delay — police and
                public-safety teams, hospitals, campuses, industrial sites, and
                enterprises — pairing deep-learning intelligence with real-time
                communication in one unified ecosystem.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <IconBadge icon={s.icon} color="green" />
                  <div className="mt-4 text-4xl font-bold gradient-text">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Vision & Mission" title="What drives us forward" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 h-full">
                <IconBadge icon={Target} color="blue" size="lg" />
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
              <div className="rounded-3xl border border-border bg-card p-8 h-full">
                <IconBadge icon={Compass} color="green" size="lg" />
                <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {[
                    "Turn passive monitoring into proactive, AI-driven intelligence",
                    "Ship deployable, real-world systems — not research prototypes",
                    "Unify detection, communication and decision-making in one platform",
                    "Design for scale: from a single campus to nationwide deployments",
                  ].map((m) => (
                    <li key={m} className="flex gap-2">
                      <ShieldCheck className="h-4 w-4 mt-1 shrink-0 text-[color:var(--brand-green)]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Our Advantage"
            title="Why teams choose Ehnovate"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elev)] transition">
                  <IconBadge icon={a.icon} color={["blue", "green", "gold"][i % 3] as "blue" | "green" | "gold"} />
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
    </SiteLayout>
  );
}
