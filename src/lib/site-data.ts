import {
  Eye,
  Link as LinkIcon,
  Briefcase,
  Cpu,
  Camera,
  Layers,
  Bell,
  MessageSquare,
  UserCheck,
  Lock,
  TrendingUp,
  Users,
  Package,
  BarChart3,
  FileText,
  ShieldCheck,
  Zap,
  Smartphone,
  Database,
  Globe,
  Settings,
  Award,
  Activity,
  HeartPulse,
  Building2,
  ShieldAlert,
  GraduationCap,
  Factory,
  Hospital,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  color: "blue" | "green" | "gold";
  image?: string;
};

export const pillars: Pillar[] = [
  {
    icon: Eye,
    title: "AI Surveillance & Security",
    description:
      "OWL-AI: real-time computer vision, threat detection and instant alerting for people, places and events.",
    tag: "Flagship · OWL-AI",
    color: "blue",
    image: "/pillar-1.png",
  },
  {
    icon: LinkIcon,
    title: "Intelligence & Data Correlation",
    description:
      "Secure-Link: unifying records, uncovering hidden relationships and visualising intelligence networks.",
    tag: "Flagship · Secure-Link",
    color: "green",
    image: "/pillar-2.png",
  },
  {
    icon: Briefcase,
    title: "Enterprise Operations",
    description:
      "Flow-State: optimising workflows, resource allocation and compliance through predictive analytics.",
    tag: "Enterprise · Flow-State",
    color: "gold",
    image: "/pillar-3.png",
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green" | "gold" | "red";
  image?: string;
  features: { icon: LucideIcon; title: string; description: string }[];
};

export const products: Product[] = [
  {
    slug: "owl-ai",
    name: "OWL-AI Surveillance",
    tagline: "AI-Powered Real-Time Monitoring & Security Platform",
    description:
      "OWL-AI detects, classifies and responds to security threats instantly — transforming passive monitoring into proactive intelligence.",
    icon: Eye,
    color: "blue",
    image: "/product-1.png",
    features: [
      { icon: Camera, title: "Real-Time AI Detection", description: "Weapon recognition, suspicious behaviour detection and missing person identification." },
      { icon: Layers, title: "Intelligent Classification", description: "Automatic threat severity labelling with rule-based escalation logic." },
      { icon: Bell, title: "Instant Alert System", description: "Push notifications to responders and on-device alarm triggers." },
      { icon: MessageSquare, title: "Communication Hub", description: "Real-time one-to-one chat and group coordination channels." },
      { icon: Smartphone, title: "Smart Device Integration", description: "Capture from mobile devices and Meta AI Glass for hands-free monitoring." },
      { icon: Cpu, title: "AI-Based Threat Detection", description: "Deep-learning severity scoring turns footage into a prioritised action queue." },
    ],
  },
  {
    slug: "secure-link",
    name: "Secure-Link Intelligence",
    tagline: "Comprehensive Intelligence & Data Correlation Solution",
    description:
      "Secure-Link unifies fragmented records into one intelligence network — helping analysts uncover hidden relationships and act on a single, trusted source of truth.",
    icon: LinkIcon,
    color: "green",
    image: "/product-2.png",
    features: [
      { icon: LinkIcon, title: "Intelligent Linking & Correlation", description: "Automated relationship discovery across exact, fuzzy and phonetic engines." },
      { icon: UserCheck, title: "Face Recognition & Biometric Search", description: "Offline face-recognition pipeline with ranked match retrieval." },
      { icon: Activity, title: "Network Visualisation", description: "Interactive relationship graph with multi-level connection exploration." },
      { icon: Lock, title: "Advanced Security Architecture", description: "Hardware-bound authentication, role-based access and immutable audit trails." },
      { icon: Database, title: "Four Record Types", description: "Index, Agents, Organisations and Dossiers unified in one intelligence core." },
      { icon: ShieldCheck, title: "Air-Gapped Ready", description: "Fully offline capability for classified, secure-site environments." },
    ],
  },
  {
    slug: "erp",
    name: "Ehnovate ERP Suite",
    tagline: "Unified Enterprise Operations Platform",
    description:
      "Bringing the same real-time, AI-assisted philosophy behind OWL-AI and Secure-Link to everyday business management.",
    icon: Briefcase,
    color: "gold",
    image: "/product-3.png",
    features: [
      { icon: TrendingUp, title: "Finance & Accounting", description: "Budgets, invoicing, ledgers and real-time financial reporting." },
      { icon: Users, title: "HR & Payroll", description: "Employee records, attendance, payroll and performance tracking." },
      { icon: Package, title: "Inventory & Procurement", description: "Stock visibility, vendor management and automated reordering." },
      { icon: BarChart3, title: "CRM & Sales", description: "Lead pipelines, customer data and sales performance analytics." },
      { icon: FileText, title: "Analytics & Dashboards", description: "Cross-department KPIs with drill-down reporting." },
      { icon: ShieldCheck, title: "Role-Based Access", description: "Granular permissions and audit trails, built on Ehnovate's security core." },
    ],
  },
  {
    slug: "pcms",
    name: "PCMS",
    tagline: "Preventive Care Management System",
    description:
      "End-to-end automated preventive care — Bluetooth clinical devices, face-verification authentication and offline-capable workflows.",
    icon: HeartPulse,
    color: "red",
    image: "/product-4.png",
    features: [
      { icon: HeartPulse, title: "Bluetooth Clinical Devices", description: "Height, weight and vitals capture with long battery life." },
      { icon: UserCheck, title: "Face-Verification Auth", description: "Secure identity binding for every measurement and record." },
      { icon: Zap, title: "End-to-End Automation", description: "Measurement to record to report — no manual data entry." },
      { icon: Database, title: "Offline Capability", description: "Field-ready operation in low-connectivity environments." },
      { icon: Activity, title: "AI Growth Monitoring", description: "PCMS growth-monitoring app with automated scoring." },
      { icon: FileText, title: "Instant Reports", description: "Reports and prescriptions delivered in real time." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare Solutions",
    tagline: "Medical Equipment & Digital Health Platform",
    description:
      "Refurbished imaging systems, portable diagnostics and AI-driven health platforms — engineered for accessible, affordable care.",
    icon: Hospital,
    color: "blue",
    image: "/healthcare-solutions.jpg",
    features: [
      { icon: Hospital, title: "Refurbished Imaging", description: "MRI, CT and Cathlab systems at 30–50% lower cost." },
      { icon: ShieldCheck, title: "OEM-Equivalent Warranty", description: "Rigorously tested with full remote diagnostics support." },
      { icon: Activity, title: "AI Cervical Health Scoring", description: "30-second AI screening with Smart Scope handheld device." },
      { icon: MessageSquare, title: "Live Doctor Consultation", description: "Video-consultation with instant reports & prescriptions." },
      { icon: Package, title: "Health ATM", description: "120+ point-of-care tests in a single deployable kiosk." },
      { icon: ShieldAlert, title: "Jeevan Rakshak", description: "Disaster and rescue medical gear for field response teams." },
    ],
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
  image?: string;
};

export const industries: Industry[] = [
  { icon: ShieldAlert, name: "Public Safety & Policing", description: "Real-time threat detection, incident coordination and intelligence correlation for law enforcement.", image: "/industry-1.png" },
  { icon: Hospital, name: "Healthcare & Hospitals", description: "Preventive care systems, imaging solutions and remote diagnostics for care providers.", image: "/industry-2.png" },
  { icon: GraduationCap, name: "Campuses & Education", description: "Secure surveillance, access control and communication for schools and universities.", image: "/industry-3.png" },
  { icon: Factory, name: "Industrial & Manufacturing", description: "Site safety, asset protection and enterprise operations for industrial facilities.", image: "/industry-4.png" },
  { icon: Landmark, name: "Government & Defence", description: "Air-gapped intelligence platforms with hardware-bound authentication.", image: "/company-operations.png" },
  { icon: Building2, name: "Enterprise & Corporate", description: "ERP, CRM and integrated workplace security across distributed teams.", image: "/hero-dashboard.png" },
];

export const stats = [
  { icon: Cpu, label: "In-house AI Platforms", value: 2, suffix: "" },
  { icon: Globe, label: "Languages Supported", value: 3, suffix: "" },
  { icon: Layers, label: "Industry Use Cases", value: 6, suffix: "+" },
  { icon: Zap, label: "Threat-to-Alert Response", value: 6, suffix: "s" },
];

export const advantages = [
  { icon: Zap, title: "AI + Communication, Unified", description: "Detection and response coordination live in one platform — not stitched-together tools." },
  { icon: Smartphone, title: "Smart Wearable Integration", description: "Capture directly from mobile devices and smart glasses (Meta AI Glass) for hands-free monitoring." },
  { icon: Cpu, title: "Real-Time Threat Scoring", description: "Deep-learning severity scoring turns raw footage into a prioritised action queue." },
  { icon: Database, title: "Scalable Cloud Architecture", description: "Built to scale from a single site to nationwide, multi-agency deployments." },
  { icon: Globe, title: "Multilingual by Design", description: "English, Hindi and Marathi support with per-user language preferences." },
  { icon: Settings, title: "Modular & Future-Ready", description: "Every module — surveillance, intelligence, ERP — plugs into one extensible core." },
];

export const achievements = [
  { icon: Award, title: "Kumbh Mela 2026 Security Deployment", description: "OWL-AI deployed for large-scale public-safety monitoring at Haridwar, Uttarakhand, in coordination with State Police & Mela Authority." },
  { icon: Cpu, title: "Two Proprietary AI Platforms", description: "OWL-AI Surveillance and the Secure-Link Intelligence Platform engineered end-to-end by Ehnovate's product team." },
  { icon: Globe, title: "Multilingual, Field-Ready Deployment", description: "English, Hindi and Marathi language support for real-world officer and analyst adoption." },
  { icon: Smartphone, title: "Smart Wearable Integration", description: "Among the first in-region platforms to integrate smart-glass capture (Meta AI Glass) into a live security workflow." },
  { icon: Lock, title: "Offline-Capable Secure Intelligence", description: "Face recognition and correlation engines built to run fully offline for classified, air-gapped environments." },
  { icon: Users, title: "Growing Ecosystem Partnerships", description: "Collaborating with strategic technology partners to accelerate AI product development and enterprise innovation." },
];

export const roadmap = [
  {
    phase: "NOW",
    title: "Deployed Foundations",
    items: [
      "OWL-AI live: image-based detection & alerting",
      "Secure-Link live: correlation & face search",
      "Field deployment at scale (Kumbh Mela 2026)",
    ],
  },
  {
    phase: "NEXT",
    title: "Live Video Intelligence",
    items: [
      "Continuous live video-stream monitoring",
      "Motion & anomaly detection",
      "Automated incident logging",
    ],
  },
  {
    phase: "AHEAD",
    title: "Platform Expansion",
    items: [
      "Ehnovate ERP Suite full launch",
      "Predictive risk & analytics models",
      "Smart-city & multi-agency integration",
    ],
  },
];
