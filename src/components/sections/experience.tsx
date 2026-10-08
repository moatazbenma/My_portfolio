import { experience, type Job } from "@/lib/content";
import { SectionHeading, TagList } from "@/components/ui";

function JobEntry({ job, index }: { job: Job; index: number }) {
  const titleId = `job-${index}-company`;
  return (
    <article
      data-reveal
      aria-labelledby={titleId}
      className="flex flex-wrap gap-x-16 gap-y-6 border-t border-fg/14 pt-8"
    >
      <div className="flex flex-[1_1_240px] flex-col gap-2">
        <p className="font-mono text-xs text-dim">{job.period}</p>
        <h3 id={titleId} className="text-2xl font-medium tracking-[-0.02em]">
          {job.company}
        </h3>
        <p className="text-[15px] text-accent">{job.role}</p>
        <p className="font-mono text-xs text-dim">{job.location}</p>
      </div>
      <div className="flex max-w-[680px] min-w-0 flex-[2_1_400px] flex-col gap-6">
        <p className="text-[17px] leading-[1.6] text-pretty text-body">{job.summary}</p>
        <ul className="flex flex-col">
          {job.points.map((point) => (
            <li
              key={point}
              className="grid grid-cols-[24px_1fr] border-b border-fg/8 py-3 text-[15px] leading-[1.55] text-soft"
            >
              <span aria-hidden="true" className="font-mono text-dim">
                →
              </span>
              {point}
            </li>
          ))}
        </ul>
        <TagList tags={job.tags} label={`Technologies used at ${job.company}`} />
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto flex max-w-[1248px] flex-col gap-12 px-6 pt-[100px] pb-10"
    >
      <div data-reveal>
        <SectionHeading id="experience-title" eyebrow="02 — EXPERIENCE" title="Professional experience" />
      </div>
      <div className="flex flex-col gap-14">
        {experience.map((job, i) => (
          <JobEntry key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
