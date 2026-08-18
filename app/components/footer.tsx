const footerLinks = {
  Leistungen: [
    { label: "UI/UX Design", href: "#leistungen" },
    { label: "Webentwicklung", href: "#leistungen" },
    { label: "SEO & Performance", href: "#leistungen" },
  ],
  Unternehmen: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Über uns", href: "#warum" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2 lg:border-r lg:border-white/[0.06] lg:pr-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-sm font-bold text-black">
                D
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Dream<span className="text-gradient-gold">Web</span>Studio
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              Webdesign & Entwicklung aus St. Gallen – für moderne,
              professionelle und überzeugende Webauftritte.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {title}
              </h4>
              <ul className="mt-6 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-sm text-zinc-400 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] pt-10 sm:flex-row lg:mt-20">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} DreamWebStudio. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-500 transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-gold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
