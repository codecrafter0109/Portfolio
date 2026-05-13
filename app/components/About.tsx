export default function About() {
  return (
    <section id="about" className="section-container py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          <p className="eyebrow">About</p>
          <h2 className="heading mb-0">A decade of full stack engineering.</h2>
        </div>

        <div className="md:col-span-7 lg:col-span-8 space-y-5 text-white/75 leading-relaxed">
          <p>
            I&apos;m a Senior Full Stack Engineer specialising in React,
            Next.js, Node.js, TypeScript and Google Cloud. Over the past ten
            years I&apos;ve designed and shipped scalable web applications,
            cloud-native platforms and AI-driven products used by thousands of
            people.
          </p>
          <p>
            Currently leading engineering at{" "}
            <span className="text-accent-soft">Zalez AI</span>, consulting for{" "}
            <span className="text-accent-soft">Allforce</span> and{" "}
            <span className="text-accent-soft">Pathfinder Sailing</span>, and
            previously delivered enterprise systems for{" "}
            <span className="text-accent-soft">TELUS</span>,{" "}
            <span className="text-accent-soft">DPD</span> and{" "}
            <span className="text-accent-soft">Pictet Group</span>.
          </p>
          <p>
            I care about clean architecture, performance and shipping things
            that work — equally comfortable owning frontend systems, designing
            scalable APIs, or wiring up cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
