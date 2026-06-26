import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { profile } from "./content";

describe("Aidan Marshall entity homepage", () => {
  it("renders the hero identity and positioning", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Aidan Marshall" }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
    expect(screen.getByText("public entity file")).toBeInTheDocument();
    expect(screen.getAllByText("Dallas, TX").length).toBeGreaterThanOrEqual(1);
  });

  it("renders canonical LinkedIn and GitHub links", () => {
    render(<App />);

    expect(
      screen
        .getAllByRole("link", { name: /linkedin/i })
        .some((link) =>
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

  it("renders work history from the resume-backed content", () => {
    render(<App />);

    const work = screen.getByRole("region", { name: "AI engineering work" });
    expect(within(work).getByText("PwC (C2H Brooksource)")).toBeInTheDocument();
    expect(within(work).getByText("IBM")).toBeInTheDocument();
    expect(
      within(work).getByText(/Google ADK and Claude SDK/i),
    ).toBeInTheDocument();
    expect(
      within(work).getByText(/Azure OpenAI services/i),
    ).toBeInTheDocument();
  });

  it("renders open-source projects and LinkedIn writing sections", () => {
    render(<App />);

    expect(
      screen.getByRole("region", { name: "Open-source proof to connect" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Sentiment-Driven Quantitative Carry Trade Model"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "LinkedIn record" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Articles and posts on AI systems/i)).toBeInTheDocument();
  });

  it("renders proof stack and keeps excluded private details off the page", () => {
    const { container } = render(<App />);

    expect(
      screen.getAllByText("Southern Methodist University, Cox School of Business").length,
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Databricks Fundamentals")).toBeInTheDocument();

    expect(container.textContent).not.toMatch(/Tampa/i);
    expect(container.textContent).not.toMatch(/949\D*422\D*5080/);
    expect(container.textContent).not.toMatch(/aidan\.marshall25@outlook\.com/i);
  });

  it("renders a tile-based technical surface with a performance-conscious shader field", () => {
    render(<App />);

    expect(screen.getByTestId("tile-console")).toBeInTheDocument();
    expect(screen.getAllByTestId("entity-tile").length).toBeGreaterThanOrEqual(10);
    expect(
      screen.getByLabelText("Performance-conscious WebGPU shader field"),
    ).toHaveAttribute("data-renderer-state", "booting");
    expect(screen.getByRole("heading", { name: "Index graph running" })).toBeInTheDocument();
    expect(screen.getByText("Booting GPU graph")).toBeInTheDocument();
    expect(screen.getByText(/draws the reconciliation path/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Reconcile these profiles" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "30 FPS cap" })).toBeInTheDocument();
    expect(screen.getByText(/WebGPU only runs when visible/i)).toBeInTheDocument();
    expect(screen.getByText("ProfilePage + Person JSON-LD")).toBeInTheDocument();
  });
});
