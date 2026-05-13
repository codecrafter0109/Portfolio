"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, LinkedInIcon, GithubIcon, ArrowRight } from "./Icons";

const EMAIL = "oisin3264@gmail.com";
const LINKEDIN = "https://uk.linkedin.com/in/oisin-o-aba110248/";
const GITHUB = "https://github.com/codecrafter0109";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "site visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="section-container py-16 md:py-24 border-t border-line"
    >
      <p className="eyebrow">Contact</p>
      <h2 className="heading">Let&apos;s talk.</h2>
      <p className="subheading mb-10">
        Drop a message — I usually reply within a day.
      </p>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="surface-card flex items-center gap-3 px-5 py-4"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-accent-dim text-accent">
              <MailIcon />
            </span>
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm text-white">{EMAIL}</p>
            </div>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="surface-card flex items-center gap-3 px-5 py-4"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-accent-dim text-accent">
              <LinkedInIcon />
            </span>
            <div>
              <p className="text-xs text-muted">LinkedIn</p>
              <p className="text-sm text-white">linkedin.com/in/oisin-o-aba110248</p>
            </div>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="surface-card flex items-center gap-3 px-5 py-4"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-accent-dim text-accent">
              <GithubIcon />
            </span>
            <div>
              <p className="text-xs text-muted">GitHub</p>
              <p className="text-sm text-white">github.com/codecrafter0109</p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="input-field"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="input-field min-h-[140px] resize-y"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary justify-center mt-1">
            Send message <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
}
