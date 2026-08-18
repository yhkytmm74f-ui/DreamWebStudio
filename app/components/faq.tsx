"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { IconChevronDown } from "./icons";

const faqs = [
  {
    question: "Wie läuft ein Projekt bei DreamWebStudio ab?",
    answer:
      "Nach einem kostenlosen Erstgespräch klären wir Ziele, Anforderungen und den gewünschten Umfang. Anschließend erhalten Sie ein transparentes Angebot. Danach folgen Konzeption, Design, Entwicklung, Testing und die Veröffentlichung Ihrer Website – mit persönlicher Abstimmung während des gesamten Projekts.",
  },
  {
    question: "Was kostet eine Website?",
    answer:
      "Die Kosten hängen vom Umfang und den Anforderungen des Projekts ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes, individuell auf Ihr Projekt abgestimmtes Angebot.",
  },
  {
    question: "Wie lange dauert die Entwicklung?",
    answer:
      "Die Projektdauer richtet sich nach Umfang und Komplexität der Website. Kleinere Webauftritte können innerhalb weniger Wochen umgesetzt werden. Einen realistischen Zeitplan erhalten Sie vor Projektbeginn.",
  },
  {
    question: "Kann meine bestehende Website überarbeitet werden?",
    answer:
      "Ja. Bestehende Websites können modernisiert, technisch optimiert oder vollständig neu gestaltet werden. Gemeinsam prüfen wir, welche Lösung für Ihr Unternehmen sinnvoll ist.",
  },
  {
    question: "Bietet ihr auch Wartung und Support an?",
    answer:
      "Ja. Auch nach der Veröffentlichung können wir Ihre Website betreuen, aktualisieren und bei technischen Fragen unterstützen.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Häufige Fragen
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/20">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition-colors duration-300 hover:bg-white/[0.02] sm:px-8"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base font-medium transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <IconChevronDown
                      className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-7 pb-6 text-sm leading-relaxed text-zinc-400 transition-opacity duration-300 sm:px-8"
                        style={{ opacity: isOpen ? 1 : 0 }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
