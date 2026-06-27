const timeline = [
  { year: "2013", role: "iOS Developer", org: "Enterprise Technology Division" },
  { year: "2016", role: "Solutions Architect", org: "Digital Transformation Unit" },
  { year: "2020", role: "Senior Solutions Architect", org: "Digital Enterprise Platform" },
  { year: "2023", role: "Technical Project Manager", org: "Corporate Digital & AI Initiative" },
];

export default function About() {
  return (
    <section id="about" className="section-shell py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-gold">About</span>
          <h2 className="max-w-xl font-display text-3xl font-medium leading-tight text-ink md:text-5xl">
            Enterprise depth. Consulting agility.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-relaxed text-mid">
            <p>
              I spent 12 years inside one of Malaysia&apos;s largest corporations, moving from{" "}
              <strong className="font-medium text-ink">iOS developer</strong> to{" "}
              <strong className="font-medium text-ink">Solutions Architect</strong> to{" "}
              <strong className="font-medium text-ink">Technical Project Manager</strong> — owning
              end-to-end delivery across mobile platforms, cloud infrastructure, IoT systems, and
              digital transformation programmes.
            </p>
            <p>
              That background means I understand what it actually takes to get software shipped
              inside an organisation — the governance, the stakeholders, the technical debt, and
              the politics. I bring that same rigour to every client engagement, without the
              corporate overhead.
            </p>
            <p>
              Beyond enterprise work, I build actively — AI-powered tools, agentic workflows, and
              web products. I stay close to what&apos;s current because I use it myself.
            </p>
          </div>
        </div>

        <div>
          <span className="mb-8 block text-xs font-semibold uppercase tracking-widest text-gold">Career arc</span>
          <ol className="ml-1 border-l border-rule">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-8 pl-7 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] bg-gold" />
                <div className="text-[0.7rem] font-semibold tracking-wide text-gold">{item.year}</div>
                <div className="mt-1 text-sm font-medium text-ink">{item.role}</div>
                <div className="mt-1 text-xs italic text-mid">{item.org}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
