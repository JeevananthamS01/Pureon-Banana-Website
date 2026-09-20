"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { site } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Please tell us how we can help."),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  });

  const submit = async (values: FormValues) => {
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message ?? "Unable to send your message.");
      toast.success("Thanks. Your message has been sent to PUREON.");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionTitle
            subtitle="Contact PUREON"
            title={
              <>
                Let’s talk about <em>quality ingredients.</em>
              </>
            }
            description="Reach PUREON for product enquiries, natural food ingredient conversations and dependable supply."
          />
          <div className="contact-details">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FiMapPin />
              </span>
              <div>
                <small>Visit</small>
                <strong>{site.address}</strong>
              </div>
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <span>
                <FiPhone />
              </span>
              <div>
                <small>Call</small>
                <strong>{site.phone}</strong>
                <strong>{site.phoneSecondary}</strong>
              </div>
            </a>
            <a href={`mailto:${site.email}`}>
              <span>
                <FiMail />
              </span>
              <div>
                <small>Email</small>
                <strong>{site.email}</strong>
              </div>
            </a>
            <div>
              <span>
                <FiClock />
              </span>
              <div>
                <small>Working hours</small>
                <strong>{site.hours}</strong>
              </div>
            </div>
          </div>
          <a
            className="whatsapp-link"
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <FiArrowUpRight />
          </a>
        </div>
        <div className="contact-form-card">
          <div className="contact-form-head">
            <span>ENQUIRE WITH PUREON</span>
            <p className="text-para">
              Tell us what you need and the PUREON team can get back to you.
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <input
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
              aria-hidden="true"
            />
            <div className="form-row">
              <label>
                Name
                <input
                  {...register("name")}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && <small>{errors.name.message}</small>}
              </label>
              <label>
                Email
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <small>{errors.email.message}</small>}
              </label>
            </div>
            <label>
              Phone
              <input
                {...register("phone")}
                placeholder="Phone number"
                autoComplete="tel"
              />
              {errors.phone && <small>{errors.phone.message}</small>}
            </label>
            <label>
              Message
              <textarea
                {...register("message")}
                placeholder="Tell us about your enquiry"
                rows={5}
              />
              {errors.message && <small>{errors.message.message}</small>}
            </label>
            <button
              className="button button--dark form-submit"
              disabled={sending}
              type="submit"
            >
              {sending ? "Sending…" : "Send enquiry"}
              <FiArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
