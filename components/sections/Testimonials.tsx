"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiMapPin, FiStar } from "react-icons/fi";
import { testimonials } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % testimonials.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);
  const item = testimonials[index];
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container testimonials-wrap">
        <SectionTitle
          subtitle="Testimonials"
          title={
            <>
              Words from the <em>PUREON journey.</em>
            </>
          }
          description="Customer-focused feedback around the product experience and PUREON's quality-first presentation."
        />
        <div className="testimonial-shell">
          <div className="testimonial-quote-mark">“</div>
          <AnimatePresence mode="wait">
            <motion.article
              key={item.name}
              className="testimonial-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60)
                  setIndex((index + 1) % testimonials.length);
                if (info.offset.x > 60)
                  setIndex(
                    (index - 1 + testimonials.length) % testimonials.length,
                  );
              }}
              transition={{ duration: 0.45 }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, star) => (
                  <FiStar key={star} fill="currentColor" />
                ))}
              </div>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-author">
                <span>{item.name.charAt(0)}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>
                    <FiMapPin /> {item.role}
                  </small>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((testimonial, dot) => (
                <button
                  key={testimonial.name}
                  className={dot === index ? "is-active" : ""}
                  onClick={() => setIndex(dot)}
                  aria-label={`Go to testimonial ${dot + 1}`}
                />
              ))}
            </div>
            <div>
              <button
                onClick={() =>
                  setIndex(
                    (index - 1 + testimonials.length) % testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={() => setIndex((index + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
