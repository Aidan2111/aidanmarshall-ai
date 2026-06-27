import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { profile } from "./content";

describe("Aidan Marshall landing page", () => {
  it("leads with the name, role, and positioning", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Aidan Marshall" }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
    expect(screen.getAllByText(/Dallas, TX/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/AI Engineer · Dallas, TX/)).toBeInTheDocument();
  });

  it("links to the canonical LinkedIn and GitHub profiles", () => {
    render(<App />);

    expect(
      screen
        .getAllByRole("link", { name: /linkedin/i })
        .some(
          (link) =>
            link.getAttribute("href") ===
            "https://www.linkedin.com/in/aidan-marshall77",
        ),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: /github/i })
        .some((link) => link.getAttribute("href") === "https://github.com/Aidan2111"),
    ).toBe(true);
  });

  it("renders resume-backed experience", () => {
    render(<App />);

    const work = screen.getByRole("region", { name: "Where I've done the work" });
    expect(within(work).getByText("PwC (C2H Brooksource)")).toBeInTheDocument();
    expect(within(work).getByText("IBM")).toBeInTheDocument();
    expect(within(work).getByText(/Google ADK and the Claude SDK/)).toBeInTheDocument();
    expect(within(work).getByText(/Azure OpenAI/)).toBeInTheDocument();
  });

  it("renders projects, writing, and open-source sections", () => {
    render(<App />);

    const projects = screen.getByRole("region", { name: "Things I've built" });
    expect(
      within(projects).getByText("Sentiment-Driven Quantitative Carry Trade Model"),
    ).toBeInTheDocument();
    expect(within(projects).getByText("Agent Autonomy Score")).toBeInTheDocument();
    expect(
      within(projects)
        .getAllByRole("link", { name: /view repo/i })
        .some(
          (link) =>
            link.getAttribute("href") ===
            "https://github.com/Aidan2111/agent-autonomy-score",
        ),
    ).toBe(true);

    const share = screen.getByRole("region", { name: "Where I share the work" });
    expect(
      within(share).getByRole("link", { name: /read on linkedin/i }),
    ).toHaveAttribute("href", profile.links.linkedin);
    expect(
      within(share).getByRole("link", { name: /view on github/i }),
    ).toHaveAttribute("href", profile.links.github);
  });

  it("renders skills, credentials, and education", () => {
    render(<App />);

    const skills = screen.getByRole("region", { name: "What I work with" });
    expect(within(skills).getByText("Multi-agent orchestration")).toBeInTheDocument();
    expect(within(skills).getByText("Databricks Fundamentals")).toBeInTheDocument();
    expect(
      within(skills).getByText(/Southern Methodist University/),
    ).toBeInTheDocument();
  });

  it("keeps private details and slop meta-content off the page", () => {
    const { container } = render(<App />);

    expect(container.textContent).not.toMatch(/Tampa/i);
    expect(container.textContent).not.toMatch(/949\D*422\D*5080/);
    expect(container.textContent).not.toMatch(/aidan\.marshall25@outlook\.com/i);
    expect(container.textContent).not.toMatch(/WebGPU/i);
    expect(container.textContent).not.toMatch(/entity file/i);
    expect(container.textContent).not.toMatch(/30 FPS/i);
  });
});
