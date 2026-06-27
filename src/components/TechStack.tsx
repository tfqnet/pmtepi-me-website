const tech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "React Native",
  "Microsoft Azure", "Firebase", "Vercel", "Railway", "Node.js", "GitHub Actions",
  "Gemini API", "Claude API",
];

export default function TechStack() {
  return (
    <section className="border-t border-white/10 bg-builder py-20 md:py-24">
      <div className="section-shell">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#64FFDA]">Tech stack</span>
        <p className="mb-7 max-w-2xl text-sm font-light leading-relaxed text-builder-mid">
          Tools I use in production — not a vendor list, just what actually shows up in my projects.
        </p>
        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <span key={item} className="border border-white/15 px-3 py-2 font-mono text-xs text-builder-mid transition-colors hover:border-[#64FFDA]/50 hover:text-[#64FFDA]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
