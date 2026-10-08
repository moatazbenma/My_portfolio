import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto flex max-w-[1248px] flex-col gap-12 px-6 pt-[100px] pb-10"
    >
      <div data-reveal>
        <SectionHeading id="skills-title" eyebrow="04 — STACK" title="Frontend to infrastructure" />
      </div>
      <div
        data-reveal
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px border border-fg/10 bg-fg/10"
      >
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-3.5 bg-ink p-6">
            <h3
              className={`font-mono text-[11px] font-normal tracking-[.08em] ${group.accent ? "text-accent" : "text-dim"}`}
            >
              {group.label}
            </h3>
            <ul className="text-[15px] leading-[1.9] text-body">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
