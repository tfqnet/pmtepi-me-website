const zoneALinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

const zoneBLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Building", href: "#building" },
];

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-rule bg-canvas/95 backdrop-blur-sm">
      <div className="section-shell flex h-full items-center justify-between gap-5">
        <a href="#top" className="shrink-0 text-sm text-ink sm:text-base">
          <span className="font-display">Taufiq Tomadan</span>
          <span className="ml-2 text-gold">| PM Tepi Me</span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-4">
            {zoneALinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs uppercase tracking-widest text-mid hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
          <span aria-hidden="true" className="text-rule">|</span>
          <div className="flex items-center gap-4">
            {zoneBLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs uppercase tracking-widest text-mid hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="shrink-0 border border-ink px-3 py-2 text-[0.65rem] font-medium uppercase tracking-widest text-ink hover:bg-ink hover:text-canvas sm:px-4 sm:text-xs"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
