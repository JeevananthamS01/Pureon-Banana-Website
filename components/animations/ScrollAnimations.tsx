"use client";

import { useLayoutEffect } from "react";
import { registerGSAP } from "@/lib/animations";
import { useReducedMotionPreference } from "@/hooks/useReducedMotion";

export function ScrollAnimations() {
  const reduced = useReducedMotionPreference();

  useLayoutEffect(() => {
    if (reduced) return;
    const { gsap, ScrollTrigger } = registerGSAP();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });
      const line = document.querySelector<SVGPathElement>(
        "[data-process-line]",
      );
      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#process",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        });
      }
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((element) => {
        const target = Number(element.dataset.counter ?? 0);
        const value = { count: 0 };
        gsap.to(value, {
          count: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
          onUpdate: () => {
            element.textContent = Math.round(value.count).toString();
          },
        });
      });
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, [reduced]);

  return null;
}
