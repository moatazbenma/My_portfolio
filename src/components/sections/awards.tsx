import Image from "next/image";
import { awards, type Award } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

const tones: Record<Award["tone"], { text: string; border: string }> = {
  gold: { text: "text-gold", border: "border-gold" },
  bronze: { text: "text-bronze", border: "border-bronze" },
  accent: { text: "text-accent", border: "border-accent" },
};

function AwardCard({ award }: { award: Award }) {
  const tone = tones[award.tone];
  return (
    <li className="flex flex-col gap-7 border border-fg/10 bg-surface p-6 transition-colors duration-[250ms] hover:border-fg/24 sm:p-7">
      <div className="relative aspect-[3/2] overflow-hidden border border-fg/8">
        <Image
          src={award.photo.src}
          alt={award.photo.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1100px) 340px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: award.photo.position }}
        />
      </div>
      <div className="flex items-start justify-between gap-4" aria-hidden="true">
        <div className={`flex items-baseline gap-1 font-medium ${tone.text}`}>
          <span className="text-[88px] leading-[.85] tracking-[-0.05em]">{award.rank}</span>
          {award.suffix && <span className="text-[26px]">{award.suffix}</span>}
        </div>
        <span
          className={`flex size-11 items-center justify-center rounded-full border font-mono text-xs ${tone.border} ${tone.text}`}
        >
          {award.badge}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs text-dim">{award.event}</p>
        <h3 className="text-[22px] font-medium tracking-[-0.015em]">{award.title}</h3>
        <p className="text-[15px] leading-[1.6] text-soft">{award.text}</p>
      </div>
    </li>
  );
}

export function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-title"
      className="mx-auto flex max-w-[1248px] flex-col gap-12 px-6 pt-[100px] pb-10"
    >
      <div data-reveal>
        <SectionHeading id="awards-title" eyebrow="03 — AWARDS" title="Competed internationally, as team lead" />
      </div>
      <ul data-reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
        {awards.map((award) => (
          <AwardCard key={award.title} award={award} />
        ))}
      </ul>
    </section>
  );
}
