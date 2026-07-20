import {
  Eye,
  Network,
  Building2,
  HeartPulse,
  Stethoscope,
  Shield,
  Hospital,
  GraduationCap,
  Factory,
  Landmark,
  Layers,
  Glasses,
  Gauge,
  CloudCog,
  Languages,
  Boxes,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Eye,
  Network,
  Building2,
  HeartPulse,
  Stethoscope,
  Shield,
  Hospital,
  GraduationCap,
  Factory,
  Landmark,
  Layers,
  Glasses,
  Gauge,
  CloudCog,
  Languages,
  Boxes,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Eye
  return <Cmp className={className} />
}
