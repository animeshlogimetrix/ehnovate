import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IconBadge } from "@/components/site/IconBadge";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Ehnovate Technologies" },
      { name: "description", content: "Ehnovate serves public safety, healthcare, education, industrial, government and enterprise — anywhere fast, trustworthy decisions matter." },
      { property: "og:title", content: "Industries — Ehnovate Technologies" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Built for the people who <span className="gradient-text">cannot afford delay</span>
          </>
        }
        description="From police command rooms to hospital wards to factory floors — Ehnovate platforms are engineered for the real world."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elev)] hover:-translate-y-0.5 transition-all">
                <IconBadge icon={ind.icon} color={["blue", "green", "gold"][i % 3] as "blue" | "green" | "gold"} size="lg" />
                <div className="mt-6 text-lg font-bold">{ind.name}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
