import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Offer } from "@/components/sections/Offer";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductShowcase />
      <Offer />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
