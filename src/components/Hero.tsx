export default function Hero() {
  return (
    <section id="top" className="section-shell flex min-h-[calc(100vh-4rem)] items-center pt-28 pb-16">
      <div className="max-w-4xl">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-gold">
          Senior IT Consultant · Kuala Lumpur, Malaysia
        </span>
        <h1 className="font-display text-[clamp(2.75rem,8vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-ink">
          Taufiq Tomadan
        </h1>
        <p className="mt-2 font-display text-[clamp(1.75rem,5vw,3rem)] italic text-gold">
          PM Tepi Me
        </p>
        <p className="mt-8 max-w-[560px] text-base font-light leading-relaxed text-mid md:text-lg">
          <strong className="font-medium text-ink">12 years</strong> architecting and delivering
          enterprise IT at a Fortune-ranked Malaysian MNC. Now available for consulting in
          technical project management, solution architecture, and{" "}
          <strong className="font-medium text-ink">AI-powered product development</strong>.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="bg-ink px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-canvas">
            Start a conversation
          </a>
          <a href="#projects" className="border border-rule px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-ink hover:border-ink">
            See what I&apos;m building
          </a>
        </div>
      </div>
    </section>
  );
}
