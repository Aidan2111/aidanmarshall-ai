import React from "react";
import {
  articles,
  certifications,
  focusAreas,
  navigationItems,
  openSource,
  profile,
  projects,
  roles,
  writing,
} from "./content";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <AmbientField />
      <SiteHeader />

      <main id="top" className="page">
        <section className="hero" aria-labelledby="hero-name">
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1 id="hero-name">{profile.name}</h1>
          <p className="hero-lead">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.links.linkedin} rel="me noopener noreferrer" target="_blank">
              Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.links.github} rel="me noopener noreferrer" target="_blank">
              View GitHub
            </a>
          </div>
          <p className="hero-now">
            Currently <strong>{profile.currentTitle}</strong> at {profile.currentOrganization}
            <span className="sep"> · </span>
            Previously IBM
          </p>
          <figure className="hero-portrait">
            <img
              src="/aidan-marshall-headshot.jpg"
              alt="Aidan Marshall"
              width="1200"
              height="1200"
            />
          </figure>
        </section>

        <section className="focus" aria-label="How I work">
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.label}>
                <h2>{area.label}</h2>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <Section id="work" eyebrow="Experience" title="Where I've done the work">
          <div className="work-list">
            {roles.map((role) => (
              <article className="work-card" key={`${role.organization}-${role.title}`}>
                <div className="work-meta">
                  <p className="period">{role.period}</p>
                  <h3>{role.title}</h3>
                  <p className="org">{role.organization}</p>
                  <p className="loc">{role.location}</p>
                </div>
                <ul className="work-points">
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
          eyebrow="Selected projects"
          title="Things I've built"
          intro="A few projects that show the range — from agent governance and multi-agent architecture to Azure AI Foundry systems and quantitative models. More on GitHub."
        >
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="tags" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.url ? (
                  <a
                    className="link-arrow project-link"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.linkLabel ?? "View project"}
                    <span aria-hidden="true"> →</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section id="writing" eyebrow="Writing & code" title="Where I share the work">
          <div className="share-grid">
            <article className="share-card">
              <h3>{writing.title}</h3>
              <p>{writing.description}</p>
              <a className="link-arrow" href={writing.url} rel="me noopener noreferrer" target="_blank">
                {writing.cta}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
            <article className="share-card">
              <h3>{openSource.title}</h3>
              <p>{openSource.description}</p>
              <a className="link-arrow" href={openSource.url} rel="me noopener noreferrer" target="_blank">
                {openSource.cta}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          </div>
          <div className="article-list" aria-label="Writing by Aidan Marshall">
            {articles.map((article) => (
              <article className="article-card" id={article.id} key={article.id}>
                <div className="article-meta">
                  <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
                  <span>{article.readingTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="article-dek">{article.dek}</p>
                <div className="article-body">
                  {article.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="tags" aria-label={`${article.title} topics`}>
                  {article.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Capabilities" title="What I work with">
          <div className="skills-layout">
            <div>
              <ul className="tags tags-lg" aria-label="Skills and technologies">
                {profile.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <aside className="credentials">
              <h3>Certifications</h3>
              <ul className="cred-list">
                {certifications.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
              <h3 className="cred-edu-heading">Education</h3>
              <p className="cred-edu">{profile.education} — BBA, Finance</p>
            </aside>
          </div>
        </Section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let's build something.</h2>
          <p className="contact-lead">
            I'm always open to conversations about agentic AI, enterprise automation, and ambitious
            engineering teams. The best way to reach me is LinkedIn.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.links.linkedin} rel="me noopener noreferrer" target="_blank">
              Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.links.github} rel="me noopener noreferrer" target="_blank">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {2026} {profile.name}</span>
        <span className="footer-links">
          <a href={profile.links.linkedin} rel="me noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.links.github} rel="me noopener noreferrer" target="_blank">
            GitHub
          </a>
        </span>
      </footer>
    </>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
        <span className="brand-mark" aria-hidden="true">
          AM
        </span>
        <span className="brand-name">{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label="Sections">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Section({
  children,
  eyebrow,
  id,
  intro,
  title,
}: {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  intro?: string;
  title: string;
}) {
  const headingId = `${id}-title`;

  return (
    <section className="section" id={id} aria-labelledby={headingId}>
      <div className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={headingId}>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

/**
 * A quiet, decorative background field. It renders a slow-moving aurora via
 * WebGPU when available and falls back to a soft animated canvas gradient, then
 * to nothing (the CSS background) when motion is reduced or unsupported. It is
 * purely atmospheric — no text, no labels, no UI.
 */
function AmbientField() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (navigator.userAgent.toLowerCase().includes("jsdom")) {
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    const start = async () => {
      const gpuCleanup = await startWebGpu(canvas, () => cancelled, prefersReducedMotion);
      if (typeof gpuCleanup === "function") {
        if (cancelled) {
          gpuCleanup();
        } else {
          cleanup = gpuCleanup;
        }
        return;
      }
      if (!cancelled) {
        cleanup = startCanvas(canvas, prefersReducedMotion);
      }
    };

    void start();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient" aria-hidden="true" />;
}

async function startWebGpu(
  canvas: HTMLCanvasElement,
  isCancelled: () => boolean,
  staticFrame: boolean,
) {
  try {
    const gpu = (navigator as Navigator & { gpu?: any }).gpu;
    if (!gpu) {
      return false;
    }

    const context = canvas.getContext("webgpu" as never) as any;
    if (!context) {
      return false;
    }

    const adapter = await gpu.requestAdapter({ powerPreference: "low-power" });
    if (!adapter || isCancelled()) {
      return false;
    }

    const device = await adapter.requestDevice();
    if (isCancelled()) {
      device.destroy();
      return false;
    }

    const format = gpu.getPreferredCanvasFormat();
    const uniformBuffer = device.createBuffer({ size: 16, usage: 0x40 | 0x08 });

    const shader = device.createShaderModule({
      code: `
        struct Uniforms { time: f32, width: f32, height: f32, pad: f32 };
        @group(0) @binding(0) var<uniform> u: Uniforms;

        struct VSOut {
          @builtin(position) pos: vec4<f32>,
          @location(0) uv: vec2<f32>,
        };

        @vertex
        fn vs(@builtin(vertex_index) i: u32) -> VSOut {
          var p = array<vec2<f32>, 3>(
            vec2<f32>(-1.0, -1.0),
            vec2<f32>(3.0, -1.0),
            vec2<f32>(-1.0, 3.0)
          );
          var o: VSOut;
          o.pos = vec4<f32>(p[i], 0.0, 1.0);
          o.uv = p[i] * 0.5 + vec2<f32>(0.5);
          return o;
        }

        fn hash(p: vec2<f32>) -> f32 {
          let h = dot(p, vec2<f32>(127.1, 311.7));
          return fract(sin(h) * 43758.5453123);
        }

        fn noise(p: vec2<f32>) -> f32 {
          let i = floor(p);
          let f = fract(p);
          let a = hash(i);
          let b = hash(i + vec2<f32>(1.0, 0.0));
          let c = hash(i + vec2<f32>(0.0, 1.0));
          let d = hash(i + vec2<f32>(1.0, 1.0));
          let w = f * f * (3.0 - 2.0 * f);
          return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
        }

        fn fbm(p0: vec2<f32>) -> f32 {
          var p = p0;
          var v = 0.0;
          var a = 0.5;
          for (var i = 0; i < 5; i = i + 1) {
            v = v + a * noise(p);
            p = p * 2.02 + vec2<f32>(1.7, 9.2);
            a = a * 0.5;
          }
          return v;
        }

        @fragment
        fn fs(in: VSOut) -> @location(0) vec4<f32> {
          let aspect = u.width / max(u.height, 1.0);
          var uv = in.uv;
          uv.x = uv.x * aspect;
          let t = u.time * 0.00006;

          let q = vec2<f32>(
            fbm(uv * 1.5 + vec2<f32>(t, t * 0.6)),
            fbm(uv * 1.5 + vec2<f32>(-t * 0.8, t) + vec2<f32>(5.2, 1.3))
          );
          let n = fbm(uv * 1.8 + q * 1.4 + vec2<f32>(t * 0.4, -t * 0.3));

          let base = vec3<f32>(0.018, 0.024, 0.040);
          let indigo = vec3<f32>(0.10, 0.13, 0.34);
          let blue = vec3<f32>(0.10, 0.30, 0.55);
          let cyan = vec3<f32>(0.22, 0.56, 0.70);

          var col = base;
          col = mix(col, indigo, smoothstep(0.25, 0.78, n));
          col = mix(col, blue, smoothstep(0.55, 0.96, n) * 0.65);
          col = col + cyan * pow(smoothstep(0.72, 1.0, n), 3.0) * 0.45;

          let d = distance(in.uv, vec2<f32>(0.5, 0.42));
          col = col * (1.0 - smoothstep(0.35, 1.15, d) * 0.7);
          col = col * 0.92;

          return vec4<f32>(col, 1.0);
        }
      `,
    });

    const pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module: shader, entryPoint: "vs" },
      fragment: { module: shader, entryPoint: "fs", targets: [{ format }] },
      primitive: { topology: "triangle-list" },
    });

    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
    });

    let frame = 0;
    let lastFrame = 0;
    const startTime = performance.now();
    let visible = true;

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * scale));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * scale));
      context.configure({ device, format, alphaMode: "opaque" });
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
    });
    observer.observe(canvas);
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const drawOnce = (timestamp: number) => {
      device.queue.writeBuffer(
        uniformBuffer,
        0,
        new Float32Array([timestamp - startTime, canvas.width, canvas.height, 0]),
      );
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0.02, g: 0.025, b: 0.04, a: 1 },
            loadOp: "clear",
            storeOp: "store",
          },
        ],
      });
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.draw(3);
      pass.end();
      device.queue.submit([encoder.finish()]);
    };

    const stop = () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      device.destroy();
    };

    if (staticFrame) {
      drawOnce(startTime);
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", resize);
        device.destroy();
      };
    }

    const render = (time: number) => {
      if (isCancelled()) {
        stop();
        return;
      }
      frame = window.requestAnimationFrame(render);
      if (document.hidden || !visible || time - lastFrame < 1000 / 30) {
        return;
      }
      lastFrame = time;
      drawOnce(time);
    };

    frame = window.requestAnimationFrame(render);
    return stop;
  } catch {
    return false;
  }
}

