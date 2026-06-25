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
        <section className="tile-console" data-testid="tile-console" aria-labelledby="hero-title">
          <article className="tile tile-identity tile-span-5" data-testid="entity-tile">
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
          </article>

          <article className="tile tile-shader tile-span-4" data-testid="entity-tile">
            <ShaderField />
          </article>

          <article className="tile tile-signal tile-span-3" data-testid="entity-tile">
            <p className="tile-label">Entity optimization</p>
            <h2>Source of truth</h2>
            <p>
              Built to make Aidan Marshall machine-readable as one person across search,
              GitHub, LinkedIn, and future aidanmarshall.ai pages.
            </p>
            <dl className="signal-list">
              <div>
                <dt>Domain</dt>
                <dd>{profile.domain}</dd>
              </div>
              <div>
                <dt>Schema</dt>
                <dd>ProfilePage + Person JSON-LD</dd>
              </div>
              <div>
                <dt>sameAs</dt>
                <dd>LinkedIn + GitHub</dd>
              </div>
              <div>
                <dt>Proof</dt>
                <dd>Work, projects, writing, credentials</dd>
              </div>
            </dl>
          </article>

          {focusAreas.map((area) => (
            <article className="tile tile-focus" key={area.label} data-testid="entity-tile">
              <p className="tile-label">{area.label}</p>
              <p>{area.description}</p>
            </article>
          ))}

          <article className="tile tile-performance tile-span-3" data-testid="entity-tile">
            <p className="tile-label">Animation budget</p>
            <h2>30 FPS cap</h2>
            <p>WebGPU runs only when available, visible, and motion is allowed. Canvas fallback keeps reduced motion and older browsers readable.</p>
          </article>
        </section>

        <Section id="work" title="Work">
          <div className="timeline tile-grid">
            {roles.map((role) => (
              <article className="tile timeline-card" data-testid="entity-tile" key={`${role.organization}-${role.title}`}>
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
              <article className="tile project-card" data-testid="entity-tile" key={project.name}>
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
          <div className="tile writing-panel" data-testid="entity-tile">
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
              <article className="tile" data-testid="entity-tile" key={proof}>{proof}</article>
            ))}
          </div>
        </Section>

        <Section
          id="launch"
          title="Domain launch checklist"
          intro="The local site is built so the public deployment can become the source-of-truth page for Google Search, structured data, and AI crawlers."
        >
          <ol className="tile launch-list" data-testid="entity-tile">
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

function ShaderField() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canvas || prefersReducedMotion) {
      return;
    }

    if (navigator.userAgent.toLowerCase().includes("jsdom")) {
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    const start = async () => {
      const webGpuCleanup = await startWebGpuShader(canvas, () => cancelled);
      if (typeof webGpuCleanup === "function") {
        if (cancelled) {
          webGpuCleanup();
        } else {
          cleanup = webGpuCleanup;
        }
        return;
      }

      if (!cancelled) {
        cleanup = startCanvasFallback(canvas);
      }
    };

    void start();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div className="shader-shell">
      <canvas
        ref={canvasRef}
        aria-label="Performance-conscious WebGPU shader field"
        data-renderer="webgpu-preferred"
      />
      <div className="shader-overlay">
        <p className="tile-label">Live renderer</p>
        <h2>WebGPU identity field</h2>
        <p>
          Low-amplitude mesh animation, 30 FPS cap, visibility pause, and reduced motion fallback.
        </p>
      </div>
    </div>
  );
}

