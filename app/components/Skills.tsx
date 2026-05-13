import {
  CodeIcon,
  DatabaseIcon,
  AIIcon,
  CloudIcon,
  RealtimeIcon,
  GitIcon,
} from "./Icons";

const skillGroups = [
  {
    icon: CodeIcon,
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Query",
      "HTML5",
      "CSS3",
      "Frontend Architecture",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    icon: DatabaseIcon,
    title: "Backend Development",
    items: [
      "Node.js",
      "Nest.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Backend Architecture",
      "Serverless Functions",
      "Authentication & Authorization",
      "Webhooks",
      "API Integration",
      "Real-Time APIs",
    ],
  },
  {
    icon: AIIcon,
    title: "AI & Integration",
    items: [
      "Generative AI APIs",
      "Gemini API",
      "Kling API",
      "AI Orchestration",
      "Prompt Engineering",
      "Third-Party API Integration",
    ],
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    items: [
      "Google Cloud Platform",
      "AWS",
      "Lambda",
      "Cloud Functions",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Serverless Architecture",
      "Cloud Deployment",
      "Infrastructure Automation",
    ],
  },
  {
    icon: DatabaseIcon,
    title: "Databases & Data Engineering",
    items: [
      "PostgreSQL",
      "Redis",
      "Firestore",
      "Supabase",
      "Cloud SQL",
      "BigQuery",
      "Dataflow",
      "Pub/Sub",
    ],
  },
  {
    icon: RealtimeIcon,
    title: "Architecture & Engineering",
    items: [
      "Scalable Systems",
      "Distributed Systems",
      "Enterprise Architecture",
      "Real-Time Applications",
      "Event-Driven Architecture",
      "Cloud-Native Applications",
      "Workflow Automation",
      "System Design",
    ],
  },
  {
    icon: GitIcon,
    title: "Tools & Practices",
    items: [
      "Agile",
      "Scrum",
      "Unit Testing",
      "Sentry",
      "Monitoring & Observability",
      "Load Testing",
      "Debugging",
      "Performance Tuning",
      "Technical Documentation",
      "Cross-Functional Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container py-16 md:py-24">
      <p className="eyebrow">Core skills</p>
      <h2 className="heading">The toolbox.</h2>
      <p className="subheading mb-10">
        A decade of hands-on engineering across the full stack — performant
        React frontends, scalable Node.js backends, cloud-native infrastructure
        and AI-powered platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {skillGroups.map(({ icon: Icon, title, items }, i) => {
          const isLastOdd =
            i === skillGroups.length - 1 && skillGroups.length % 2 === 1;
          return (
            <article
              key={title}
              className={`surface-card p-6 md:p-7 flex flex-col gap-5 ${
                isLastOdd
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-0.5rem)] md:mx-auto"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent-dim text-accent">
                  <Icon width={20} height={20} />
                </span>
                <h3 className="text-lg md:text-xl font-medium text-white">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-mono bg-bg-panel border border-line px-2.5 py-1 rounded text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
