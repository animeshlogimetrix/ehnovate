import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden hero-bg">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
