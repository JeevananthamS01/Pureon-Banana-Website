"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = email.trim();

    if (!value) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        autoComplete="email"
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Subscribe"}
      </button>
    </form>
  );
}