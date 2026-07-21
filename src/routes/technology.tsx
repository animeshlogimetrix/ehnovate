import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { IconBadge } from "@/components/site/IconBadge";
import { advantages } from "@/lib/site-data";
import { Camera, Database, Cpu, Layers, Bell, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Ehnovate Technologies" },
      { name: "description", content: "How Ehnovate's AI stack works — from image capture to real-time threat classification to coordinated response — in one unified platform." },
      { property: "og:title", content: "Technology — Ehnovate Technologies" },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

const flow = [
  { icon: Camera, title: "Image captured", description: "Live feed from cameras, mobile devices and Meta AI Glass." },
  { icon: Database, title: "Uploaded to secure cloud", description: "Encrypted transport with hardware-bound access." },
  { icon: Cpu, title: "AI model analyses in real time", description: "Deep-learning models process frames on our inference stack." },
  { icon: Layers, title: "Threat classified", description: "Severity scoring routes events into a prioritised queue." },
  { icon: Bell, title: "Alert sent instantly", description: "Push, on-device alarm and command dashboard signal." },
  { icon: MessageSquare, title: "Teams coordinate via chat", description: "Real-time officer chat and group channels." },
];

function TechnologyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            From passive footage to <span className="gradient-text">proactive response</span>
          </>
        }
        description="A unified stack that turns raw video and records into decisions — in seconds, not minutes."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="OWL-AI Process Flow" title="How OWL-AI works" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {flow.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="absolute top-4 right-5 text-5xl font-black text-primary/10 leading-none">
                    0{i + 1}
                  </div>
                  <IconBadge icon={s.icon} color={["blue", "green", "gold"][i % 3] as "blue" | "green" | "gold"} />
                  <div className="mt-4 font-semibold">{s.title}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
              <div className="text-lg font-semibold gradient-text">
                Response time reduced from minutes to seconds.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Stack" title="Technology & competitive advantage" />
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
