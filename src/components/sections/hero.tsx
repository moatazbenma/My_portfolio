import Image from "next/image";
import heroPhoto from "@/assets/hero-award.jpeg";
import { ButtonLink } from "@/components/button-link";
import { hero, links, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[min(100svh,920px)] flex-col justify-end overflow-hidden bg-ink"
    >
      <Image
        src={heroPhoto}
        alt={hero.photo.alt}
        fill
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        quality={90}
        className="object-cover object-[66%_30%] [filter:grayscale(.3)_contrast(1.04)_brightness(.92)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#0f0f0e_0%,rgba(15,15,14,.9)_32%,rgba(15,15,14,.35)_64%,rgba(15,15,14,.15)_100%),linear-gradient(0deg,#0f0f0e_0%,rgba(15,15,14,.75)_30%,rgba(15,15,14,0)_62%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pt-[120px]">
        <div data-reveal className="flex max-w-[640px] flex-col gap-6">
          <p className="flex items-center gap-2.5 font-mono text-xs tracking-[.06em] text-accent">
            <span aria-hidden="true" className="block size-[7px] rounded-full bg-accent" />
            {hero.status}
          </p>
          <h1
            id="hero-title"
            className="text-[clamp(44px,7vw,84px)] leading-[.98] font-medium tracking-[-0.04em] text-balance text-fg-strong"
          >
            {site.name}
          </h1>
          <div className="flex flex-col gap-3.5">
            <p className="text-[clamp(18px,2vw,22px)] font-medium tracking-[-0.01em]">
              {hero.role} <span className="text-faint">/</span> {hero.focus}
            </p>
            <p className="max-w-[540px] text-[17px] leading-[1.6] text-pretty text-soft">{hero.intro}</p>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <ButtonLink href="#work" variant="solid" padding="px-5" className="font-medium">
              View projects
              <span aria-hidden="true" className="font-mono">
                ↓
              </span>
            </ButtonLink>
            <ButtonLink href={links.github} external>
              GitHub
            </ButtonLink>
            <ButtonLink href={links.linkedin} external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={links.cv ?? "#cv"} download={Boolean(links.cv)}>
              Download CV
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-[72px] grid grid-cols-1 border-t border-fg/14 min-[500px]:grid-cols-2 lg:grid-cols-4">
          {hero.stats.map((stat) => (
            <li key={stat.label}>
              <a href={stat.href} className="flex flex-col gap-1.5 pt-5 pr-5 pb-7 hover:text-fg">
                <span className="font-mono text-[11px] tracking-[.08em] text-dim">{stat.label}</span>
                <span className="text-[15px] font-medium">{stat.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute top-[84px] right-6 bg-ink/55 px-2.5 py-1.5 font-mono text-[10px] whitespace-nowrap text-soft min-[400px]:text-[11px]">
        {hero.photo.caption}
      </p>
    </section>
  );
}
