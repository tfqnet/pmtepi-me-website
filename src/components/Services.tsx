const services = [
  {
    num: "i",
    title: "Technical Project Management",
    desc: "End-to-end delivery of IT initiatives — from requirements and stakeholder alignment through UAT, training, and go-live. Built on 12+ years managing enterprise-scale projects at a Fortune-ranked MNC.",
    tags: ["Agile / Scrum", "Stakeholder Mgmt", "UAT & Training", "Risk Management"],
  },
  {
    num: "ii",
    title: "Solution Architecture & System Design",
    desc: "Designing scalable, secure systems for enterprise contexts. Mobile, web, cloud, and IoT integrations — grounded in real delivery experience, not just theory.",
    tags: ["Azure Cloud", "Firebase", "Mobile & Web", "IoT Integration"],
  },
  {
    num: "iii",
    title: "AI-Powered Solutions",
    desc: "Integrating AI into existing workflows and products — agentic systems, LLM-powered tools, and practical automation. Prototype-to-production, with a focus on what actually ships.",
    tags: ["Agentic AI", "LLM Integration", "Process Automation", "Rapid Prototyping"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-rule bg-white py-24 md:py-32">
      <div className="section-shell">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-gold">Services</span>
        <h2 className="font-display text-3xl font-medium leading-tight text-ink md:text-5xl">Three things I do well.</h2>

        <div className="mt-12 grid border-l border-t border-rule lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.num} className="flex flex-col border-b border-r border-rule p-7 md:p-9">
              <span className="font-display text-xs italic text-gold">{service.num}</span>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-mid">{service.desc}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="border border-gold-lt px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-gold">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
