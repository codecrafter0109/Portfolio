"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLinkIcon,
  PauseIcon,
  PlayIcon,
} from "./Icons";

const AUTOPLAY_MS = 5000;

type Slide = {
  title: string;
  subtitle: string;
  body: string;
  gradient: string;
  accent: string;
  liveUrl: string;
  image: string;
  tags: string[];
};

const slides: Slide[] = [
  {
    title: "CreatorUp",
    subtitle: "Generative AI Media Platform",
    body: "AI-powered media studio orchestrating Gemini + Kling. Scaled to 10,000+ users in under three months.",
    gradient: "from-cyan-400/30 via-sky-500/20 to-indigo-600/30",
    accent: "#22D3EE",
    liveUrl: "https://creatorup.com/",
    image: "/gallery/creatorup.png",
    tags: ["Next.js", "Gemini", "Kling", "Serverless"],
  },
  {
    title: "TELUS",
    subtitle: "Enterprise Employee Platform",
    body: "React + Next.js platforms with Nest.js, GraphQL and Lambda backends. WCAG 2.1 across the stack.",
    gradient: "from-emerald-400/30 via-teal-500/20 to-cyan-500/30",
    accent: "#34D399",
    liveUrl: "https://www.telus.com/",
    image: "/gallery/telus.png",
    tags: ["React", "GraphQL", "Nest.js", "AWS"],
  },
  {
    title: "DPD",
    subtitle: "Logistics & Analytics Platform",
    body: "Real-time logistics dashboards. Event-driven Pub/Sub workflows, BigQuery + Dataflow pipelines.",
    gradient: "from-rose-400/30 via-orange-500/20 to-amber-500/30",
    accent: "#FB7185",
    liveUrl: "https://www.dpd.com/",
    image: "/gallery/dpd.png",
    tags: ["GCP", "BigQuery", "Pub/Sub", "Terraform"],
  },
  {
    title: "Pictet Group",
    subtitle: "Banking & Workflow Automation",
    body: "Enterprise React frontends and Appway workflow automation inside a regulated banking environment.",
    gradient: "from-violet-400/30 via-purple-500/20 to-fuchsia-500/30",
    accent: "#A78BFA",
    liveUrl: "https://www.pictet.com/",
    image: "/gallery/pictet.png",
    tags: ["React", "Appway", "Enterprise"],
  },
  {
    title: "Pathfinder Sailing",
    subtitle: "Real-Time Race Tracking",
    body: "Real-time race tracking with distributed SQL workflows, Redis caching and interactive mapping.",
    gradient: "from-sky-400/30 via-blue-500/20 to-indigo-500/30",
    accent: "#60A5FA",
    liveUrl: "https://pathfindersailing.com/",
    image: "/gallery/pathfinder.png",
    tags: ["Next.js", "Redis", "GCP", "Real-Time"],
  },
];

function SlideMockup({ slide }: { slide: Slide }) {
  return (
    <div
      className={`relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${slide.gradient}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={`${slide.title} — ${slide.subtitle}`}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 flex flex-col gap-2 bg-black/65 backdrop-blur-md border-t border-white/10">
        <p
          className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em]"
          style={{ color: slide.accent }}
        >
          {slide.subtitle}
        </p>
        <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
          {slide.title}
        </h3>
        <p className="hidden md:block text-sm text-white/85 max-w-2xl leading-relaxed">
          {slide.body}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {slide.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono text-white/85 border border-white/25 bg-black/40 backdrop-blur px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThumbMockup({ slide, active }: { slide: Slide; active: boolean }) {
  return (
    <div
      className={`relative w-full h-full rounded-md overflow-hidden bg-gradient-to-br ${slide.gradient}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-0 transition-colors"
        style={{
          background: active
            ? "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))"
            : "rgba(10, 10, 15, 0.65)",
        }}
      />
      <div className="absolute inset-0 flex items-end justify-start p-2">
        <span
          className="text-[10px] md:text-xs font-semibold uppercase tracking-wider"
          style={{ color: active ? slide.accent : "rgba(255,255,255,0.85)" }}
        >
          {slide.title}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [tick, setTick] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
    setTick((t) => t + 1);
  }, []);

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, playing, goTo, tick]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const slide = slides[index];

  return (
    <section
      id="projects"
      className="section-container py-16 md:py-24 border-t border-line"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p className="eyebrow">Showcase</p>
          <h2 className="heading mb-0">Project gallery.</h2>
        </div>
        <p className="subheading">
          A quick tour through some of the platforms I&apos;ve designed and
          shipped — use the arrows, dots or thumbnails to navigate.
        </p>
      </div>

      <div className="relative surface-card !rounded-2xl p-3 md:p-4">
        <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden rounded-lg">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <SlideMockup slide={s} />
            </div>
          ))}

          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur flex items-center justify-center text-white transition-colors"
          >
            <ArrowRight className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur flex items-center justify-center text-white transition-colors"
          >
            <ArrowRight />
          </button>

          <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4 pointer-events-none z-10">
            <button
              type="button"
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              aria-pressed={playing}
              onClick={() => setPlaying((p) => !p)}
              className="pointer-events-auto inline-flex items-center gap-2.5 text-sm md:text-base font-mono uppercase tracking-wider font-semibold text-white bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full px-5 py-3 md:px-6 md:py-3.5 border border-white/15 hover:border-white/30 shadow-2xl shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              {playing ? (
                <PauseIcon width={18} height={18} />
              ) : (
                <PlayIcon width={18} height={18} />
              )}
              {playing ? "Auto" : "Manual"}
              {playing && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden
                />
              )}
            </button>

            <a
              href={slide.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto group/visit inline-flex items-center gap-2 text-sm md:text-base font-mono uppercase tracking-wider font-semibold text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 hover:border-white/30 px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-2xl shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              Visit site
              <ExternalLinkIcon
                width={16}
                height={16}
                className="transition-transform group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 overflow-hidden">
            <div
              key={`${index}-${tick}-${playing ? "p" : "s"}`}
              className={`h-full bg-accent ${playing ? "gallery-progress" : ""}`}
              style={{
                width: playing ? undefined : "0%",
                animationDuration: `${AUTOPLAY_MS}ms`,
              }}
            />
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 md:gap-3">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Show ${s.title}`}
              onClick={() => goTo(i)}
              className={`relative aspect-[16/10] rounded-md overflow-hidden border-2 transition-all ${
                i === index
                  ? "border-accent"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <ThumbMockup slide={s} active={i === index} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted">
        <span className="font-mono">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              playing ? "bg-emerald-400 animate-pulse" : "bg-muted"
            }`}
            aria-hidden
          />
          {playing ? "Auto-advancing every 5s" : "Manual mode — use arrows, dots or thumbnails"}
        </span>
      </div>
    </section>
  );
}
