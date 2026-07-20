import logoAsset from "@/assets/ehnovate-logo.png.asset.json";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Ehnovate Technologies"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
