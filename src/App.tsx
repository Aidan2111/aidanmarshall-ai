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
  const [rendererMode, setRendererMode] = React.useState<
    "booting" | "webgpu" | "canvas" | "reduced"
  >("booting");

  React.useEffect(() => {
    const canvas = canvasRef.current;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canvas) {
      return;
    }

    if (prefersReducedMotion) {
      setRendererMode("reduced");
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
          setRendererMode("webgpu");
          cleanup = webGpuCleanup;
        }
        return;
      }

      if (!cancelled) {
        setRendererMode("canvas");
        cleanup = startCanvasFallback(canvas);
      }
    };

    void start();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  const rendererLabel = {
    booting: "Booting GPU graph",
    webgpu: "WebGPU active",
    canvas: "Canvas fallback active",
    reduced: "Motion reduced",
  }[rendererMode];

  return (
    <div className="shader-shell">
      <canvas
        ref={canvasRef}
        aria-label="Performance-conscious WebGPU shader field"
        data-renderer={
          rendererMode === "webgpu"
            ? "webgpu-active"
            : rendererMode === "canvas"
              ? "canvas-fallback"
              : "webgpu-preferred"
        }
        data-renderer-state={rendererMode}
      />
      <div className="shader-node-labels" aria-hidden="true">
        <span className="node-label node-label-site">site</span>
        <span className="node-label node-label-github">GitHub</span>
        <span className="node-label node-label-linkedin">LinkedIn</span>
        <span className="node-label node-label-work">PwC</span>
        <span className="node-label node-label-writing">writing</span>
      </div>
      <div className="shader-overlay">
        <p className="renderer-status" aria-live="polite">
          <span aria-hidden="true" />
          {rendererLabel}
        </p>
        <p className="tile-label">Live renderer</p>
        <h2>Entity graph online</h2>
        <p>
          Page-load renderer connects the canonical site, GitHub, LinkedIn, work,
          writing, and credentials as an animated entity graph.
        </p>
        <div className="shader-readout" aria-label="Renderer performance budget">
          <span>30 FPS cap</span>
          <span>visibility pause</span>
          <span>low-power adapter</span>
        </div>
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

        fn aspectUv(uv: vec2<f32>) -> vec2<f32> {
          let aspect = uniforms.width / max(uniforms.height, 1.0);
          return vec2<f32>((uv.x - 0.5) * aspect + 0.5, uv.y);
        }

        fn lineGrid(value: f32, scale: f32) -> f32 {
          let grid = abs(fract(value * scale) - 0.5);
          return 1.0 - smoothstep(0.0, 0.035, grid);
        }

        fn nodePosition(index: i32, t: f32) -> vec2<f32> {
          let drift = vec2<f32>(
            sin(t * 0.72 + f32(index) * 1.7),
            cos(t * 0.54 + f32(index) * 1.1)
          ) * 0.012;

          if (index == 0) {
            return vec2<f32>(0.50, 0.50) + drift;
          }
          if (index == 1) {
            return vec2<f32>(0.25, 0.24) + drift;
          }
          if (index == 2) {
            return vec2<f32>(0.76, 0.26) + drift;
          }
          if (index == 3) {
            return vec2<f32>(0.24, 0.76) + drift;
          }
          if (index == 4) {
            return vec2<f32>(0.78, 0.76) + drift;
          }
          return vec2<f32>(0.50, 0.86) + drift;
        }

        fn segmentDistance(p: vec2<f32>, a: vec2<f32>, b: vec2<f32>) -> f32 {
          let pa = p - a;
          let ba = b - a;
          let h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
          return length(pa - ba * h);
        }

        fn linkField(
          p: vec2<f32>,
          a: vec2<f32>,
          b: vec2<f32>,
          reveal: f32,
          t: f32,
          offset: f32
        ) -> vec2<f32> {
          let distance = segmentDistance(p, a, b);
          let line = (1.0 - smoothstep(0.006, 0.02, distance)) * reveal;
          let packetPosition = mix(a, b, fract(t * 0.22 + offset));
          let packet = (1.0 - smoothstep(0.0, 0.055, length(p - packetPosition))) * reveal;
          return vec2<f32>(line, packet);
        }

        fn nodeField(
          p: vec2<f32>,
          center: vec2<f32>,
          reveal: f32,
          t: f32,
          offset: f32
        ) -> vec2<f32> {
          let distance = length(p - center);
          let pulse = sin(t * 3.2 + offset) * 0.5 + 0.5;
          let core = (1.0 - smoothstep(0.0, 0.024 + pulse * 0.008, distance)) * reveal;
          let halo = (1.0 - smoothstep(0.035, 0.17, distance)) * reveal;
          let ringRadius = 0.052 + pulse * 0.018;
          let ring = (1.0 - smoothstep(0.002, 0.018, abs(distance - ringRadius))) * reveal;
          return vec2<f32>(core + ring * 0.75, halo);
        }

        @fragment
        fn fragmentMain(input: VertexOut) -> @location(0) vec4<f32> {
          let uv = input.uv;
          let p = aspectUv(uv);
          let t = uniforms.time * 0.001;
          let boot = smoothstep(0.0, 1.25, t);
          let grid = max(
            lineGrid(p.x + t * 0.014, 10.0),
            lineGrid(p.y - t * 0.012, 8.0)
          ) * 0.1;
          let scan = (1.0 - smoothstep(0.0, 0.018, abs(fract(uv.y * 1.35 - t * 0.26) - 0.5))) * 0.25;

          let base = vec3<f32>(0.015, 0.021, 0.032);
          let cyan = vec3<f32>(0.05, 0.78, 0.92);
          let green = vec3<f32>(0.34, 1.0, 0.68);
          let violet = vec3<f32>(0.46, 0.28, 1.0);
          var color = base + cyan * grid + green * scan * 0.22;

          let n0 = nodePosition(0, t);
          let n1 = nodePosition(1, t);
          let n2 = nodePosition(2, t);
          let n3 = nodePosition(3, t);
          let n4 = nodePosition(4, t);
          let n5 = nodePosition(5, t);

          let r0 = smoothstep(0.00, 0.18, boot);
          let r1 = smoothstep(0.16, 0.34, boot);
          let r2 = smoothstep(0.30, 0.48, boot);
          let r3 = smoothstep(0.44, 0.62, boot);
          let r4 = smoothstep(0.58, 0.76, boot);
          let r5 = smoothstep(0.72, 0.90, boot);

          let l1 = linkField(p, n0, n1, r1, t, 0.08);
          let l2 = linkField(p, n0, n2, r2, t, 0.22);
          let l3 = linkField(p, n0, n3, r3, t, 0.39);
          let l4 = linkField(p, n0, n4, r4, t, 0.57);
          let l5 = linkField(p, n0, n5, r5, t, 0.72);
          let linkEnergy = l1.x + l2.x + l3.x + l4.x + l5.x;
          let packetEnergy = l1.y + l2.y + l3.y + l4.y + l5.y;
          color += cyan * linkEnergy * 0.58;
          color += green * packetEnergy * 0.42;

          let f0 = nodeField(p, n0, r0, t, 0.0);
          let f1 = nodeField(p, n1, r1, t, 1.0);
          let f2 = nodeField(p, n2, r2, t, 2.0);
          let f3 = nodeField(p, n3, r3, t, 3.0);
          let f4 = nodeField(p, n4, r4, t, 4.0);
          let f5 = nodeField(p, n5, r5, t, 5.0);
          let coreEnergy = f0.x + f1.x + f2.x + f3.x + f4.x + f5.x;
          let haloEnergy = f0.y + f1.y + f2.y + f3.y + f4.y + f5.y;
          color += green * coreEnergy * 0.7;
          color += violet * haloEnergy * 0.22;

          let barRange = step(0.08, uv.x) * (1.0 - step(0.92, uv.x));
          let barProgress = 1.0 - step(0.08 + boot * 0.84, uv.x);
          let barLine = (1.0 - smoothstep(0.0, 0.006, abs(uv.y - 0.93))) * barRange;
          color += cyan * barLine * 0.16;
          color += green * barLine * barProgress * 0.58;

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
    const startTime = performance.now();
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
        new Float32Array([time - startTime, canvas.width, canvas.height, 0]),
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
  const startTime = performance.now();
  let visible = true;
  const nodes = [
    { x: 0.5, y: 0.5 },
    { x: 0.25, y: 0.24 },
    { x: 0.76, y: 0.26 },
    { x: 0.24, y: 0.76 },
    { x: 0.78, y: 0.76 },
    { x: 0.5, y: 0.86 },
  ];
  const links = [1, 2, 3, 4, 5];

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
    const elapsed = (time - startTime) * 0.001;
    const boot = Math.min(1, Math.max(0, elapsed / 1.25));
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

    const scanline = (height * ((elapsed * 0.18) % 1));
    const scanGradient = context.createLinearGradient(0, scanline - 30, 0, scanline + 30);
    scanGradient.addColorStop(0, "rgba(54, 223, 232, 0)");
    scanGradient.addColorStop(0.5, "rgba(54, 223, 232, 0.22)");
    scanGradient.addColorStop(1, "rgba(54, 223, 232, 0)");
    context.fillStyle = scanGradient;
    context.fillRect(0, scanline - 30, width, 60);

    const resolvedNode = (index: number) => {
      const node = nodes[index];
      const driftX = Math.sin(elapsed * 0.72 + index * 1.7) * 5;
      const driftY = Math.cos(elapsed * 0.54 + index * 1.1) * 5;
      return {
        x: node.x * width + driftX,
        y: node.y * height + driftY,
      };
    };

    const center = resolvedNode(0);

    links.forEach((index, linkIndex) => {
      const reveal = Math.min(1, Math.max(0, (boot - linkIndex * 0.14) / 0.22));
      if (reveal <= 0) {
        return;
      }

      const node = resolvedNode(index);
      context.globalAlpha = 0.24 + reveal * 0.54;
      context.strokeStyle = "#36dfe8";
      context.lineWidth = 1.4;
      context.beginPath();
      context.moveTo(center.x, center.y);
      context.lineTo(node.x, node.y);
      context.stroke();

      const phase = (elapsed * 0.22 + linkIndex * 0.16) % 1;
      const packetX = center.x + (node.x - center.x) * phase;
      const packetY = center.y + (node.y - center.y) * phase;
      context.globalAlpha = reveal;
      context.fillStyle = "#6affb4";
      context.beginPath();
      context.arc(packetX, packetY, 4.4, 0, Math.PI * 2);
      context.fill();
    });

    nodes.forEach((_, index) => {
      const reveal = Math.min(1, Math.max(0, (boot - index * 0.12) / 0.2));
      if (reveal <= 0) {
        return;
      }

      const node = resolvedNode(index);
      const pulse = Math.sin(elapsed * 3.2 + index) * 0.5 + 0.5;
      context.globalAlpha = reveal * 0.18;
      context.fillStyle = index === 0 ? "#6affb4" : "#8b6dff";
      context.beginPath();
      context.arc(node.x, node.y, 34 + pulse * 8, 0, Math.PI * 2);
      context.fill();

      context.globalAlpha = reveal * 0.95;
      context.strokeStyle = index === 0 ? "#6affb4" : "#36dfe8";
      context.lineWidth = 1.2;
      context.beginPath();
      context.arc(node.x, node.y, 16 + pulse * 6, 0, Math.PI * 2);
      context.stroke();

      context.globalAlpha = reveal;
      context.fillStyle = index === 0 ? "#6affb4" : "#36dfe8";
      context.beginPath();
      context.arc(node.x, node.y, 4.8 + pulse * 2, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    context.strokeStyle = "rgba(54, 223, 232, 0.18)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(width * 0.08, height * 0.93);
    context.lineTo(width * 0.92, height * 0.93);
    context.stroke();
    context.strokeStyle = "#6affb4";
    context.beginPath();
    context.moveTo(width * 0.08, height * 0.93);
    context.lineTo(width * (0.08 + boot * 0.84), height * 0.93);
    context.stroke();
  };

  frame = window.requestAnimationFrame(draw);

  return () => {
    window.cancelAnimationFrame(frame);
    observer?.disconnect();
    window.removeEventListener("resize", resize);
  };
}
