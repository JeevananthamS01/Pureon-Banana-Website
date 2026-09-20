"use client";

import { useEffect } from "react";
import { registerGSAP } from "@/lib/animations";
import { navItems } from "@/data/site";

export function ScrollSpy() {
  useEffect(() => {
    const { ScrollTrigger } = registerGSAP();
    const triggers = navItems.map((item) => {
      const section = document.getElementById(item.id);
      if (!section) return null;
      return ScrollTrigger.create({
        trigger: section,
        start: "top 42%",
        end: "bottom 42%",
        onToggle: (self) => {
          if (!self.isActive) return;
          document.querySelectorAll("[data-nav-link]").forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === item.href,
            );
          });
        },
      });
    });

    return () => triggers.forEach((trigger) => trigger?.kill());
  }, []);

  return null;
}
