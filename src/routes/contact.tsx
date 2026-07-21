import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { IconBadge } from "@/components/site/IconBadge";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ehnovate Technologies" },
      { name: "description", content: "Talk to Ehnovate about pilots, deployments and partnerships across AI surveillance, intelligence and enterprise systems." },
      { property: "og:title", content: "Contact — Ehnovate Technologies" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build <span className="gradient-text">safer, smarter systems</span> together
          </>
        }
        description="Talk to our team about a pilot, a deployment or a strategic partnership."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Headquarters", value: "Pune, Maharashtra, India" },
                { icon: Mail, label: "Email", value: "hello@ehnovate.tech" },
                { icon: Phone, label: "Phone", value: "+91 000 000 0000" },
              ].map((c, i) => (
                <div key={c.label} className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
                  <IconBadge icon={c.icon} color={["blue", "green", "gold"][i] as "blue" | "green" | "gold"} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="font-semibold">Enterprise & Government</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  For classified deployments, air-gapped environments and multi-agency
                  integrations, our team will schedule a dedicated technical briefing.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              {sent ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">Thanks — we'll be in touch</h3>
                  <p className="mt-2 text-muted-foreground max-w-md">
                    Your message reached our team. Expect a response from an Ehnovate
                    engineer within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell us about your organisation and what you're trying to solve.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Organisation" name="org" />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Phone (optional)" name="phone" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      How can we help?
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder="Tell us about your deployment, timeline and goals."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition-all"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
      />
    </div>
  );
}
