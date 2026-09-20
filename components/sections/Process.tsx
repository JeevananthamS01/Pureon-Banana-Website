"use client";

import {
  FiCheckCircle,
  FiDroplet,
  FiPackage,
  FiSun,
  FiWind,
  FiZap,
} from "react-icons/fi";
import { processSteps } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  sprout: FiWind,
  water: FiDroplet,
  sun: FiSun,
  grain: FiZap,
  check: FiCheckCircle,
  package: FiPackage,
};

export function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            subtitle="Our Process"
            title={
              <>
                From raw banana to <em>finished powder.</em>
              </>
            }
            description="A simple, quality-focused flow from sourcing through hygienic handling, drying, grinding, quality testing and packaging."
          />
        </Reveal>
        <div className="process-timeline">
          <svg
            className="process-line"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              data-process-line
              d="M40 80 C220 20 300 140 480 80 S740 20 900 80 S1080 140 1160 80"
            />
          </svg>
          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = icons[step.icon];
              return (
                <Reveal key={step.number} delay={index * 0.04}>
                  <article className="process-step" data-reveal>
                    <div className="process-step__number">{step.number}</div>
                    <div className="process-step__icon">
                      <Icon />
                    </div>
                    <h3>{step.title}</h3>
                    <p className="text-para">{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
