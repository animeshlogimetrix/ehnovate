import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IconBadge } from "@/components/site/IconBadge";
import { achievements } from "@/lib/site-data";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Ehnovate Technologies" },
      { name: "description", content: "Kumbh Mela 2026 deployment, two proprietary AI platforms, offline-capable intelligence — milestones from the ground." },
      { property: "og:title", content: "Achievements — Ehnovate Technologies" },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Achievements"
        title={
          <>
            Milestones <span className="gradient-text">on the ground</span>
          </>
        }
        description="Real deployments, real platforms, real partnerships — this is what we've shipped."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elev)] hover:-translate-y-0.5 transition-all">
                <IconBadge icon={a.icon} color={["blue", "gold", "green"][i % 3] as "blue" | "gold" | "green"} size="lg" />
                <div className="mt-6 text-lg font-bold">{a.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
