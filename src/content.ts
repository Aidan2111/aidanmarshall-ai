export type ExternalLinks = {
  linkedin: string;
  github: string;
};

export type Profile = {
  name: string;
  domain: string;
  canonicalUrl: string;
  image: string;
  avatar: string;
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

export type Article = {
  id: string;
  title: string;
  dek: string;
  datePublished: string;
  readingTime: string;
  keywords: string[];
  body: string[];
};

export const profile: Profile = {
  name: "Aidan Marshall",
  domain: "aidanmarshall.ai",
  canonicalUrl: "https://aidanmarshall.ai/",
  image: "https://aidanmarshall.ai/aidan-marshall-headshot.jpg",
  avatar: "https://aidanmarshall.ai/aidan-marshall-avatar.jpg",
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
    "Microsoft Agent Framework",
    "Google ADK & Claude SDK",
    "Harvey AI integration",
    "Azure OpenAI & Microsoft Foundry",
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
      "Delivered enterprise-grade agentic AI for a Fortune-level tax enterprise, building multi-agent workflows on the Microsoft Agent Framework with Azure OpenAI and Microsoft Foundry, orchestrated over Model Context Protocol (MCP) servers under strict governance and compliance standards.",
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
    name: "LLM Auction Router",
    category: "Agent infrastructure · Python",
    description:
      "An auction router for LLM work: Claude Opus, Sonnet, GPT, and local models each submit a structured bid on a task, and a configurable utility function weighs quality, price, and risk-fit to pick the winner. Risk context comes from Agent Autonomy Score, and reported outcomes feed back through a SQLite track record.",
    technologies: ["Python", "Multi-model routing", "Agentic AI", "SQLite"],
  },
  {
    name: "Event-Driven Multi-Agent Architecture",
    category: "Architecture study · Multi-agent",
    description:
      "A design study for running multi-agent AI systems on an event-driven service bus: agents subscribe to and emit events instead of calling each other directly, so they can be added, upgraded, or hot-swapped live without redeploying the rest of the system. Covers the event envelope, agent registry, reliability, and LLM cost on transports like Azure Service Bus and Kafka.",
    technologies: ["Multi-agent systems", "Event-driven architecture", "Azure Service Bus", "Python"],
  },
  {
    name: "Macro Oil Desk Terminal",
    category: "Full-stack · Azure AI Foundry",
    description:
      "A trading-desk terminal for an oil desk — Brent/WTI dislocation z-scores, US inventory drawdown velocity, and AIS-based tanker fleet exposure by regulatory regime — with an Azure OpenAI and Microsoft Foundry-backed market-commentary panel and a real-time 3D Earth visualization. Built on Next.js and FastAPI, deployed on Azure.",
    technologies: ["Next.js", "FastAPI", "Azure AI Foundry", "Three.js"],
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
    "I write about agentic AI, enterprise automation, and what actually works when these systems leave the demo and go into production. This site is the canonical home for that work, with LinkedIn as the distribution channel.",
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

export const articles: Article[] = [
  {
    id: "agentic-ai-has-to-earn-autonomy",
    title: "Agentic AI has to earn autonomy",
    dek:
      "The useful question is not whether an agent can act. It is when the system can prove that it deserves more room to act.",
    datePublished: "2026-06-27",
    readingTime: "3 min read",
    keywords: [
      "Agentic AI",
      "AI governance",
      "Autonomous agents",
      "AI-assisted development",
    ],
    body: [
      "Autonomy should be treated as a measured privilege, not a default setting. In regulated environments, the agent's technical capability is only one part of the decision. The system also needs a clear view of task risk, reversibility, confidence, cost, and the blast radius of a bad action.",
      "That is the idea behind Agent Autonomy Score: make supervision a first-class control. Low-risk, reversible work can move quickly. High-risk work should slow down, ask for review, or provide a stronger audit trail before it touches production systems or client-facing workflows.",
      "The teams that win with agentic AI will not be the ones that give every model unlimited agency. They will be the ones that can explain why an agent was allowed to act, when it was stopped, and what evidence the system used to make that call.",
    ],
  },
  {
    id: "event-driven-multi-agent-systems",
    title: "Multi-agent systems should not depend on direct handoffs",
    dek:
      "Event-driven architecture gives AI agents a cleaner way to coordinate, fail, recover, and evolve inside real enterprise platforms.",
    datePublished: "2026-06-27",
    readingTime: "4 min read",
    keywords: [
      "Multi-agent orchestration",
      "Event-driven architecture",
      "Azure Service Bus",
      "Kafka",
    ],
    body: [
      "Most early multi-agent prototypes wire agents together with direct calls: planner calls researcher, researcher calls analyst, analyst calls writer. That works for demos, but it creates brittle dependency chains as soon as the system needs reliability, observability, or live upgrades.",
      "An event-driven model is a better fit for production. Agents subscribe to the work they understand and emit structured events when they complete, fail, escalate, or need more context. That makes it possible to add a new specialist agent, replace an expensive model, or replay a workflow without redeploying the entire system.",
      "For enterprise AI, the architecture around the model matters as much as the model itself. Service buses, durable queues, event envelopes, registries, and cost telemetry are what turn a clever agent chain into software that can survive real usage.",
    ],
  },
  {
    id: "ai-assisted-development-operating-model",
    title: "AI-assisted development is an operating model",
    dek:
      "Cursor, Claude, Copilot, and custom agents are most valuable when they become part of a governed engineering workflow instead of a side tool.",
    datePublished: "2026-06-27",
    readingTime: "3 min read",
    keywords: [
      "AI-assisted development",
      "Developer productivity",
      "Enterprise automation",
      "LLMOps",
    ],
    body: [
      "The best AI-assisted development work is not about asking a model for code and hoping the patch is good. It is about designing the workflow around the model: what context it receives, what tools it can call, what checks run automatically, and where humans review the result.",
      "Inside large organizations, that workflow has to account for governance, cost, security, and team adoption. The point is not to replace engineering judgment. The point is to compress the boring parts of implementation while making the review surface clearer and more measurable.",
      "The practical metric is whether the system helps teams ship reliable software faster. That means tracking more than token spend or lines of code. It means connecting agentic compute to outcomes: cycle time, review burden, defect rate, and how often the automation makes a human decision easier.",
    ],
  },
];

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
