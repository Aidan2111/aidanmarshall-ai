export type ExternalLinks = {
  linkedin: string;
  github: string;
};

export type Profile = {
  name: string;
  domain: string;
  canonicalUrl: string;
  location: string;
  headline: string;
  summary: string;
  currentRole: string;
  currentOrganization: string;
  priorOrganization: string;
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
};

export type Writing = {
  title: string;
  profileUrl: string;
  description: string;
};

export const profile: Profile = {
  name: "Aidan Marshall",
  domain: "aidanmarshall.ai",
  canonicalUrl: "https://aidanmarshall.ai/",
  location: "Dallas, TX",
  headline:
    "Dallas-based AI engineer building agentic systems, enterprise automation, and open-source AI tools.",
  summary:
    "This is the public record for Aidan Marshall: current AI engineering work, open-source code, LinkedIn writing, credentials, and the profiles search engines should reconcile.",
  currentRole: "Senior Associate Native AI Engineer",
  currentOrganization: "PwC (C2H Brooksource)",
  priorOrganization: "IBM",
  education: "Southern Methodist University, Cox School of Business",
  links: {
    linkedin: "https://www.linkedin.com/in/aidan-marshall77",
    github: "https://github.com/Aidan2111",
  },
  skills: [
    "AI agents",
    "Agentic AI architecture",
    "Enterprise automation",
    "Multi-agent orchestration",
    "Azure OpenAI",
    "Google ADK",
    "Claude SDK",
    "Harvey AI",
    "Model Context Protocol",
    "React",
    "TypeScript",
    "Python",
    "Databricks",
  ],
};

export const focusAreas: FocusArea[] = [
  {
    label: "Current work",
    description:
      "Senior Associate Native AI Engineer work connected to agentic systems, enterprise automation, and AI-assisted development.",
  },
  {
    label: "Public code",
    description:
      "GitHub projects under Aidan2111, with public work prepared as the durable proof layer for this identity page.",
  },
  {
    label: "Writing trail",
    description:
      "LinkedIn posts and articles that connect the same name to AI systems, automation, and practical workflow work.",
  },
];

export const roles: Role[] = [
  {
    title: "Senior Associate Native AI Engineer",
    organization: "PwC (C2H Brooksource)",
    location: "Dallas, TX",
    period: "March 2026 to present",
    highlights: [
      "Architects and scales agentic AI systems using Google ADK and Claude SDK.",
      "Works on Harvey AI integration, system design, and data pipelines for specialized legal and compliance AI capabilities.",
      "Builds AI-assisted development workflows using Cursor, Claude, and GitHub Copilot.",
      "Maps agentic compute costs against output to evaluate productivity, ROI, and resource allocation.",
    ],
  },
  {
    title: "AI Engineer - One Microsoft Practice Innovation",
    organization: "IBM",
    location: "Dallas, TX",
    period: "June 2025 to March 2026",
    highlights: [
      "Delivered Agentic AI solutions for enterprise tax technology contexts using Azure OpenAI services.",
      "Orchestrated multi-agent workflows through Model Context Protocol servers under governance and compliance standards.",
      "Built client-facing AI prototypes that showcased IBM and Neudesic innovation work.",
      "Validated agentic patterns, tool integrations, state flows, and orchestration approaches for client roadmaps.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Autonomous Native AI Mobile Navigation Agent",
    category: "Claude Code and iOS",
    description:
      "An iOS app concept for the Newport Beach Boat Show with an embedded multimodal AI assistant that interprets user intent and navigates app UI.",
    technologies: ["Claude Code", "iOS", "Multimodal AI", "Mobile automation"],
  },
  {
    name: "Sentiment-Driven Quantitative Carry Trade Model",
    category: "Python and Scikit-Learn",
    description:
      "An algorithmic carry-trade model across USD, EUR, and Ukrainian Hryvnia with an ML regression pipeline that reallocates capital using news sentiment signals.",
    technologies: ["Python", "Scikit-Learn", "Machine learning", "Sentiment analysis"],
  },
  {
    name: "AI-Driven Professional Growth and Insights Platform",
    category: "Web app",
    description:
      "A personalized web app concept for surfacing AI and technology trends by role, with workflow mapping for adopting relevant AI tools.",
    technologies: ["Web app", "AI trends", "Workflow mapping", "Personalization"],
  },
];

export const writing: Writing = {
  title: "LinkedIn articles and field notes",
  profileUrl: profile.links.linkedin,
  description:
    "Articles and posts on AI systems, enterprise automation, and practical agentic workflows are published through LinkedIn.",
};

export const proofStack = [
  "Southern Methodist University, Cox School of Business",
  "Microsoft Agentic AI Solution Architect (AB-100)",
  "Microsoft AI Engineer (AI-102)",
  "Microsoft Azure Fundamentals",
  "Databricks Fundamentals",
  "GitHub Copilot",
];

export const deploymentChecklist = [
  "Buy aidanmarshall.ai",
  "Deploy the static site to a public host",
  "Point aidanmarshall.ai DNS to the host",
  "Add https://aidanmarshall.ai to Google Search Console",
  "Submit https://aidanmarshall.ai/sitemap.xml",
  "Use URL Inspection after deployment",
  "Validate structured data with Google's Rich Results Test",
];

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Proof", href: "#proof" },
];
