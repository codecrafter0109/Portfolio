const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "9", label: "Companies & clients" },
  { value: "30+", label: "Technologies used" },
];

export default function Stats() {
  return (
    <section className="section-container -mt-6 md:-mt-10 mb-16 md:mb-24 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden border border-line">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-bg-card px-6 py-6 md:py-7 flex flex-col items-center text-center"
          >
            <span className="text-2xl md:text-3xl font-semibold text-accent mb-1">
              {value}
            </span>
            <span className="text-xs md:text-sm text-muted">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
