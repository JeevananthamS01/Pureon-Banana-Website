"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="container site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} data-nav-link>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="#contact">
          Talk to PUREON <FiArrowUpRight aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link href={item.href} onClick={close}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              className="button button--dark mobile-drawer__cta"
              href="#contact"
              onClick={close}
            >
              Talk to PUREON <FiArrowUpRight />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
