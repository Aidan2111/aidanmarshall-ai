import { describe, expect, it } from "vitest";
import { articles, projects, profile } from "./content";
import {
  buildLlmsTxt,
  buildProfilePageSchema,
  siteDescription,
  siteTitle,
} from "./seo";

type Node = Record<string, any>;

const nodeOfType = (type: string): Node => {
  const schema = buildProfilePageSchema();
  const node = schema["@graph"].find((entry) => (entry as Node)["@type"] === type);
  expect(node, `expected a ${type} node in the graph`).toBeDefined();
  return node as Node;
};

const nodesOfType = (type: string): Node[] => {
  const schema = buildProfilePageSchema();
  return schema["@graph"].filter((entry) => (entry as Node)["@type"] === type) as Node[];
};

describe("structured data and metadata", () => {
  it("emits a schema.org graph", () => {
    const schema = buildProfilePageSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(Array.isArray(schema["@graph"])).toBe(true);
  });

  it("describes Aidan Marshall as the central Person", () => {
    const person = nodeOfType("Person");
    expect(person["@id"]).toBe("https://aidanmarshall.ai/#person");
    expect(person.name).toBe("Aidan Marshall");
    expect(person.url).toBe(profile.canonicalUrl);
    expect(person.image).toBe(profile.image);
    expect(person.jobTitle).toBe("Senior AI Engineer");
    expect(person.worksFor.name).toBe("PwC");
    expect(person.homeLocation.name).toBe("Dallas, TX");
    expect(person.alumniOf.name).toBe(
      "Southern Methodist University, Cox School of Business",
    );
  });

  it("uses sameAs for the canonical LinkedIn and GitHub profiles", () => {
    const person = nodeOfType("Person");
    expect(person.sameAs).toEqual([
      "https://www.linkedin.com/in/aidan-marshall77",
      "https://github.com/Aidan2111",
    ]);
  });

  it("keeps knowsAbout aligned with the visible skills", () => {
    const person = nodeOfType("Person");
    expect(person.knowsAbout).toEqual(profile.skills);
  });

  it("links the ProfilePage and WebSite back to the Person", () => {
    const profilePage = nodeOfType("ProfilePage");
    expect(profilePage.mainEntity["@id"]).toBe("https://aidanmarshall.ai/#person");

    const website = nodeOfType("WebSite");
    expect(website.url).toBe(profile.canonicalUrl);
    expect(website.about["@id"]).toBe("https://aidanmarshall.ai/#person");
  });

  it("exports human, keyword-aware page metadata", () => {
    expect(siteTitle).toContain("Aidan Marshall");
    expect(siteTitle).toContain("AI Engineer");
    expect(siteDescription).toContain("Dallas-based AI engineer");
    expect(siteDescription).toContain("agentic");
  });

  it("publishes every project as a work authored by the Person", () => {
    const works = [
      ...nodesOfType("SoftwareSourceCode"),
      ...nodesOfType("CreativeWork"),
    ];
    expect(works.length).toBe(projects.length);
    for (const work of works) {
      expect(work.author["@id"]).toBe("https://aidanmarshall.ai/#person");
      expect(typeof work.name).toBe("string");
      expect(typeof work.description).toBe("string");
    }
    const repoWork = nodesOfType("SoftwareSourceCode").find(
      (work) => work.name === "Agent Autonomy Score",
    );
    expect(repoWork?.codeRepository).toBe(
      "https://github.com/Aidan2111/agent-autonomy-score",
    );
  });

  it("publishes owned-domain writing as Article structured data", () => {
    const articleNodes = nodesOfType("Article");
    expect(articleNodes.length).toBe(articles.length);
    expect(articleNodes.map((article) => article.headline)).toContain(
      "Agentic AI has to earn autonomy",
    );
    for (const article of articleNodes) {
      expect(article.author["@id"]).toBe("https://aidanmarshall.ai/#person");
      expect(article.image).toBe(profile.image);
      expect(article.mainEntityOfPage).toBe("https://aidanmarshall.ai/#writing");
    }
  });
});

describe("llms.txt", () => {
  const text = buildLlmsTxt();

  it("leads with the person and a one-line summary", () => {
    expect(text.startsWith("# Aidan Marshall")).toBe(true);
    expect(text).toContain(`> ${profile.headline}`);
  });

  it("lists experience, projects, and canonical links", () => {
    expect(text).toContain("## Experience");
    expect(text).toContain("## Projects");
    expect(text).toContain("## Writing");
    for (const project of projects) {
      expect(text).toContain(project.name);
    }
    for (const article of articles) {
      expect(text).toContain(article.title);
    }
    expect(text).toContain(profile.links.linkedin);
    expect(text).toContain(profile.links.github);
    expect(text).toContain(profile.canonicalUrl);
  });
});
