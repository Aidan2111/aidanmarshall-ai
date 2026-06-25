import { profile } from "./content";

export const siteTitle =
  "Aidan Marshall | AI Systems, Agentic Workflows, and Open Source";

export const siteDescription =
  "Aidan Marshall is a Dallas-based AI engineer building agentic systems, enterprise automation, open-source AI tools, and LinkedIn writing on practical AI workflows.";

export const canonicalUrl = profile.canonicalUrl;

export type ProfilePageSchema = {
  "@context": "https://schema.org";
  "@type": "ProfilePage";
  "@id": string;
  url: string;
  name: string;
  description: string;
  mainEntity: {
    "@type": "Person";
    "@id": string;
    name: string;
    url: string;
    description: string;
    jobTitle: string;
    sameAs: string[];
    worksFor: {
      "@type": "Organization";
      name: string;
    };
    homeLocation: {
      "@type": "Place";
      name: string;
    };
    alumniOf: {
      "@type": "CollegeOrUniversity";
      name: string;
    };
    knowsAbout: string[];
  };
};

export function buildProfilePageSchema(): ProfilePageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://aidanmarshall.ai/#profile",
    url: profile.canonicalUrl,
    name: `${profile.name} profile`,
    description: siteDescription,
    mainEntity: {
      "@type": "Person",
      "@id": "https://aidanmarshall.ai/#person",
      name: profile.name,
      url: profile.canonicalUrl,
      description: profile.headline,
      jobTitle: profile.currentRole,
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
      knowsAbout: profile.skills,
    },
  };
}

export function injectDocumentMetadata() {
  document.title = siteTitle;

  setMeta("description", siteDescription);
  setLink("canonical", canonicalUrl);
  setMeta("og:type", "profile", "property");
  setMeta("og:title", siteTitle, "property");
  setMeta("og:description", siteDescription, "property");
  setMeta("og:url", canonicalUrl, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", siteTitle);
  setMeta("twitter:description", siteDescription);
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
