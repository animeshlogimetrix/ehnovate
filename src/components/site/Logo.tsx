export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="/ehnovate-logo.png"
      alt="Ehnovate Technologies"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
