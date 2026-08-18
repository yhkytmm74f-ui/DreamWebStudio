import { FadeIn } from "./fade-in";
import { IconChart, IconShield, IconSparkles, IconUsers } from "./icons";

const reasons = [
  {
    number: "01",
    icon: IconSparkles,
    title: "Individuelles Design",
    description:
      "Maßgeschneidert für Ihre Marke — keine Templates, keine Kompromisse.",
  },
  {
    number: "02",
    icon: IconUsers,
    title: "Klare Kommunikation",
    description:
      "Ein fester Ansprechpartner, realistische Timelines und volle Transparenz.",
  },
  {
    number: "03",
    icon: IconChart,
    title: "Performance & Qualität",
    description:
      "Sauberer Code und schnelle Ladezeiten — Qualität, die auch morgen noch überzeugt.",
  },
  {
    number: "04",
    icon: IconShield,
    title: "Langfristige Betreuung",
    description:
      "Wartung, Updates und Support — auch lange nach dem Launch an Ihrer Seite.",
  },
];

export function WhyUs() {
  return (
    <section id="warum" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/[0.04] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Warum DreamWebStudio
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Exzellenz ist
              <br />
              <span className="text-gradient-gold">unser Standard.</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-zinc-400">
              Eine professionelle Website soll nicht nur gut aussehen. Sie
              soll Vertrauen schaffen, Ihr Unternehmen überzeugend
              präsentieren und Interessenten zu Kunden machen.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const isHighlight = i === 0;
              return (
                <FadeIn key={reason.title} delay={i * 100}>
                  <div
                    className={`group h-full rounded-2xl border bg-white/[0.02] p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 ${
                      isHighlight
                        ? "border-gold/25 hover:border-gold/40"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`inline-flex rounded-lg p-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                          isHighlight
                            ? "border border-gold/30 text-gold"
                            : "bg-white/5 text-white/70"
                        }`}
                      >
                        <reason.icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isHighlight ? "text-gold/70" : "text-zinc-600"
                        }`}
                      >
                        {reason.number}
                      </span>
                    </div>
                    <h3 className="mt-5 font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {reason.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
