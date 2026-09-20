"use client";

import Image from "next/image";
import { FiArrowUpRight, FiGlobe, FiShield } from "react-icons/fi";
import { site } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-card about-card--main">
            <Image
              src={site.product.front}
              alt="PUREON banana health mix pack"
              fill
              sizes="(max-width: 1024px) 80vw, 480px"
            />
          </div>
          <div className="about-card about-card--small">
            <Image
              src={site.product.back}
              alt="PUREON banana health mix back label"
              fill
              sizes="180px"
            />
          </div>
          <div className="about-stamp">
            <span>PUREON</span>
            <strong>2025</strong>
            <small>ESTABLISHED</small>
          </div>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <SectionTitle
              subtitle="About PUREON"
              title={
                <>
                  A natural ingredient company built around <em>quality.</em>
                </>
              }
              description={site.description}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-para about-copy__body">{site.about}</p>
          </Reveal>
          <div className="about-pillars">
            <Reveal delay={0.12}>
              <div>
                <span>
                  <FiShield />
                </span>
                <div>
                  <h3>Quality-focused</h3>
                  <p className="text-para">
                    Committed to quality, hygienic processing and reliable
                    natural food ingredients.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <span>
                  <FiGlobe />
                </span>
                <div>
                  <h3>Local & international</h3>
                  <p className="text-para">
                    Serving local and international markets with dependable
                    supply and customer satisfaction.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a className="text-link" href="#contact">
              Talk to PUREON <FiArrowUpRight />
            </a>
          </Reveal>
        </div>
      </div>
      <div className="container about-stats" aria-label="PUREON highlights">
        <div>
          <strong>2025</strong>
          <span>Established</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Fruit-led product</span>
        </div>
        <div>
          <strong>250g</strong>
          <span>Health mix pack</span>
        </div>
        <div>
          <strong>2</strong>
          <span>Market focus: local & international</span>
        </div>
      </div>
    </section>
  );
}
