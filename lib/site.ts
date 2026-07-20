export const siteConfig = {
  name: 'Ehnovate Technologies',
  shortName: 'Ehnovate',
  tagline: 'AI Surveillance · Intelligence Platforms · Enterprise Software',
  description:
    'Engineering intelligent AI, security & enterprise systems that help institutions see faster, decide sooner, and act with confidence.',
  email: 'contact@ehnovate.tech',
  phone: '+91 00000 00000',
  location: 'India',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Technology', href: '/technology' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 2, suffix: '', label: 'In-house AI Platforms' },
  { value: 3, suffix: '', label: 'Languages Supported' },
  { value: 6, suffix: '+', label: 'Industry Use Cases' },
  { value: 3, suffix: 's', label: 'Threat-to-Alert Response' },
]

export const services = [
  {
    icon: 'Eye',
    title: 'AI Surveillance & Security',
    flagship: 'Flagship: OWL-AI',
    description:
      'Real-time computer vision, threat detection and instant alerting for people, places and events.',
  },
  {
    icon: 'Network',
    title: 'Intelligence & Data Correlation',
    flagship: 'Flagship: Secure-Link',
    description:
      'Unifying records, uncovering hidden relationships and visualising intelligence networks.',
  },
  {
    icon: 'Building2',
    title: 'Enterprise Business Systems',
    flagship: 'Ehnovate ERP Suite',
    description:
      'Finance, HR, inventory and CRM unified on one secure operations platform.',
  },
]

