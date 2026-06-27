import { describe, expect, it } from "vitest";
import { profile } from "./content";
import { buildProfilePageSchema, siteDescription, siteTitle } from "./seo";

type Node = Record<string, any>;

const nodeOfType = (type: string): Node => {
  const schema = buildProfilePageSchema();
  const node = schema["@graph"].find((entry) => (entry as Node)["@type"] === type);
  expect(node, `expected a ${type} node in the graph`).toBeDefined();
  return node as Node;
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
});
