export default function CurrentlyBuilding() {
  return (
    <section id="building" className="border-t border-white/10 bg-builder py-24 md:py-28">
      <div className="section-shell">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-[#64FFDA]">Currently building</span>
        <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-5xl">What&apos;s on my bench right now.</h2>
        <article className="mt-10 border border-white/10 bg-white/5 p-7 md:p-9">
          <div className="font-mono text-xs text-[#64FFDA]">{"// active"}</div>
          <h3 className="mt-4 font-display text-xl text-white">PM Tepi Me — personal site revamp</h3>
          <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-builder-mid">
            Rebuilding this site from scratch with a cleaner structure, editorial design, and a two-zone layout that balances consulting credibility with builder identity. Next.js 15, TypeScript, Tailwind. You&apos;re looking at version one.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js 15", "TypeScript", "Tailwind", "Codex"].map((tag) => (
              <span key={tag} className="border border-white/10 px-2 py-1 font-mono text-[0.65rem] text-builder-mid">{tag}</span>
            ))}
          </div>
        </article>
        <p className="mt-6 text-xs italic text-builder-mid">Updated June 2026. I try to keep this current.</p>
      </div>
    </section>
  );
}
