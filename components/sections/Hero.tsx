"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { site } from "@/data/site";
import { useReducedMotionPreference } from "@/hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotionPreference();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 18 });
  const sy = useSpring(y, { stiffness: 90, damping: 18 });

  const move = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) / 25);
    y.set((event.clientY - rect.top - rect.height / 2) / 25);
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />
      <div className="hero__grain" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            <span /> PUREON · NATURAL FOOD INGREDIENTS
          </motion.div>
          <motion.p
            className="text-subtitle hero__subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Nendharam Banana Health Mix
          </motion.p>
          <motion.h1
            className="text-title hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.16,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            From Nature
            <br />
            <em>to Quality.</em>
          </motion.h1>
          <motion.p
            className="text-para hero__description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
          >
            {site.description}
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Link className="button button--dark" href="#products">
              Explore product <FiArrowUpRight />
            </Link>
            <Link className="button button--ghost" href="#about">
              Discover PUREON <FiArrowDown />
            </Link>
          </motion.div>
          <motion.div
            className="trust-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {site.product.features.slice(0, 3).map((item) => (
              <span key={item}>
                <FiCheck /> {item}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="hero__visual"
          style={reduced ? undefined : { x: sx, y: sy }}
          initial={{ opacity: 0, scale: 0.88, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__halo" />
          <div className="hero__float hero__float--top">
            100%<small>FRUIT</small>
          </div>
          <div className="hero__product-wrap">
            <Image
              src={site.product.front}
              alt="PUREON Nendharam Banana Health Mix front pack"
              fill
              sizes="(max-width: 1024px) 75vw, 520px"
              priority
              className="hero__product"
            />
          </div>
          <div className="hero__float hero__float--bottom">
            <strong>{site.product.weight}</strong>
            <small>PUREON BANANA HEALTH MIX</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
