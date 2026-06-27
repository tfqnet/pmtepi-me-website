const projects = [
  {
    label: "AI Survival Simulator",
    type: "Web Game",
    desc: "A browser-based survival RPG powered by Gemini API. Players make real-time decisions; the AI narrates consequences dynamically. Built in a weekend with React, Tailwind, and Vercel.",
    tags: ["React", "Gemini API", "Tailwind", "Vercel"],
    href: "https://github.com/tfqnet",
    status: "Live",
    linkLabel: "View on GitHub",
  },
  {
    label: "TaskFlow Lite",
    type: "Multi-Agent Experiment",
    desc: "A multi-agent AI orchestration experiment where AI agents roleplay as BA, Tech Lead, Developer, and Tester — collaborating to ship a feature end-to-end. Built with Linear, Notion, and Railway.",
    tags: ["AI Agents", "Multi-Agent", "Linear", "Railway"],
    href: "https://github.com/tfqnet/TaskFlow-Lite",
    status: "Experiment",
    linkLabel: "View on GitHub",
  },
  {
    label: "Enterprise IT Starter Kit",
    type: "Digital Product",
    desc: "Templates, checklists, and frameworks distilled from 12 years of enterprise IT delivery. For PMs and architects starting their first major programme.",
    tags: ["Templates", "Frameworks", "IT Delivery"],
    href: null,
    status: "In development",
    linkLabel: "Details coming soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-builder pb-24 md:pb-32">
      <div className="section-shell">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#64FFDA]">Side projects</span>
        <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-5xl">Things I&apos;ve shipped.</h2>

        <div className="mt-12 grid border-l border-t border-white/10 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.label} className="flex min-h-[360px] flex-col border-b border-r border-white/10 p-7 transition-colors hover:bg-white/5 md:p-9">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-snug text-white">{project.label}</h3>
                <span className="shrink-0 border border-[#64FFDA]/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-[#64FFDA]">
                  {project.status}
                </span>
              </div>
              <div className="mt-2 font-mono text-xs text-builder-mid">{project.type}</div>
              <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-builder-mid">{project.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-1.5 py-0.5 text-[0.65rem] text-builder-mid">{tag}</span>
                ))}
              </div>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 text-xs text-[#64FFDA] hover:underline">
                  {project.linkLabel} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="mt-7 text-xs text-builder-mid">{project.linkLabel}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
