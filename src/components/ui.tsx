import Image from "next/image";
import type { ReactNode } from "react";
import type { DetailRow, Project, ProjectLink } from "@/lib/content";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-xs tracking-[.08em] text-dim ${className}`}>{children}</p>;
}

export function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3.5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-[clamp(32px,4vw,48px)] leading-[1.05] font-medium tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  );
}

export function TagList({ tags, label }: { tags: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5 font-mono text-[11px] text-soft">
      {tags.map((tag) => (
        <li key={tag} className="border border-fg/14 px-2 py-[5px]">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function DetailRows({ rows, compact = false }: { rows: DetailRow[]; compact?: boolean }) {
  return (
    <dl className="flex flex-col border-t border-fg/10">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`grid grid-cols-[72px_1fr] gap-4 border-b border-fg/10 sm:grid-cols-[96px_1fr] ${compact ? "py-3" : "py-3.5"}`}
        >
          <dt className="pt-[3px] font-mono text-[11px] tracking-[.06em] text-dim">{row.label}</dt>
          <dd className={`text-[15px] leading-[1.55] ${row.placeholder ? "text-dim" : "text-body"}`}>{row.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ExternalArrow() {
  return (
    <span aria-hidden="true" className="font-mono">
      ↗
    </span>
  );
}

export function ProjectLinks({ links, project }: { links: ProjectLink[]; project: string }) {
  return (
    <div className="flex flex-wrap gap-5 text-[15px] font-medium">
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2"
          >
            {link.label}
            <span className="sr-only"> for {project} (opens in a new tab)</span>
            <ExternalArrow />
          </a>
        ) : (
          <span key={link.label} className="flex min-h-11 items-center font-normal text-dim">
            {link.placeholder ?? link.label}
          </span>
        ),
      )}
    </div>
  );
}

/** Shows the project screenshot when one is set, otherwise the design's striped placeholder. */
export function Screenshot({ shot, className = "" }: { shot: Project["screenshot"]; className?: string }) {
  if (shot.src) {
    return (
      <div className={`overflow-hidden border border-fg/8 ${className}`}>
        <Image
          src={shot.src}
          alt={shot.alt ?? shot.caption}
          placeholder="blur"
          quality={90}
          sizes="(min-width: 1000px) 560px, 100vw"
          className="block h-auto w-full"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Screenshot placeholder: ${shot.caption}`}
      className={`flex items-center justify-center border border-fg/8 bg-[repeating-linear-gradient(135deg,#1a1a19_0_10px,#171716_10px_20px)] p-5 ${className}`}
    >
      <span aria-hidden="true" className="text-center font-mono text-xs leading-[1.6] text-dim">
        [ product screenshot ]
        <br />
        {shot.caption}
      </span>
    </div>
  );
}
