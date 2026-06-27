import { articles, certifications, profile, projects, roles } from "./content";

export const siteTitle =
  "Aidan Marshall — AI Engineer | Agentic Systems & Enterprise Automation";

export const siteDescription =
  "Aidan Marshall is a Dallas-based AI engineer building agentic AI systems and enterprise automation: multi-agent orchestration, AI-assisted development, and production AI for regulated industries like legal, tax, and compliance.";

export const canonicalUrl = profile.canonicalUrl;

export const socialImage = "https://aidanmarshall.ai/og.png";
export const profileImage = profile.image;

const personId = "https://aidanmarshall.ai/#person";
const profilePageId = "https://aidanmarshall.ai/#profile";
const websiteId = "https://aidanmarshall.ai/#website";

type JsonLdNode = Record<string, unknown>;

export type ProfileSchema = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

/**
 * A linked-data graph describing Aidan Marshall as a Person, the site as a
 * WebSite, and the homepage as a ProfilePage. This is what search engines and
 * LLM crawlers read to resolve the entity behind aidanmarshall.ai.
 */
export function buildProfilePageSchema(): ProfileSchema {
  const person: JsonLdNode = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: profile.canonicalUrl,
    image: profileImage,
    mainEntityOfPage: { "@id": profilePageId },
    description: profile.headline,
    jobTitle: profile.currentTitle,
    knowsAbout: profile.skills,
    sameAs: [profile.links.linkedin, profile.links.github],
    worksFor: {
      "@type": "Organization",
      name: profile.currentOrganization,
    },
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education,
    },
    hasOccupation: roles.map((role) => ({
      "@type": "Occupation",
      name: role.title,
      occupationLocation: { "@type": "Place", name: role.location },
    })),
    hasCredential: certifications.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: credential,
    })),
  };

  // Each project becomes a CreativeWork (or SoftwareSourceCode when a public
  // repo exists) authored by the Person, so crawlers and LLMs can resolve the
  // body of work back to the same entity.
  const projectWorks: JsonLdNode[] = projects.map((project, index) => {
    const node: JsonLdNode = {
      "@type": project.url ? "SoftwareSourceCode" : "CreativeWork",
      "@id": `${profile.canonicalUrl}#project-${index + 1}`,
      name: project.name,
      description: project.description,
      keywords: project.technologies.join(", "),
      author: { "@id": personId },
      creator: { "@id": personId },
      isPartOf: { "@id": websiteId },
    };

    if (project.url) {
      node.url = project.url;
      node.codeRepository = project.url;
    }

    return node;
  });

  const articleWorks: JsonLdNode[] = articles.map((article) => ({
    "@type": "Article",
    "@id": `${profile.canonicalUrl}#${article.id}`,
    headline: article.title,
    description: article.dek,
    datePublished: article.datePublished,
    author: { "@id": personId },
    creator: { "@id": personId },
    publisher: { "@id": personId },
    image: profileImage,
    keywords: article.keywords,
    isPartOf: { "@id": websiteId },
    mainEntityOfPage: `${profile.canonicalUrl}#writing`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: profile.canonicalUrl,
        name: `${profile.name} — ${profile.role}`,
        description: siteDescription,
        inLanguage: "en-US",
        about: { "@id": personId },
        publisher: { "@id": personId },
      },
      person,
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: profile.canonicalUrl,
        name: `${profile.name} — ${profile.role}`,
        description: siteDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        keywords: [
          ...profile.skills,
          ...projects.map((project) => project.name),
          ...articles.map((article) => article.title),
        ],
      },
      {
        "@type": "Blog",
        "@id": `${profile.canonicalUrl}#writing`,
        url: `${profile.canonicalUrl}#writing`,
        name: `${profile.name} writing`,
        inLanguage: "en-US",
        author: { "@id": personId },
        publisher: { "@id": personId },
        blogPost: articleWorks.map((article) => ({ "@id": article["@id"] })),
      },
      ...projectWorks,
      ...articleWorks,
    ],
  };
}

/**
 * A plain-markdown summary of the site for LLM crawlers and AI assistants,
 * following the llms.txt convention (https://llmstxt.org). Served at /llms.txt
 * and generated from the same content model as the page, so the two never
 * drift apart.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${profile.name}`);
  lines.push("");
  lines.push(`> ${profile.headline}`);
  lines.push("");
  lines.push(profile.intro);
  lines.push("");
  lines.push(
    `${profile.name} is currently ${profile.currentTitle} at ${profile.currentOrganization}, based in ${profile.location}. This file summarizes his work, projects, skills, and links for AI assistants and search crawlers.`,
  );

  lines.push("");
  lines.push("## Experience");
  for (const role of roles) {
    lines.push("");
    lines.push(`### ${role.title} — ${role.organization} (${role.period})`);
    lines.push(`Location: ${role.location}`);
    for (const highlight of role.highlights) {
      lines.push(`- ${highlight}`);
    }
  }

  lines.push("");
  lines.push("## Projects");
  for (const project of projects) {
    const link = project.url ? ` (${project.url})` : "";
    lines.push(`- **${project.name}**${link} — ${project.description}`);
  }

  lines.push("");
  lines.push("## Writing");
  for (const article of articles) {
    lines.push("");
    lines.push(`### ${article.title}`);
    lines.push(`${article.datePublished} - ${article.readingTime}`);
    lines.push(article.dek);
    for (const paragraph of article.body) {
      lines.push("");
      lines.push(paragraph);
    }
  }

  lines.push("");
  lines.push("## Skills");
  lines.push(profile.skills.join(", "));

  lines.push("");
  lines.push("## Certifications");
  for (const credential of certifications) {
    lines.push(`- ${credential}`);
  }

  lines.push("");
  lines.push("## Education");
  lines.push(`- ${profile.education} — BBA, Finance`);

  lines.push("");
  lines.push("## Links");
  lines.push(`- Website: ${profile.canonicalUrl}`);
  lines.push(`- LinkedIn: ${profile.links.linkedin}`);
  lines.push(`- GitHub: ${profile.links.github}`);
  lines.push("");

  return lines.join("\n");
}

export function injectDocumentMetadata() {
  document.title = siteTitle;

  setMeta("description", siteDescription);
  setMeta("author", profile.name);
  setLink("canonical", canonicalUrl);
  setMeta("og:type", "profile", "property");
  setMeta("og:site_name", profile.domain, "property");
  setMeta("og:locale", "en_US", "property");
  setMeta("og:title", siteTitle, "property");
  setMeta("og:description", siteDescription, "property");
  setMeta("og:url", canonicalUrl, "property");
  setMeta("og:image", socialImage, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", siteTitle);
  setMeta("twitter:description", siteDescription);
  setMeta("twitter:image", socialImage);
}

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }

  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.append(element);
  }

  element.href = href;
}
