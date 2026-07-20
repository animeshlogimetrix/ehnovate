import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IconBadge } from "@/components/site/IconBadge";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Ehnovate Technologies" },
      { name: "description", content: "OWL-AI Surveillance, Secure-Link Intelligence, Ehnovate ERP, PCMS and Healthcare Solutions — platforms engineered end-to-end." },
      { property: "og:title", content: "Products — Ehnovate Technologies" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Platforms <span className="gradient-text">engineered end-to-end</span>
          </>
        }
        description="Every Ehnovate product is built in-house — from the AI model to the field officer's app — for real deployments, not lab demos."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
          {products.map((p, idx) => (
            <Reveal key={p.slug}>
              <div className="rounded-3xl border border-border bg-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-0">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start gap-4">
                      <IconBadge icon={p.icon} color={p.color} size="lg" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Product 0{idx + 1}
                        </div>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold">{p.name}</h2>
                        <div className="mt-1 text-sm font-medium text-primary">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="bg-[color:var(--surface)] p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {p.features.map((f) => (
                        <div key={f.title} className="rounded-xl border border-border bg-card p-4">
                          <IconBadge icon={f.icon} color={p.color} size="sm" />
                          <div className="mt-3 font-semibold text-sm">{f.title}</div>
                          <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {f.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
