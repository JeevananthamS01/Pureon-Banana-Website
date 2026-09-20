"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiCheck, FiRotateCw } from "react-icons/fi";
import gsap from "gsap";
import { site } from "@/data/site";
import { registerGSAP } from "@/lib/animations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotionPreference } from "@/hooks/useReducedMotion";

type ProductFace = "front" | "back";

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const frontInfoRef = useRef<HTMLDivElement>(null);
  const backInfoRef = useRef<HTMLDivElement>(null);
  const [face, setFace] = useState<ProductFace>("front");
  const lastFace = useRef<ProductFace>("front");
  const reduced = useReducedMotionPreference();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current || !stageRef.current || !cubeRef.current)
      return;
    const { ScrollTrigger } = registerGSAP();
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: stageRef.current,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const rotation = self.progress * 180;
            gsap.set(cubeRef.current, { rotateY: rotation });
            if (frontInfoRef.current && backInfoRef.current) {
              gsap.set(frontInfoRef.current, {
                autoAlpha: 1 - Math.min(self.progress * 2, 1),
                y: self.progress * -16,
              });
              gsap.set(backInfoRef.current, {
                autoAlpha: Math.max((self.progress - 0.48) * 2, 0),
                y: (1 - self.progress) * 16,
              });
            }
            const nextFace: ProductFace =
              self.progress > 0.5 ? "back" : "front";
            if (nextFace !== lastFace.current) {
              lastFace.current = nextFace;
              setFace(nextFace);
            }
          },
        });
        return () => trigger.kill();
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, [reduced]);

  const rotateTo = (target: ProductFace) => {
    setFace(target);
    if (cubeRef.current)
      gsap.to(cubeRef.current, {
        rotateY: target === "back" ? 180 : 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
    if (frontInfoRef.current && backInfoRef.current) {
      gsap.to(frontInfoRef.current, {
        autoAlpha: target === "front" ? 1 : 0,
        duration: 0.4,
      });
      gsap.to(backInfoRef.current, {
        autoAlpha: target === "back" ? 1 : 0,
        duration: 0.4,
      });
    }
  };

  return (
    <section id="products" ref={sectionRef} className="section product-section">
      <div className="container product-heading">
        <Reveal>
          <SectionTitle
            subtitle="Our Product"
            title={
              <>
                Nendharam Banana <em>Health Mix.</em>
              </>
            }
            description="A 250 g PUREON pack made around banana powder, organic cereals, milk solids and natural vitamins & minerals."
          />
        </Reveal>
      </div>
      <div ref={stageRef} className="product-stage">
        <div className="container product-stage__grid">
          <div className="product-3d-column">
            <div className="product-particle product-particle--one" />
            <div className="product-particle product-particle--two" />
            <div className="product-shadow" />
            <div className="product-cube" ref={cubeRef}>
              <div className="product-face product-face--front">
                <Image
                  src={site.product.front}
                  alt="PUREON banana health mix front"
                  fill
                  sizes="(max-width: 1024px) 75vw, 420px"
                />
              </div>
              <div className="product-face product-face--back">
                <Image
                  src={site.product.back}
                  alt="PUREON banana health mix back"
                  fill
                  sizes="(max-width: 1024px) 75vw, 420px"
                />
              </div>
            </div>
            <div className="product-controls">
              <button
                type="button"
                className={face === "front" ? "is-active" : ""}
                onClick={() => rotateTo("front")}
              >
                <FiArrowLeft /> Front
              </button>
              <button
                type="button"
                className={face === "back" ? "is-active" : ""}
                onClick={() => rotateTo("back")}
              >
                Back <FiArrowRight />
              </button>
              <span>
                <FiRotateCw /> Drag-free 3D flip
              </span>
            </div>
          </div>
          <div className="product-details">
            <div
              ref={frontInfoRef}
              className="product-info-panel product-info-panel--front"
            >
              <span className="product-kicker">FRONT OF PACK</span>
              <h3>Nendharam Banana Health Mix</h3>
              <p className="text-para">
                Premium banana-led nutrition for all age people, with no
                preservatives, no colors and an easy-to-digest positioning shown
                on the pack.
              </p>
              <div className="product-specs">
                <div>
                  <small>NET WEIGHT</small>
                  <strong>{site.product.weight}</strong>
                </div>
                <div>
                  <small>MRP</small>
                  <strong>{site.product.mrp}</strong>
                </div>
              </div>
              <div className="feature-chips">
                {site.product.features.map((feature) => (
                  <span key={feature}>
                    <FiCheck /> {feature}
                  </span>
                ))}
              </div>
            </div>
            <div
              ref={backInfoRef}
              className="product-info-panel product-info-panel--back"
              aria-hidden={face !== "back"}
            >
              <span className="product-kicker">BACK OF PACK</span>
              <h3>Ingredients, usage & nutrition</h3>
              <div className="product-back-grid">
                <div>
                  <h4>Ingredients</h4>
                  {site.product.ingredients.map((item) => (
                    <p className="text-para" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
                <div>
                  <h4>How to prepare</h4>
                  {site.product.usage.map((item) => (
                    <p className="text-para" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <h4 className="nutrition-title">Nutrition facts per 100g</h4>
              <div className="nutrition-table">
                {site.product.nutrition.map(([name, value]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
