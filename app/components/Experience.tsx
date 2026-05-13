"use client";

import { useState } from "react";
import { ChevronDown } from "./Icons";

const INITIAL_VISIBLE = 3;

type Role = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  tech: string[];
};

const experiences: Role[] = [
  {
    role: "Lead Full Stack Engineer",
    company: "Zalez AI",
    period: "Mar 2025 — Present",
    current: true,
    summary:
      "Lead engineer for AI-powered SaaS — owning product architecture, frontend engineering, backend services, deployment infra and technical strategy.",
    achievements: [
      "Designed scalable frontend and backend architecture for AI-powered SaaS platforms.",
      "Built modern responsive UIs with React.js and Next.js, plus real-time Node.js services.",
      "Implemented cloud-native infrastructure and CI/CD automation pipelines.",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "GCP"],
  },
  {
    role: "Solutions Consultant",
    company: "Allforce",
    period: "Aug 2024 — Present",
    current: true,
    summary:
      "Solutions consultant for scalable frontend systems, cloud-native applications and modern web architectures.",
    achievements: [
      "Designed scalable technical solutions for modern web platforms.",
      "Implemented cloud-based services and frontend integrations.",
      "Contributed to architecture planning and technical strategy discussions.",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "GCP", "Cloud Functions"],
  },
  {
    role: "IT Consultant",
    company: "Pathfinder Sailing",
    period: "Jul 2024 — Present",
    current: true,
    summary:
      "High-performance real-time race tracking and interactive visualization on Next.js, Node.js and GCP.",
    achievements: [
      "Designed scalable real-time race tracking platform on Next.js and Node.js.",
      "Implemented Redis caching for scalable cloud function state management.",
      "Reduced latency and improved backend aggregation under load.",
    ],
    tech: ["Next.js", "React", "Node.js", "Redis", "React Query", "GCP"],
  },
  {
    role: "IT Contractor",
    company: "Gorilla Sheet",
    period: "Mar 2024 — Present",
    current: true,
    summary:
      "Scalable browser-extension apps and cloud-native backends for Google Sheets productivity and real-time database integrations.",
    achievements: [
      "Built scalable Chrome extension solutions for Google Sheets workflows.",
      "Integrated Supabase authentication and real-time database operations.",
      "Implemented serverless cloud infrastructure on Google Cloud Platform.",
    ],
    tech: [
      "React",
      "Node.js",
      "Supabase",
      "Firestore",
      "Chrome Extensions",
      "GCP",
    ],
  },
  {
    role: "IT Consultant",
    company: "VeriFi Labs",
    period: "Aug 2023 — Jun 2024",
    summary:
      "Full Stack Engineer focused on scalable backend systems, serverless apps and CI/CD automation on Google Cloud.",
    achievements: [
      "Developed CI/CD automation infrastructure using GitHub Actions.",
      "Built scalable backend attachment and file-processing systems.",
      "Implemented asynchronous event-driven cloud workflows with Cloud Functions and Pub/Sub.",
    ],
    tech: ["Node.js", "React", "TypeScript", "GCP", "Firestore", "GitHub Actions"],
  },
  {
    role: "Full Stack Engineer",
    company: "TELUS",
    period: "Jan 2022 — Dec 2023",
    summary:
      "Scalable frontend applications, backend APIs and enterprise cloud solutions with React, Node.js and TypeScript.",
    achievements: [
      "Developed scalable React.js frontend applications using TypeScript.",
      "Implemented React Query for optimized client-side state management.",
      "Integrated Sentry monitoring and production error tracking.",
    ],
    tech: ["React", "Node.js", "TypeScript", "React Query", "REST APIs", "Sentry"],
  },
  {
    role: "CTO / Lead Full Stack Engineer",
    company: "Sucasa",
    period: "Nov 2021 — Mar 2023",
    summary:
      "Led engineering for cross-platform mobile applications and cloud-native backends on React Native, Node.js and GCP.",
    achievements: [
      "Led application architecture, engineering strategy and team planning.",
      "Developed scalable React Native applications for iOS and Android.",
      "Implemented scalable cloud infrastructure using GCP services.",
    ],
    tech: [
      "React Native",
      "React",
      "Node.js",
      "TypeScript",
      "GCP",
      "Cloud Functions",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "DPD UK",
    period: "Dec 2019 — Dec 2022",
    summary:
      "Scalable logistics and analytics platforms with React, Node.js and Google Cloud for high-volume enterprise operations.",
    achievements: [
      "Built backend APIs and cloud-native services using Node.js.",
      "Created operational analytics tools using BigQuery and Cloud SQL.",
      "Implemented scalable event-driven backend systems and Sentry observability.",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "GCP",
      "BigQuery",
      "Cloud Functions",
    ],
  },
  {
    role: "Software Developer",
    company: "Pictet Technologies SA",
    period: "Dec 2016 — Dec 2019",
    summary:
      "Enterprise applications, workflow automation, backend integrations and frontend customization in regulated financial systems.",
    achievements: [
      "Customized enterprise applications using JavaScript and Java.",
      "Developed REST services for workflow integrations.",
      "Performed peer code reviews and architectural improvements.",
    ],
    tech: [
      "JavaScript",
      "Java",
      "REST APIs",
      "Enterprise Apps",
      "Git",
      "OOP",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, INITIAL_VISIBLE);
  const hiddenCount = experiences.length - INITIAL_VISIBLE;

  const handleToggle = () => {
    if (expanded) {
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section
      id="experience"
      className="section-container py-16 md:py-24 border-t border-line"
    >
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          <p className="eyebrow">Experience</p>
          <h2 className="heading mb-4">Where I&apos;ve worked.</h2>
          <p className="subheading">
            10+ years across SaaS, enterprise, logistics, fintech and AI —
            currently leading engineering and consulting on multiple
            cloud-native and AI-driven products.
          </p>
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <ol className="relative">
            {visible.map((exp, i) => {
              const isLastVisible = i === visible.length - 1;
              return (
                <li
                  key={`${exp.company}-${exp.role}`}
                  className={`relative pl-6 md:pl-8 pb-10 border-l border-line group ${
                    isLastVisible ? "last:border-transparent last:pb-0" : ""
                  }`}
                >
                  <span
                    className={`absolute -left-[5px] md:-left-[6px] top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ring-4 ring-bg transition-colors ${
                      exp.current
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-accent group-hover:bg-accent-soft"
                    }`}
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-1">
                    <h3 className="text-base md:text-lg font-medium text-white">
                      {exp.role}
                    </h3>
                    <span className="text-accent-soft text-sm">
                      · {exp.company}
                    </span>
                    {exp.current && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-mono text-muted mb-3">
                    {exp.period}
                  </p>

                  <p className="text-sm text-white/70 leading-relaxed mb-3">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-white/65 leading-relaxed pl-4 relative"
                      >
                        <span
                          className="absolute left-0 top-[9px] w-1 h-1 rounded-full bg-accent/70"
                          aria-hidden
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>

          {hiddenCount > 0 && (
            <div className="mt-4 pl-6 md:pl-8">
              <button
                type="button"
                onClick={handleToggle}
                aria-expanded={expanded}
                aria-controls="experience"
                className="group inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/40 hover:border-accent text-white text-sm md:text-base font-medium shadow-lg shadow-accent/10 hover:shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>
                  {expanded
                    ? "Show less"
                    : `Show ${hiddenCount} more position${hiddenCount === 1 ? "" : "s"}`}
                </span>
                {!expanded && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/40 bg-accent/10 px-2 py-0.5 rounded-full">
                    +{hiddenCount}
                  </span>
                )}
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                  <ChevronDown
                    width={14}
                    height={14}
                    className={`transition-transform duration-300 ${
                      expanded ? "rotate-180" : "animate-bounce-slow"
                    }`}
                  />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
