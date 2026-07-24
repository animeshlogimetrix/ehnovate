import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
            dark 
              ? "border-white/20 bg-white/10 text-white" 
              : "border-primary/20 bg-primary/5 text-primary"
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${dark ? "bg-white" : "bg-primary"}`} />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
