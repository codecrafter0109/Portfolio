import { ArrowRight, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute left-1/2 top-10 -translate-x-1/2 w-[640px] h-[640px] glow-spot pointer-events-none blur-3xl"
        aria-hidden
      />

      <div className="section-container relative grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted bg-bg-card border border-line rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for senior full stack roles
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-5">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent-soft via-accent to-accent-hover bg-clip-text text-transparent">
              Oisin Omaolchallan
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-3">
            Senior Full-Stack Engineer
          </p>
          <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed mb-8">
            10+ years building scalable web applications, cloud-native platforms,
            and AI-driven products with React, Next.js, Node.js, TypeScript and
            Google Cloud.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted">
            <a
              href="https://uk.linkedin.com/in/oisin-o-aba110248/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:oisin3264@gmail.com"
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-10 glow-spot blur-3xl pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl scale-110 pointer-events-none"
              aria-hidden
            />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-accent/30 bg-bg-card shadow-glow">
              <div
                className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none z-10"
                aria-hidden
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/hero.png"
                alt="Oisin Omaolchallan"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
