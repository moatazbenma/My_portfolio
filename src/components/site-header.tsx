"use client";

import { useEffect, useState } from "react";
import { links, navItems, site } from "@/lib/content";

const cvHref = links.cv ?? "#cv";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 820 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/8 bg-ink/78 backdrop-blur-[10px]">
      <nav aria-label="Primary" className="mx-auto flex h-[60px] max-w-[1248px] items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-[13px] tracking-[.02em]">
          <span aria-hidden="true" className="block size-2 bg-accent" />
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted nav:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-muted hover:text-fg">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvHref}
              download={links.cv ? true : undefined}
              className="bg-fg px-3.5 py-2 font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-ink"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="h-11 cursor-pointer border border-fg/20 px-3.5 font-mono text-xs text-fg nav:hidden"
        >
          {open ? "CLOSE" : "MENU"}
          <span className="sr-only"> navigation</span>
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-fg/8 px-6 pt-2 pb-5 nav:hidden">
        <ul className="flex flex-col text-xl">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close} className="block border-b border-fg/8 py-3.5">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvHref}
              download={links.cv ? true : undefined}
              onClick={close}
              className="mt-4 block bg-fg px-4 py-3.5 text-center text-[15px] font-medium text-ink hover:bg-accent hover:text-ink"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
