import { FadeIn } from "./fade-in";
import {
  IconChart,
  IconCode,
  IconPalette,
  IconRocket,
} from "./icons";

const services = [
  {
    number: "01",
    icon: IconPalette,
    title: "UI/UX Design",
    description:
      "Intuitive Interfaces und durchdachte User Journeys — von Wireframe bis High-Fidelity Prototyp.",
    benefit: "Inklusive klickbarem Prototyp & Nutzertests",
  },
  {
    number: "02",
    icon: IconCode,
    title: "Webentwicklung",
    description:
      "Moderne Websites und Web-Apps mit Next.js, React und TypeScript — performant und skalierbar.",
    benefit: "Von der Entwicklung bis zum Live-Gang",
  },
  {
    number: "03",
    icon: IconRocket,
    title: "Branding & Identity",
    description:
      "Einzigartige Markenidentitäten, die Vertrauen schaffen und im Gedächtnis bleiben.",
    benefit: "Logo, Farbwelt & Markenrichtlinien inklusive",
  },
  {
    number: "04",
    icon: IconChart,
    title: "SEO & Performance",
    description:
      "Optimierung für Suchmaschinen und Core Web Vitals — damit Ihre Website gefunden und geliebt wird.",
    benefit: "Inklusive SEO-Audit & Core-Web-Vitals-Report",
  },
];

export function Services() {
  return (
    <section
      id="leistungen"
      className="section-padding relative bg-surface text-surface-foreground"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent sm:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent sm:h-24" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Leistungen
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-lg text-surface-muted">
            Von der ersten Idee bis zum Launch — wir begleiten Sie durch jeden
            Schritt Ihres digitalen Projekts.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-black/[0.04] p-3 text-surface-foreground/70 transition-[background-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:bg-black/[0.06]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-surface-muted/50">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-muted">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-black/[0.06] pt-5 text-xs font-medium text-gold-dark">
                  <span className="h-px w-0 bg-gold-dark transition-[width] duration-300 group-hover:w-4" />
                  {service.benefit}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
