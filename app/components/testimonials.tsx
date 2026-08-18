import { FadeIn } from "./fade-in";

const trustPoints = [
  {
    number: "01",
    title: "Direkter Ansprechpartner",
    description:
      "Keine Umwege – Sie sprechen direkt mit der Person, die Ihre Website umsetzt.",
  },
  {
    number: "02",
    title: "Transparenter Prozess",
    description:
      "Klare Schritte, nachvollziehbare Entscheidungen und offene Kommunikation während des gesamten Projekts.",
  },
  {
    number: "03",
    title: "Betreuung nach dem Launch",
    description:
      "Auch nach der Veröffentlichung Ihrer Website bleiben wir für Sie erreichbar.",
  },
];

export function Testimonials() {
  return (
    <section
      id="bewertungen"
      className="section-padding relative bg-surface text-surface-foreground"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent sm:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent sm:h-24" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Unser Versprechen
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Persönlich. Transparent.
            <br />
            Auf Augenhöhe.
          </h2>
          <p className="mt-4 text-lg text-surface-muted">
            Von der ersten Idee bis zum fertigen Webauftritt begleiten wir
            Sie persönlich. Klare Kommunikation, transparente Abläufe und
            ein Ergebnis, das zu Ihrem Unternehmen passt.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-12 text-center sm:grid-cols-3 sm:divide-x sm:divide-black/5 sm:text-left">
          {trustPoints.map((point, i) => (
            <FadeIn
              key={point.number}
              delay={i * 100}
              className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="font-mono text-xs tabular-nums text-gold-dark">
                {point.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-muted">
                {point.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
