import { describe, expect, it } from "vitest";
import {
  deploymentChecklist,
  focusAreas,
  profile,
  projects,
  proofStack,
  roles,
  writing,
} from "./content";

const publicPayload = () =>
  JSON.stringify({
    deploymentChecklist,
    focusAreas,
    profile,
    projects,
    proofStack,
    roles,
    writing,
  });

describe("canonical public identity content", () => {
  it("uses Aidan Marshall's approved canonical identity", () => {
    expect(profile.name).toBe("Aidan Marshall");
    expect(profile.canonicalUrl).toBe("https://aidanmarshall.ai/");
    expect(profile.location).toBe("Dallas, TX");
    expect(profile.links.linkedin).toBe(
      "https://www.linkedin.com/in/aidan-marshall77",
    );
    expect(profile.links.github).toBe("https://github.com/Aidan2111");
  });

  it("keeps the public page focused on AI, open source, and LinkedIn writing", () => {
    expect(focusAreas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Current work" }),
        expect.objectContaining({ label: "Public code" }),
        expect.objectContaining({ label: "Writing trail" }),
      ]),
    );
    expect(writing.profileUrl).toBe(profile.links.linkedin);
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("keeps resume-backed work and proof details available", () => {
    expect(roles.map((role) => role.organization)).toEqual([
      "PwC (C2H Brooksource)",
      "IBM",
    ]);
    expect(proofStack).toEqual(
      expect.arrayContaining([
        "Southern Methodist University, Cox School of Business",
        "Microsoft Agentic AI Solution Architect (AB-100)",
        "Microsoft AI Engineer (AI-102)",
        "Databricks Fundamentals",
        "GitHub Copilot",
      ]),
    );
  });

  it("does not expose excluded location or private contact details", () => {
    const payload = publicPayload();

    expect(payload).not.toMatch(/Tampa/i);
    expect(payload).not.toMatch(/949\D*422\D*5080/);
    expect(payload).not.toMatch(/aidan\.marshall25@outlook\.com/i);
  });

  it("includes launch steps needed for the real domain", () => {
    expect(deploymentChecklist).toEqual(
      expect.arrayContaining([
        "Buy aidanmarshall.ai",
        "Add https://aidanmarshall.ai to Google Search Console",
        "Submit https://aidanmarshall.ai/sitemap.xml",
        "Validate structured data with Google's Rich Results Test",
      ]),
    );
  });
});
