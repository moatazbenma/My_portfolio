import { architecture, featuredProject, projects, type Project } from "@/lib/content";
import { DetailRows, Eyebrow, ProjectLinks, Screenshot, TagList } from "@/components/ui";

function ArchitectureGrid() {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-mono text-[11px] tracking-[.08em] text-dim">ARCHITECTURE</p>
      <ol aria-label="Mangrove Guardian AI architecture" className="grid grid-cols-2 gap-px sm:grid-cols-5 border border-fg/10 bg-fg/10">
        {architecture.map((layer) => (
          <li key={layer.name} className="flex flex-col gap-1 bg-surface p-3 last:col-span-2 sm:last:col-span-1">
            <span className={`text-[13px] font-medium ${layer.accent ? "text-accent" : ""}`}>{layer.name}</span>
            <span className="font-mono text-[11px] leading-[1.5] text-muted">
              {layer.lines[0]}
              <br />
              {layer.lines[1]}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FeaturedProject() {
  const p = featuredProject;
  return (
    <article data-reveal aria-labelledby={`${p.id}-title`} className="flex flex-col border border-fg/10 bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-fg/10 px-6 py-[18px] font-mono text-xs text-dim">
        <p>
          <span className="text-accent">FEATURED</span> · PROJECT 01
        </p>
        <p>{p.meta}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        <div className="flex min-w-0 flex-col gap-4 border-fg/6 p-6 md:border-r">
          <Screenshot shot={p.screenshot} className={p.screenshot.src ? "" : "aspect-[16/10]"} />
          <ArchitectureGrid />
        </div>
        <div className="flex min-w-0 flex-col gap-7 px-6 pt-7 pb-8 sm:px-7">
          <div className="flex flex-col gap-3">
            <h3 id={`${p.id}-title`} className="text-[clamp(28px,3vw,36px)] font-medium tracking-[-0.025em]">
              {p.title}
            </h3>
            <p className="text-[17px] leading-[1.55] text-pretty text-soft">{p.summary}</p>
          </div>
          <DetailRows rows={p.details} />
          <TagList tags={p.tags} label={`${p.title} technologies`} />
          <ProjectLinks links={p.links} project={p.title} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      data-reveal
      aria-labelledby={`${p.id}-title`}
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] border border-fg/10 bg-surface transition-colors duration-[250ms] hover:border-fg/24"
    >
      <div className="flex min-w-0 flex-col gap-6 p-6 sm:p-7">
        <p className="font-mono text-xs text-dim">{p.meta}</p>
        <div className="flex flex-col gap-3">
          <h3 id={`${p.id}-title`} className="text-[clamp(24px,2.6vw,30px)] font-medium tracking-[-0.02em]">
            {p.title}
          </h3>
          <p className="text-base leading-[1.6] text-pretty text-soft">{p.summary}</p>
        </div>
        <DetailRows rows={p.details} compact />
        <TagList tags={p.tags} label={`${p.title} technologies`} />
        <ProjectLinks links={p.links} project={p.title} />
      </div>
      <div className="flex items-center p-6">
        <Screenshot
          shot={p.screenshot}
          className={p.screenshot.src ? "w-full" : "min-h-[260px] flex-1 self-stretch"}
        />
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto flex max-w-[1248px] flex-col gap-14 px-6 pt-[120px] pb-10"
    >
      <div data-reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>01 — SELECTED WORK</Eyebrow>
          <h2 id="work-title" className="text-[clamp(32px,4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em]">
            Systems I&apos;ve built
          </h2>
        </div>
        <p className="max-w-[420px] text-base leading-[1.6] text-muted">
          Full-stack products with real backends — authentication, background jobs, caching, and AI that&apos;s
          constrained to structured output.
        </p>
      </div>
      <FeaturedProject />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
