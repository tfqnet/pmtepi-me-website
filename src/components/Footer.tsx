const footerLinks = [
  { label: "GitHub", href: "https://github.com/tfqnet" },
  { label: "Email", href: "mailto:tfqnet@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/60192166699" },
];

export default function Footer() {
  return (
    <footer className="bg-canvas py-7">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mid">© 2026 Taufiq Tomadan · PM Tepi Me</p>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="text-xs uppercase tracking-widest text-mid hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
