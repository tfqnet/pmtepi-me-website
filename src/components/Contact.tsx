const contactMethods = [
  { icon: "✉", label: "Email", value: "tfqnet@gmail.com", href: "mailto:tfqnet@gmail.com" },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+60 19-216 6699",
    href: "https://wa.me/60192166699?text=Hi%2C%20I%27m%20interested%20in%20a%20consultation.",
  },
  { icon: "☎", label: "Phone", value: "+60 19-216 6699", href: "tel:+60192166699" },
  { icon: "⌘", label: "GitHub", value: "github.com/tfqnet", href: "https://github.com/tfqnet" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-y border-rule bg-white py-24 md:py-32">
      <div className="section-shell">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-gold">Contact</span>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight text-ink md:text-5xl">Let&apos;s talk about your project.</h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-mid md:text-base">
              Whether you have a consulting brief, a collaboration idea, or just want to say hi — reach out through whichever channel works best. I usually respond within 24 hours.
            </p>
          </div>
          <div className="grid border-l border-t border-rule sm:grid-cols-2">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 border-b border-r border-rule p-5 hover:bg-canvas md:p-6"
              >
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border border-rule text-sm text-ink">{method.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{method.label}</span>
                  <span className="block break-all text-sm font-light text-mid">{method.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
