import { education } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto flex max-w-[1248px] flex-col gap-12 px-6 pt-[100px] pb-10"
    >
      <div data-reveal>
        <SectionHeading id="education-title" eyebrow="05 — EDUCATION" title="Education" />
      </div>
      <ul data-reveal className="flex flex-col border-t border-fg/14">
        {education.map((entry) => (
          <li
            key={entry.school}
            className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] items-baseline gap-x-10 gap-y-2 border-b border-fg/10 ${entry.primary ? "py-7" : "py-5"}`}
          >
            <p className="font-mono text-[13px] text-dim">{entry.period}</p>
            <div className="flex flex-col gap-1">
              <h3
                className={
                  entry.primary
                    ? "text-[22px] font-medium tracking-[-0.015em]"
                    : "text-base font-normal text-soft"
                }
              >
                {entry.school}
              </h3>
              <p className={entry.primary ? "text-[15px] text-soft" : "text-sm text-dim"}>{entry.degree}</p>
            </div>
            {entry.gpa ? (
              <p className="text-[15px]">
                <span className="mr-2.5 font-mono text-[11px] tracking-[.06em] text-dim">GPA</span>
                {entry.gpa}
              </p>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
