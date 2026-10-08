"use client";

import { useEffect } from "react";

/**
 * Fades `[data-reveal]` blocks in as they enter the viewport. Content is
 * visible by default; it is only hidden once JS runs, never for reduced motion.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top >= window.innerHeight,
    );
    const show = (el: HTMLElement) => el.removeAttribute("data-reveal-hidden");
    els.forEach((el) => el.setAttribute("data-reveal-hidden", ""));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Hash navigation or focus can land on a block before it intersects.
    const onFocus = (e: FocusEvent) => {
      const block = (e.target as HTMLElement).closest<HTMLElement>("[data-reveal-hidden]");
      if (block) show(block);
    };
    document.addEventListener("focusin", onFocus);
    const fallback = window.setTimeout(() => els.forEach(show), 4000);

    return () => {
      io.disconnect();
      document.removeEventListener("focusin", onFocus);
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