async function startWebGpuShader(
  canvas: HTMLCanvasElement,
  isCancelled: () => boolean,
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
    const uniformBuffer = device.createBuffer({
      size: 16,
      usage: 0x40 | 0x08,
    });
    const shader = device.createShaderModule({
      code: `
        struct Uniforms {
          time: f32,
          width: f32,
          height: f32,
          pad: f32,
        };

        @group(0) @binding(0) var<uniform> uniforms: Uniforms;

        struct VertexOut {
          @builtin(position) position: vec4<f32>,
          @location(0) uv: vec2<f32>,
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) index: u32) -> VertexOut {
          var positions = array<vec2<f32>, 3>(
            vec2<f32>(-1.0, -1.0),
            vec2<f32>(3.0, -1.0),
            vec2<f32>(-1.0, 3.0)
          );
          var out: VertexOut;
          out.position = vec4<f32>(positions[index], 0.0, 1.0);
          out.uv = positions[index] * 0.5 + vec2<f32>(0.5);
          return out;
        }

        fn lineGrid(value: f32, scale: f32) -> f32 {
          let grid = abs(fract(value * scale) - 0.5);
          return 1.0 - smoothstep(0.0, 0.035, grid);
        }

        @fragment
        fn fragmentMain(input: VertexOut) -> @location(0) vec4<f32> {
          let uv = input.uv;
          let t = uniforms.time * 0.001;
          let waveA = sin((uv.x * 8.0) + t * 0.9) * 0.5 + 0.5;
          let waveB = cos((uv.y * 10.0) - t * 0.7) * 0.5 + 0.5;
          let diagonal = sin((uv.x + uv.y) * 13.0 + t) * 0.5 + 0.5;
          let grid = max(lineGrid(uv.x + t * 0.015, 12.0), lineGrid(uv.y - t * 0.01, 9.0)) * 0.18;
          let pulse = smoothstep(0.42, 1.0, waveA * waveB * diagonal);
          let base = vec3<f32>(0.015, 0.021, 0.032);
          let cyan = vec3<f32>(0.05, 0.78, 0.92);
          let green = vec3<f32>(0.34, 1.0, 0.68);
          let violet = vec3<f32>(0.46, 0.28, 1.0);
          let color = base + cyan * grid + green * pulse * 0.2 + violet * diagonal * 0.08;
          return vec4<f32>(color, 1.0);
        }
      `,
    });
    const pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module: shader, entryPoint: "vertexMain" },
      fragment: {
        module: shader,
        entryPoint: "fragmentMain",
        targets: [{ format }],
      },
      primitive: { topology: "triangle-list" },
    });
    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
    });

    let frame = 0;
    let lastFrame = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(rect.width * scale));
      canvas.height = Math.max(1, Math.floor(rect.height * scale));
      context.configure({ device, format, alphaMode: "premultiplied" });
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
    });
    observer.observe(canvas);
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const render = (time: number) => {
      if (isCancelled()) {
        observer.disconnect();
        window.removeEventListener("resize", resize);
        return;
      }

      frame = window.requestAnimationFrame(render);

      if (document.hidden || !visible || time - lastFrame < 1000 / 30) {
        return;
      }

      lastFrame = time;
      device.queue.writeBuffer(
        uniformBuffer,
        0,
        new Float32Array([time, canvas.width, canvas.height, 0]),
      );

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0.01, g: 0.014, b: 0.02, a: 1 },
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

    frame = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      device.destroy();
    };
  } catch {
    return false;
  }
}

function startCanvasFallback(canvas: HTMLCanvasElement) {
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
  let visible = true;
  const points = Array.from({ length: 42 }, (_, index) => ({
    x: (index * 73) % 100,
    y: (index * 41) % 100,
  }));

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
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

  const draw = (time: number) => {
    frame = window.requestAnimationFrame(draw);

    if (document.hidden || !visible || time - lastFrame < 1000 / 24) {
      return;
    }

    lastFrame = time;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#050810";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "rgba(54, 223, 232, 0.18)";
    context.lineWidth = 1;

    for (let x = 0; x < width; x += 32) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }

    for (let y = 0; y < height; y += 32) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    points.forEach((point, index) => {
      const x = (point.x / 100) * width;
      const y = (point.y / 100) * height;
      const radius = 1.5 + Math.sin(time * 0.001 + index) * 0.8;
      context.fillStyle = index % 3 === 0 ? "#6affb4" : "#36dfe8";
      context.beginPath();
      context.arc(x, y, Math.max(0.6, radius), 0, Math.PI * 2);
      context.fill();
    });
  };

  frame = window.requestAnimationFrame(draw);

  return () => {
    window.cancelAnimationFrame(frame);
    observer?.disconnect();
    window.removeEventListener("resize", resize);
  };
}
