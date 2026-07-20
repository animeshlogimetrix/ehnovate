import type { LucideIcon } from "lucide-react";

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  blue: { bg: "bg-[color:var(--brand-blue)]/10", text: "text-[color:var(--brand-blue)]", ring: "ring-[color:var(--brand-blue)]/20" },
  green: { bg: "bg-[color:var(--brand-green)]/10", text: "text-[color:var(--brand-green)]", ring: "ring-[color:var(--brand-green)]/20" },
  gold: { bg: "bg-[color:var(--brand-gold)]/15", text: "text-[color:var(--brand-gold)]", ring: "ring-[color:var(--brand-gold)]/30" },
  red: { bg: "bg-[color:var(--brand-red)]/10", text: "text-[color:var(--brand-red)]", ring: "ring-[color:var(--brand-red)]/20" },
};

export function IconBadge({
  icon: Icon,
  color = "blue",
  size = "md",
}: {
  icon: LucideIcon;
  color?: "blue" | "green" | "gold" | "red";
  size?: "sm" | "md" | "lg";
}) {
  const c = colorMap[color];
  const s = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  const iSize = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-6 w-6";
  return (
    <div className={`inline-flex items-center justify-center rounded-2xl ${s} ${c.bg} ${c.text} ring-1 ${c.ring}`}>
      <Icon className={iSize} strokeWidth={2} />
    </div>
  );
}
