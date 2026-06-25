import React from "react";
import {
  deploymentChecklist,
  focusAreas,
  navigationItems,
  profile,
  projects,
  proofStack,
  roles,
  writing,
} from "./content";

export default function App() {
  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Aidan Marshall homepage">
          AM
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={profile.links.linkedin} rel="me noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.links.github} rel="me noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </header>

      <main id="top" className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="location">{profile.location}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions" aria-label="Canonical profile links">
              <a className="primary-link" href={profile.links.linkedin} rel="me noreferrer" target="_blank">
                LinkedIn
              </a>
              <a className="secondary-link" href={profile.links.github} rel="me noreferrer" target="_blank">
                GitHub
              </a>
            </div>
          </div>
          <EntityGraph />
        </section>

        <section className="identity-strip" aria-label="Entity summary">
          {focusAreas.map((area) => (
            <article key={area.label}>
              <h2>{area.label}</h2>
              <p>{area.description}</p>
            </article>
          ))}
        </section>

        <Section id="work" title="Work">
          <div className="timeline">
            {roles.map((role) => (
              <article className="timeline-card" key={`${role.organization}-${role.title}`}>
                <div>
                  <h3>{role.title}</h3>
                  <p className="role-organization">{role.organization}</p>
                </div>
                <dl className="role-meta">
                  <div>
                    <dt>Location</dt>
                    <dd>{role.location}</dd>
                  </div>
                  <div>
                    <dt>Period</dt>
                    <dd>{role.period}</dd>
                  </div>
                </dl>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Open-source projects"
          intro={`GitHub is the canonical home for public code under ${profile.links.github}. These project summaries start from resume-backed work and can be linked to specific repositories as they are prepared for public review.`}
        >
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="card-label">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="writing" title="LinkedIn writing">
          <div className="writing-panel">
            <div>
              <h3>{writing.title}</h3>
              <p>{writing.description}</p>
            </div>
            <a href={writing.profileUrl} rel="me noreferrer" target="_blank">
              Read on LinkedIn
            </a>
          </div>
        </Section>

        <Section id="proof" title="Proof">
          <div className="proof-grid">
            {proofStack.map((proof) => (
              <article key={proof}>{proof}</article>
            ))}
          </div>
        </Section>

        <Section
          id="launch"
          title="Domain launch checklist"
          intro="The local site is built so the public deployment can become the source-of-truth page for Google Search, structured data, and AI crawlers."
        >
          <ol className="launch-list">
            {deploymentChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Section>
      </main>
    </>
  );
}

function Section({
  children,
  id,
  intro,
  title,
}: {
  children: React.ReactNode;
  id: string;
  intro?: string;
  title: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section className="page-section" id={id} aria-labelledby={headingId}>
      <div className="section-heading">
        <h2 id={headingId}>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

function EntityGraph() {
  return (
    <aside className="entity-graph" aria-label="Aidan Marshall entity graph">
      <div className="graph-card graph-card-primary">
        <span>Canonical entity</span>
        <strong>Aidan Marshall</strong>
      </div>
      <div className="graph-node graph-node-linkedin">LinkedIn</div>
      <div className="graph-node graph-node-github">GitHub</div>
      <div className="graph-node graph-node-work">AI systems</div>
      <div className="graph-node graph-node-location">Dallas</div>
      <svg viewBox="0 0 520 360" aria-hidden="true" className="graph-lines">
        <path d="M260 176 L118 76" />
        <path d="M260 176 L420 82" />
        <path d="M260 176 L110 280" />
        <path d="M260 176 L414 276" />
        <circle cx="260" cy="176" r="5" />
      </svg>
    </aside>
  );
}
