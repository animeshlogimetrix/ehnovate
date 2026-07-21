import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { roadmap } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — Ehnovate Technologies" },
      { name: "description", content: "What's next for Ehnovate: deployed foundations today, live video intelligence next, platform expansion ahead." },
      { property: "og:title", content: "Roadmap — Ehnovate Technologies" },
      { property: "og:url", content: "/roadmap" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

const colors = ["var(--brand-blue)", "var(--brand-green)", "var(--brand-gold)"];

function RoadmapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Roadmap"
        title={
          <>
            What's <span className="gradient-text">next</span> for Ehnovate
          </>
        }
        description="From deployed foundations today to nationwide platform expansion — the path forward."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[color:var(--brand-blue)] via-[color:var(--brand-green)] to-[color:var(--brand-gold)]" />
            <div className="space-y-10">
              {roadmap.map((r, i) => (
                <Reveal key={r.phase} delay={i * 0.1}>
                  <div className={`relative flex flex-col sm:flex-row items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    <div className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full ring-4 ring-background z-10"
                      style={{ background: colors[i] }}
                    />
                    <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {r.phase}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold">{r.title}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {r.items.map((it) => (
                            <li key={it} className="flex gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: colors[i] }} />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