function startCanvas(canvas: HTMLCanvasElement, staticFrame: boolean) {
  let context: CanvasRenderingContext2D | null = null;
  try {
    context = canvas.getContext("2d");
  } catch {
    return () => {};
  }
  if (!context) {
    return () => {};
  }

  let frame = 0;
  let lastFrame = 0;
  const startTime = performance.now();
  let visible = true;

  const resize = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.floor(window.innerWidth * scale));
    canvas.height = Math.max(1, Math.floor(window.innerHeight * scale));
    context.setTransform(scale, 0, 0, scale, 0, 0);
  };

  const observer =
    typeof IntersectionObserver === "function"
      ? new IntersectionObserver(([entry]) => {
          visible = Boolean(entry?.isIntersecting);
        })
      : undefined;

  observer?.observe(canvas);
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const blobs = [
    { hue: "rgba(40, 70, 150, 0.30)", x: 0.22, y: 0.18, r: 0.55, sx: 0.6, sy: 0.4 },
    { hue: "rgba(30, 110, 150, 0.22)", x: 0.78, y: 0.30, r: 0.5, sx: -0.5, sy: 0.7 },
    { hue: "rgba(60, 50, 140, 0.24)", x: 0.55, y: 0.78, r: 0.6, sx: 0.4, sy: -0.5 },
  ];

  const paint = (elapsed: number) => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    context.clearRect(0, 0, w, h);
    context.fillStyle = "#05060a";
    context.fillRect(0, 0, w, h);

    for (const blob of blobs) {
      const cx = (blob.x + Math.sin(elapsed * 0.05 * blob.sx) * 0.06) * w;
      const cy = (blob.y + Math.cos(elapsed * 0.05 * blob.sy) * 0.06) * h;
      const radius = blob.r * Math.max(w, h);
      const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, blob.hue);
      gradient.addColorStop(1, "rgba(5, 6, 10, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, w, h);
    }
  };

  if (staticFrame) {
    paint(0);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", resize);
    };
  }

  const draw = (time: number) => {
    frame = window.requestAnimationFrame(draw);
    if (document.hidden || !visible || time - lastFrame < 1000 / 30) {
      return;
    }
    lastFrame = time;
    paint((time - startTime) * 0.001);
  };

  frame = window.requestAnimationFrame(draw);

  return () => {
    window.cancelAnimationFrame(frame);
    observer?.disconnect();
    window.removeEventListener("resize", resize);
  };
}
