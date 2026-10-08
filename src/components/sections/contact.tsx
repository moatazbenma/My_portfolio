import { contact, links, site } from "@/lib/content";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow, ExternalArrow } from "@/components/ui";

const placeholderButton =
  "inline-flex h-[50px] items-center gap-2.5 border border-dashed border-fg/28 px-5 text-base text-dim";

export function Contact() {
  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-[1248px] flex-col gap-20 px-6 pt-[120px] pb-10"
    >
      <section data-reveal aria-labelledby="contact-title" className="flex flex-col gap-8">
        <Eyebrow>06 — CONTACT</Eyebrow>
        <h2
          id="contact-title"
          className="max-w-[960px] text-[clamp(34px,5.4vw,68px)] leading-[1.02] font-medium tracking-[-0.04em] text-balance"
        >
          {contact.heading}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {links.email ? (
            <ButtonLink href={`mailto:${links.email}`} variant="accent" size="lg" padding="px-[22px]" className="font-medium">
              {links.email}
              <ExternalArrow />
            </ButtonLink>
          ) : (
            <span className="inline-flex h-[50px] items-center gap-2.5 bg-accent px-[22px] text-base font-medium text-ink">
              [ your@email.com ]
              <ExternalArrow />
            </span>
          )}
          <ButtonLink href={links.github} size="lg" external>
            GitHub
          </ButtonLink>
          <ButtonLink href={links.linkedin} size="lg" external>
            LinkedIn
          </ButtonLink>
          {links.cv ? (
            <ButtonLink id="cv" href={links.cv} size="lg" download>
              Download CV (PDF)
            </ButtonLink>
          ) : (
            <span id="cv" className={placeholderButton}>
              Download CV (PDF) — [ add file ]
            </span>
          )}
        </div>
      </section>
      <div className="flex flex-wrap justify-between gap-3 border-t border-fg/10 pt-6 font-mono text-xs text-dim">
        <p>© 2026 {site.name}</p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
