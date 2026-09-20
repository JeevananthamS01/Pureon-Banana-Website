"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiSun, FiShield, FiZap } from "react-icons/fi";
import { features } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = { leaf: FiSun, shield: FiShield, spark: FiZap, globe: FiGlobe };

export function Offer() {
  return (
    <section id="offer" className="section offer-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            subtitle="What We Offer"
            title={
              <>
                Reliable ingredients with a <em>quality-first</em> focus.
              </>
            }
            description="PUREON serves local and international markets with consistent quality, dependable supply and customer satisfaction."
          />
        </Reveal>
        <div className="offer-grid">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <motion.article
                  className="offer-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="offer-card__icon">
                    <Icon />
                  </span>
                  <small>0{index + 1}</small>
                  <h3>{feature.title}</h3>
                  <p className="text-para">{feature.description}</p>
                  <span className="offer-card__line" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
