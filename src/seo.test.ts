import { describe, expect, it } from "vitest";
import { profile } from "./content";
import {
  buildProfilePageSchema,
  siteDescription,
  siteTitle,
} from "./seo";

describe("structured data and metadata", () => {
  it("builds a ProfilePage schema centered on Aidan Marshall as a Person", () => {
    const schema = buildProfilePageSchema();

    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("ProfilePage");
    expect(schema["@id"]).toBe("https://aidanmarshall.ai/#profile");
    expect(schema.url).toBe(profile.canonicalUrl);
    expect(schema.mainEntity["@type"]).toBe("Person");
    expect(schema.mainEntity["@id"]).toBe("https://aidanmarshall.ai/#person");
    expect(schema.mainEntity.name).toBe("Aidan Marshall");
    expect(schema.mainEntity.url).toBe(profile.canonicalUrl);
  });

  it("uses sameAs for the canonical LinkedIn and GitHub profiles", () => {
    const schema = buildProfilePageSchema();

    expect(schema.mainEntity.sameAs).toEqual([
      "https://www.linkedin.com/in/aidan-marshall77",
      "https://github.com/Aidan2111",
    ]);
  });

  it("includes resume-backed disambiguation details", () => {
    const schema = buildProfilePageSchema();

    expect(schema.mainEntity.jobTitle).toBe("Senior Associate Native AI Engineer");
    expect(schema.mainEntity.worksFor.name).toBe("PwC (C2H Brooksource)");
    expect(schema.mainEntity.homeLocation.name).toBe("Dallas, TX");
    expect(schema.mainEntity.alumniOf.name).toBe(
      "Southern Methodist University, Cox School of Business",
    );
    expect(schema.mainEntity.knowsAbout).toEqual(
      expect.arrayContaining([
        "AI agents",
        "Agentic AI architecture",
        "Enterprise automation",
        "Google ADK",
        "Claude SDK",
        "Harvey AI",
        "Model Context Protocol",
        "Databricks",
      ]),
    );
  });

  it("keeps schema skills aligned with visible profile skills", () => {
    const schema = buildProfilePageSchema();

    expect(schema.mainEntity.knowsAbout).toEqual(profile.skills);
  });

  it("exports focused page metadata", () => {
    expect(siteTitle).toBe(
      "Aidan Marshall | AI Systems, Agentic Workflows, and Open Source",
    );
    expect(siteDescription).toContain("Public identity page");
    expect(siteDescription).toContain("Dallas-based AI engineer");
    expect(siteDescription).toContain("open-source code");
    expect(siteDescription).toContain("LinkedIn writing");
  });
});
