import { ArrowRight } from "./Icons";

export default function CTA() {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-card p-10 md:p-14 text-center">
        <div
          className="absolute inset-0 glow-spot blur-3xl opacity-70 pointer-events-none"
          aria-hidden
        />
        <div className="relative">
          <p className="eyebrow justify-center">Let&apos;s build</p>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-3">
            Got a product that needs to ship?
          </h2>
          <p className="subheading mx-auto mb-8">
            I&apos;m open to senior full stack roles, consulting engagements
            and interesting product collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowRight />
            </a>
            <a
              href="mailto:oisin3264@gmail.com"
              className="btn-secondary"
            >
              oisin3264@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
