import { certifications, profile, projects, roles } from "./content";

export const siteTitle =
  "Aidan Marshall — AI Engineer | Agentic Systems & Enterprise Automation";

export const siteDescription =
  "Aidan Marshall is a Dallas-based AI engineer building agentic AI systems and enterprise automation: multi-agent orchestration, AI-assisted development, and production AI for regulated industries like legal, tax, and compliance.";

export const canonicalUrl = profile.canonicalUrl;

export const socialImage = "https://aidanmarshall.ai/og.png";

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

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: profile.canonicalUrl,
        name: `${profile.name} — ${profile.role}`,
        description: siteDescription,
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
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        keywords: [
          ...profile.skills,
          ...projects.map((project) => project.name),
        ],
      },
    ],
  };
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
