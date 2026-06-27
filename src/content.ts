export type ExternalLinks = {
  linkedin: string;
  github: string;
};

export type Profile = {
  name: string;
  domain: string;
  canonicalUrl: string;
  location: string;
  /** Short role label used in the eyebrow and structured data. */
  role: string;
  /** One-line positioning statement shown under the name. */
  headline: string;
  /** A human, first-person paragraph introducing the work. */
  intro: string;
  currentTitle: string;
  currentOrganization: string;
  education: string;
  links: ExternalLinks;
  skills: string[];
};

export type FocusArea = {
  label: string;
  description: string;
};

export type Role = {
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  /** Optional link to a public repo or live build. */
  url?: string;
  linkLabel?: string;
};

export const profile: Profile = {
  name: "Aidan Marshall",
  domain: "aidanmarshall.ai",
  canonicalUrl: "https://aidanmarshall.ai/",
  location: "Dallas, TX",
  role: "AI Engineer",
  headline:
    "I build agentic AI systems and the enterprise automation around them — multi-agent orchestration, production tooling, and AI-assisted development that ships.",
  intro:
    "I'm an AI engineer focused on taking agentic systems from prototype to production inside large, regulated organizations. Most of my work lives where autonomous AI meets real governance: legal, tax, and compliance platforms where the system has to be useful and trustworthy at the same time.",
  currentTitle: "Senior AI Engineer",
  currentOrganization: "PwC",
  education: "Southern Methodist University, Cox School of Business",
  links: {
    linkedin: "https://www.linkedin.com/in/aidan-marshall77",
    github: "https://github.com/Aidan2111",
  },
  skills: [
    "Agentic AI architecture",
    "Multi-agent orchestration",
    "Google ADK & Claude SDK",
    "Harvey AI integration",
    "Azure OpenAI & AI Foundry",
    "Model Context Protocol (MCP)",
    "Python",
    "React & TypeScript",
    "Micro-frontend integration",
    "Cloud solutions architecture",
    "AI-assisted development",
    "Enterprise governance & compliance",
  ],
};

export const focusAreas: FocusArea[] = [
  {
    label: "Agentic systems",
    description:
      "Architecting and scaling multi-agent systems with Google ADK and the Claude SDK, integrated into enterprise platforms rather than left in a notebook.",
  },
  {
    label: "Enterprise AI delivery",
    description:
      "Shipping production AI into regulated environments — legal, tax, and compliance — where governance, cost, and reliability are first-class requirements.",
  },
  {
    label: "AI-assisted development",
    description:
      "Building the workflows and tooling around Cursor, Claude, and Copilot that measurably shorten the SDLC and make engineering teams faster.",
  },
];

export const roles: Role[] = [
  {
    title: "Senior AI Engineer",
    organization: "PwC (C2H Brooksource)",
    location: "Dallas, TX",
    period: "Mar 2026 — Present",
    highlights: [
      "Architected and scaled agentic AI systems with Google ADK and the Claude SDK, integrating autonomous workflows into a globally distributed enterprise platform generating over $5B in annual revenue.",
      "Led the 0-to-1 integration of Harvey AI into the core product, owning end-to-end system design and the data pipelines behind specialized legal and compliance capabilities.",
      "Designed a composite-weight system that maps real-time agentic compute cost against output to track developer productivity and optimize ROI and resource allocation.",
      "Pioneered AI-assisted development workflows (Cursor, Claude, Copilot) and rapid-prototyping frameworks that shortened the SDLC and lifted cross-functional team velocity.",
    ],
  },
  {
    title: "AI Engineer — One Microsoft Practice Innovation",
    organization: "IBM",
    location: "Dallas, TX",
    period: "Jun 2025 — Mar 2026",
    highlights: [
      "Delivered enterprise-grade agentic AI for a Fortune-level tax enterprise, integrating Azure OpenAI and orchestrating multi-agent workflows over Model Context Protocol (MCP) servers under strict governance and compliance standards.",
      "Architected interactive agentic AI prototypes that showcased IBM and Neudesic's innovation pipeline and drove high-value, client-facing engagements and proofs-of-concept.",
      "Ran internal engineering experiments validating agentic patterns, tool integrations, and custom state and orchestration flows to future-proof client technology roadmaps.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Agent Autonomy Score",
    category: "Open source · Python",
    description:
      "A risk-scoring system that decides how much human supervision an AI coding agent needs before it acts — bringing measurable governance to autonomous development.",
    technologies: ["Python", "Agentic AI", "Risk scoring"],
    url: "https://github.com/Aidan2111/agent-autonomy-score",
    linkLabel: "View repo",
  },
  {
    name: "Sentiment-Driven Quantitative Carry Trade Model",
    category: "Open source · Python",
    description:
      "A carry-trade forecasting model across USD, EUR, and the Ukrainian Hryvnia that pairs a machine-learning ensemble with real-time news-sentiment signals, surfaced through a React and TypeScript dashboard.",
    technologies: ["Python", "scikit-learn", "React", "TypeScript"],
    url: "https://github.com/Aidan2111/carry-trade-model",
    linkLabel: "View repo",
  },
  {
    name: "Autonomous Native AI Mobile Navigation Agent",
    category: "Claude Code · iOS",
    description:
      "An iOS app for the Newport Beach Boat Show with an embedded multimodal assistant that interprets user intent and autonomously navigates the app's interface.",
    technologies: ["Claude Code", "iOS", "Multimodal AI"],
  },
];

export const writing = {
  title: "Writing on AI in the real world",
  description:
    "I write about agentic AI, enterprise automation, and what actually works when these systems leave the demo and go into production. Latest posts and articles live on LinkedIn.",
  url: profile.links.linkedin,
  cta: "Read on LinkedIn",
};

export const openSource = {
  title: "Open source & experiments",
  description:
    "Project code, prototypes, and the experiments behind the writing — published openly on GitHub.",
  url: profile.links.github,
  cta: "View on GitHub",
};

export const certifications = [
  "Microsoft Agentic AI Solution Architect (AB-100)",
  "Microsoft AI Engineer (AI-102)",
  "Microsoft Azure Fundamentals",
  "Databricks Fundamentals",
  "GitHub Copilot",
];

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
