import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="min-h-screen outline-none">
        <Hero />
        <Work />
        <Experience />
        <Awards />
        <Skills />
        <Education />
      </main>
      <Contact />
      <RevealOnScroll />
    </>
  );
}
