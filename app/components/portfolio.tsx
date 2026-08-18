import { FadeIn } from "./fade-in";
import { IconArrowRight } from "./icons";
import { PortfolioPreview, type PortfolioVariant } from "./portfolio-preview";

const projects: {
  number: string;
  title: string;
  category: string;
  service: string;
  tags: string[];
  variant: PortfolioVariant;
}[] = [
  {
    number: "01",
    title: "Lumière Boutique",
    category: "Luxus E-Commerce",
    service: "UI/UX Design & E-Commerce-Entwicklung",
    tags: ["Webdesign", "E-Commerce"],
    variant: "fashion",
  },
  {
    number: "02",
    title: "Apex Finance",
    category: "FinTech · SaaS",
    service: "Produktdesign & Web-App-Entwicklung",
    tags: ["UX/UI", "Web-App"],
    variant: "fintech",
  },
  {
    number: "03",
    title: "Nova Architecture",
    category: "Architektur & Interior",
    service: "Portfolio-Website & Editorial-Design",
    tags: ["Webdesign", "Animationen"],
    variant: "architecture",
  },
  {
    number: "04",
    title: "Velvet Hotels",
    category: "Premium Hospitality",
    service: "Markenauftritt & Buchungsplattform",
    tags: ["Webdesign", "Buchungssystem"],
    variant: "hospitality",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ausgewählte Projekte
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              Ausgewählte Designkonzepte, die zeigen, wie wir Marken digital
              in Szene setzen.
            </p>
          </div>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-gold"
          >
            Ihr Projekt hier
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:gap-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="aspect-[4/3] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <PortfolioPreview variant={project.variant} />
                </div>

                <div className="p-8 sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold/80">
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs tabular-nums text-zinc-600">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.service}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-300 group-hover:text-gold">
                      Projekt ansehen
                      <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
