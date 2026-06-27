const stats = [
  ["12+", "Years in enterprise IT"],
  ["MNC", "Fortune-ranked corporate background"],
  ["3", "Core disciplines"],
  ["MY", "Based in Kuala Lumpur"],
];

export default function CredBar() {
  return (
    <section className="bg-ink" aria-label="Experience highlights">
      <div className="section-shell grid grid-cols-2 py-8 lg:grid-cols-4">
        {stats.map(([stat, label], index) => (
          <div
            key={label}
            className={`px-5 py-4 text-center ${index % 2 ? "border-l border-white/15" : ""} ${index > 1 ? "border-t border-white/15 lg:border-t-0 lg:border-l" : ""}`}
          >
            <div className="font-display text-2xl text-gold-lt">{stat}</div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-wide text-white/50">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
