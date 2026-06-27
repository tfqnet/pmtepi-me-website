const steps = [
  {
    n: "1",
    title: "Discover",
    desc: "A focused conversation to understand your goals, constraints, and what success looks like. No template questionnaires — just the right questions.",
  },
  {
    n: "2",
    title: "Design",
    desc: "A clear plan: scope, timeline, tech choices, and risks surfaced early. You know exactly what you're agreeing to before work starts.",
  },
  {
    n: "3",
    title: "Deliver",
    desc: "Execution with regular checkpoints, honest progress updates, and post-delivery support. The engagement ends when you're confident, not just when the code is done.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-shell py-24 md:py-32">
      <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-gold">How I work</span>
      <h2 className="font-display text-3xl font-medium leading-tight text-ink md:text-5xl">Simple. Structured. No surprises.</h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((step) => (
          <article key={step.n}>
            <div className="font-display text-[2.5rem] leading-none text-rule">{step.n}</div>
            <h3 className="mt-5 text-[0.9375rem] font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-mid">{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
