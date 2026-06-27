import { describe, expect, it } from "vitest";
import {
  articles,
  certifications,
  focusAreas,
  openSource,
  profile,
  projects,
  roles,
  writing,
} from "./content";

const payload = () =>
  JSON.stringify({
    certifications,
    articles,
    focusAreas,
    openSource,
    profile,
    projects,
    roles,
    writing,
  });

describe("site content", () => {
  it("uses Aidan Marshall's canonical identity and links", () => {
    expect(profile.name).toBe("Aidan Marshall");
    expect(profile.canonicalUrl).toBe("https://aidanmarshall.ai/");
    expect(profile.location).toBe("Dallas, TX");
    expect(profile.links.linkedin).toBe(
      "https://www.linkedin.com/in/aidan-marshall77",
    );
    expect(profile.links.github).toBe("https://github.com/Aidan2111");
    expect(profile.image).toBe(
      "https://aidanmarshall.ai/aidan-marshall-headshot.jpg",
    );
  });

  it("reflects the resume job title and education", () => {
    expect(profile.currentTitle).toBe("Senior AI Engineer");
    expect(profile.currentOrganization).toBe("PwC");
    expect(profile.education).toBe(
      "Southern Methodist University, Cox School of Business",
    );
  });

  it("keeps resume-backed work history in order", () => {
    expect(roles.map((role) => role.organization)).toEqual([
      "PwC (C2H Brooksource)",
      "IBM",
    ]);
    expect(roles[0].highlights.join(" ")).toMatch(/Google ADK and the Claude SDK/);
    expect(roles[1].highlights.join(" ")).toMatch(/Azure OpenAI/);
  });

  it("routes writing to LinkedIn and open source to GitHub", () => {
    expect(writing.url).toBe(profile.links.linkedin);
    expect(openSource.url).toBe(profile.links.github);
    expect(articles.length).toBeGreaterThanOrEqual(3);
    expect(articles.map((article) => article.title)).toContain(
      "Agentic AI has to earn autonomy",
    );
  });

  it("keeps at least three projects and the resume certifications", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
    expect(focusAreas.length).toBe(3);
    expect(projects.filter((project) => project.url).length).toBeGreaterThanOrEqual(2);
    expect(projects.map((project) => project.url)).toContain(
      "https://github.com/Aidan2111/agent-autonomy-score",
    );
    expect(certifications).toEqual(
      expect.arrayContaining([
        "Microsoft Agentic AI Solution Architect (AB-100)",
        "Microsoft AI Engineer (AI-102)",
        "Databricks Fundamentals",
        "GitHub Copilot",
      ]),
    );
  });

  it("does not expose private contact details or excluded locations", () => {
    const text = payload();
    expect(text).not.toMatch(/Tampa/i);
    expect(text).not.toMatch(/949\D*422\D*5080/);
    expect(text).not.toMatch(/aidan\.marshall25@outlook\.com/i);
  });

  it("stays free of build/SEO meta-content that belongs off the page", () => {
    const text = payload();
    expect(text).not.toMatch(/entity file/i);
    expect(text).not.toMatch(/sameAs/i);
    expect(text).not.toMatch(/WebGPU/i);
    expect(text).not.toMatch(/buy aidanmarshall\.ai/i);
    expect(text).not.toMatch(/sitemap/i);
  });
});