export const products = [
  {
    slug: 'owl-ai',
    name: 'OWL-AI Surveillance',
    badge: 'Flagship Product 01',
    status: 'Live',
    icon: 'Eye',
    image: '/images/owl-ai-surveillance.png',
    tagline: 'AI-Powered Real-Time Monitoring & Security Platform',
    description:
      'OWL-AI detects, classifies and responds to security threats instantly — transforming passive monitoring into proactive intelligence.',
    features: [
      'Computer Vision',
      'AI-Based Threat Detection',
      'Real-Time Communication',
      'Smart Device Integration',
      'Live command dashboard & field officer app',
    ],
    capabilities: [
      {
        title: 'Real-Time AI Detection',
        items: ['Weapon recognition', 'Suspicious behaviour detection', 'Missing person identification'],
      },
      {
        title: 'Intelligent Classification',
        items: ['Automatic threat severity labelling', 'Rule-based escalation logic'],
      },
      {
        title: 'Instant Alert System',
        items: ['Push notifications to responders', 'On-device alarm trigger'],
      },
      {
        title: 'Communication Hub',
        items: ['Real-time one-to-one chat', 'Group coordination channels'],
      },
    ],
  },
  {
    slug: 'secure-link',
    name: 'Secure-Link Intelligence',
    badge: 'Flagship Product 02',
    status: 'Live',
    icon: 'Network',
    image: '/images/secure-link-network.png',
    tagline: 'Comprehensive Intelligence & Data Correlation Solution',
    description:
      'Secure-Link unifies fragmented records into one intelligence network — helping analysts uncover hidden relationships, verify identities, and act on a single trusted source of truth.',
    features: [
      'Index — Individuals & PII',
      'Agents — Operatives & clearance',
      'Organisations — Hierarchy & affiliates',
      'Dossiers — Case files & threats',
      'Offline-capable, air-gapped ready',
    ],
    capabilities: [
      {
        title: 'Intelligent Linking & Correlation',
        items: ['Automated hidden-relationship discovery', 'Exact, fuzzy & phonetic engines', 'Analyst validation with confidence scoring'],
      },
      {
        title: 'Face Recognition & Biometric Search',
        items: ['Offline face-recognition pipeline', 'Ranked match retrieval on image upload', 'No external dependency for secure sites'],
      },
      {
        title: 'Network Visualisation',
        items: ['Interactive relationship graph', 'Multi-level connection exploration', 'Full drill-down navigation'],
      },
      {
        title: 'Advanced Security Architecture',
        items: ['Hardware-bound authentication', 'Role-based access control', 'Real-time PII masking & audit trail'],
      },
    ],
  },
  {
    slug: 'erp-suite',
    name: 'Ehnovate ERP Suite',
    badge: 'Enterprise Platform',
    status: 'In Development',
    icon: 'Building2',
    image: '',
    tagline: 'Unified Enterprise Operations Platform',
    description:
      'Bringing the same real-time, AI-assisted philosophy behind OWL-AI and Secure-Link to everyday business management.',
    features: [
      'Finance & Accounting',
      'HR & Payroll',
      'Inventory & Procurement',
      'CRM & Sales',
      'Analytics & Dashboards',
      'Role-Based Access',
    ],
    capabilities: [
      {
        title: 'Finance & Accounting',
        items: ['Budgets & invoicing', 'Ledgers', 'Real-time financial reporting'],
      },
      {
        title: 'HR & Payroll',
        items: ['Employee records', 'Attendance & payroll', 'Performance tracking'],
      },
      {
        title: 'Inventory & Procurement',
        items: ['Stock visibility', 'Vendor management', 'Automated reordering'],
      },
      {
        title: 'CRM & Sales',
        items: ['Lead pipelines', 'Customer data', 'Sales performance analytics'],
      },
    ],
  },
  {
    slug: 'pcms',
    name: 'Preventive Care Management (PCMS)',
    badge: 'Healthcare Platform',
    status: 'Portfolio',
    icon: 'HeartPulse',
    image: '',
    tagline: 'Preventive Care Management System',
    description:
      'Bluetooth-connected diagnostic devices paired with growth-monitoring software for end-to-end preventive care automation.',
    features: [
      'Bluetooth height & weight devices',
      'Long battery life',
      'End-to-end automation',
      'Offline capability',
      'Face-verification auth',
    ],
    capabilities: [
      {
        title: 'Connected Hardware',
        items: ['Bluetooth height & weight devices', 'Long battery life', 'Smart Scope handheld device'],
      },
      {
        title: 'Care Software',
        items: ['Growth-monitoring app', 'AI cervical health scoring in 30s', 'Live doctor video-consultation'],
      },
      {
        title: 'Reporting',
        items: ['Instant reports & prescriptions', 'Remote diagnostics', 'PACS connectivity'],
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Medical Equipment & Healthcare',
    badge: 'Healthcare Portfolio',
    status: 'Portfolio',
    icon: 'Stethoscope',
    image: '',
    tagline: 'Refurbished Imaging & Point-of-Care Solutions',
    description:
      'Refurbished MRI, CT and Cathlab systems plus point-of-care diagnostics at 30–50% lower cost with OEM-equivalent warranty.',
    features: [
      'Refurbished MRI, CT & Cathlab',
      '30–50% lower cost',
      'OEM-equivalent warranty',
      'Remote diagnostics',
      'Flexible financing',
    ],
    capabilities: [
      {
        title: 'Imaging Systems',
        items: ['Refurbished MRI & CT', 'Cathlab systems', 'OEM-equivalent warranty'],
      },
      {
        title: 'Point-of-Care',
        items: ['Health ATM — 120+ tests', 'Portable X-ray (Alerio Smart 2800)', 'Jeevan Rakshak rescue gear'],
      },
      {
        title: 'Value',
        items: ['30–50% lower cost', 'Remote diagnostics', 'Flexible financing'],
      },
    ],
  },
]

export const industries = [
  { icon: 'Shield', title: 'Police & Public Safety', description: 'Proactive monitoring, rapid threat-to-alert response and coordinated field operations.' },
  { icon: 'Hospital', title: 'Healthcare & Hospitals', description: 'Preventive care management, connected diagnostics and secure patient intelligence.' },
  { icon: 'GraduationCap', title: 'Campuses & Education', description: 'Safer campuses with real-time surveillance and incident coordination.' },
  { icon: 'Factory', title: 'Industrial Sites', description: 'Perimeter security, anomaly detection and safety compliance at scale.' },
  { icon: 'Landmark', title: 'Government & Intelligence', description: 'Offline-capable correlation and investigative intelligence for classified environments.' },
  { icon: 'Building2', title: 'Enterprise & Business', description: 'Unified ERP for finance, HR, inventory and CRM on one secure platform.' },
]

export const whyChoose = [
  { icon: 'Layers', title: 'AI + Communication, Unified', description: 'Detection and response coordination live in one platform — not stitched-together tools.' },
  { icon: 'Glasses', title: 'Smart Wearable Integration', description: 'Capture directly from mobile devices and smart glasses for hands-free monitoring.' },
  { icon: 'Gauge', title: 'Real-Time Threat Scoring', description: 'Deep-learning severity scoring turns raw footage into a prioritised action queue.' },
  { icon: 'CloudCog', title: 'Scalable Cloud Architecture', description: 'Built to scale from a single site to nationwide, multi-agency deployments.' },
  { icon: 'Languages', title: 'Multilingual by Design', description: 'English, Hindi and Marathi support with per-user language preferences.' },
  { icon: 'Boxes', title: 'Modular & Future-Ready', description: 'Every module — surveillance, intelligence, ERP — plugs into one extensible core.' },
]

export const achievements = [
  { title: 'Kumbh Mela 2026 Security Deployment', description: 'OWL-AI deployed for large-scale public-safety monitoring at Haridwar, Uttarakhand, in coordination with State Police & Mela Authority.' },
  { title: 'Two Proprietary AI Platforms, Built In-House', description: 'OWL-AI Surveillance and the Secure-Link Intelligence Platform engineered end-to-end by Ehnovate’s product team.' },
  { title: 'Multilingual, Field-Ready Deployment', description: 'English, Hindi and Marathi language support for real-world officer and analyst adoption.' },
  { title: 'Smart Wearable Integration', description: 'Among the first in-region platforms to integrate smart-glass capture into a live security workflow.' },
  { title: 'Offline-Capable Secure Intelligence', description: 'Face recognition and correlation engines built to run fully offline for classified, air-gapped environments.' },
  { title: 'Growing Ecosystem Partnership', description: 'Collaborating with strategic technology partners to accelerate AI product development and enterprise innovation.' },
]

export const roadmap = [
  {
    phase: 'NOW',
    title: 'Deployed Foundations',
    items: ['OWL-AI live: image-based detection & alerting', 'Secure-Link live: correlation & face search', 'Field deployment at scale (Kumbh Mela 2026)'],
  },
  {
    phase: 'NEXT',
    title: 'Live Video Intelligence',
    items: ['Continuous live video-stream monitoring', 'Motion & anomaly detection', 'Automated incident logging'],
  },
  {
    phase: 'AHEAD',
    title: 'Platform Expansion',
    items: ['Ehnovate ERP Suite full launch', 'Predictive risk & analytics models', 'Smart-city & multi-agency integration'],
  },
]

export const owlProcess = [
  'Image captured',
  'Uploaded to secure cloud',
  'AI model analyses in real time',
  'Threat classified',
  'Alert sent instantly',
  'Teams coordinate via chat',
]

export const testimonials = [
  {
    quote:
      'Ehnovate turned our passive camera network into a proactive alerting system. Response times dropped from minutes to seconds during peak crowd events.',
    name: 'Public Safety Coordinator',
    role: 'Large-Scale Event Deployment',
  },
  {
    quote:
      'Secure-Link surfaced relationships across records our teams had never connected. The offline capability was essential for our secure environment.',
    name: 'Intelligence Analyst',
    role: 'Investigative Unit',
  },
  {
    quote:
      'One platform for detection, classification and coordination. That unification is what set Ehnovate apart from every stitched-together tool we tried.',
    name: 'Operations Lead',
    role: 'Industrial Security',
  },
]

export const faqs = [
  {
    q: 'What does Ehnovate Technologies build?',
    a: 'We build AI surveillance (OWL-AI), investigative intelligence (Secure-Link), and enterprise systems (ERP Suite), plus healthcare solutions — all engineered end-to-end in-house.',
  },
  {
    q: 'Can your platforms run offline?',
    a: 'Yes. Secure-Link’s face recognition and correlation engines are built to run fully offline for classified, air-gapped environments with no external dependency.',
  },
  {
    q: 'How fast is threat-to-alert response?',
    a: 'OWL-AI reduces response time from minutes to seconds — from image capture through AI analysis, classification and instant alerting to responders.',
  },
  {
    q: 'Which languages are supported?',
    a: 'English, Hindi and Marathi, with per-user language preferences designed for real-world officer and analyst adoption.',
  },
  {
    q: 'How does deployment scale?',
    a: 'Our cloud architecture is built to scale from a single campus to nationwide, multi-agency deployments, with a modular core.',
  },
]
