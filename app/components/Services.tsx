import {
  CodeIcon,
  DatabaseIcon,
  CloudIcon,
  AIIcon,
  GitIcon,
  RealtimeIcon,
} from "./Icons";

const services = [
  {
    icon: CodeIcon,
    title: "Frontend Engineering",
    body: "Performant, accessible interfaces with React, Next.js and TypeScript — React Query, modern frontend architecture, and obsessive attention to UX detail.",
  },
  {
    icon: DatabaseIcon,
    title: "Backend Engineering",
    body: "Scalable REST and GraphQL APIs with Node.js and Nest.js, backed by PostgreSQL, Redis and event-driven systems.",
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    body: "Cloud-native systems on GCP and AWS — Cloud Functions, Lambda, Docker, Terraform and GitHub Actions CI/CD pipelines.",
  },
  {
    icon: AIIcon,
    title: "AI Integration",
    body: "Generative AI features at scale — Gemini, Kling, prompt engineering and AI orchestration baked into production SaaS.",
  },
  {
    icon: RealtimeIcon,
    title: "Real-Time Systems",
    body: "Real-time dashboards, race tracking, live data and event pipelines using WebSockets, Redis, Pub/Sub and Dataflow.",
  },
  {
    icon: GitIcon,
    title: "Architecture & Consulting",
    body: "Engineering strategy and architecture — scalable distributed systems, performance tuning, team mentoring and technical leadership.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-container py-16 md:py-24 border-t border-line"
    >
      <p className="eyebrow">What I do</p>
      <h2 className="heading">Services I offer.</h2>
      <p className="subheading mb-10">
        End-to-end product engineering — from concept and architecture, to
        shipping production systems and scaling them.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ icon: Icon, title, body }) => (
          <article key={title} className="surface-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-accent-dim text-accent mb-1">
              <Icon width={20} height={20} />
            </div>
            <h3 className="text-base font-medium text-white">{title}</h3>
            <p className="text-sm text-white/65 leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
