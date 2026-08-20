"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const demoNavLinks = ["Kollektion", "Atelier", "Kontakt"];

const demoCards = [
  {
    title: "Handarbeit",
    text: "Jedes Stück wird von Hand gefertigt und geprüft.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6-6 6 6-6 11-6-11z" />
      </svg>
    ),
  },
  {
    title: "Zeitloses Design",
    text: "Reduzierte Formen, die niemals aus der Mode kommen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="7" />
      </svg>
    ),
  },
  {
    title: "Persönliche Beratung",
    text: "Individuelle Betreuung von der Auswahl bis zur Lieferung.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
        />
      </svg>
    ),
  },
];

export function HeroShowcase() {
  const frameRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  // Start in the lightweight mobile mode so hydration cannot cause a visible
  // transform jump on phones. Desktop animation is enabled after detection.
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 90%", "start 45%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const disableTransform = shouldReduceMotion || isMobile;
  const maxTilt = disableTransform ? 0 : 8;
  const minScale = disableTransform ? 1 : 0.94;

  const rotateX = useTransform(smoothProgress, [0, 1], [maxTilt, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [minScale, 1]);

  return (
    <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
      <motion.div
        ref={frameRef}
        style={{ rotateX, scale, transformPerspective: 1200 }}
        className="origin-bottom overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-[0_2px_10px_rgba(0,0,0,0.45),0_50px_120px_-40px_rgba(0,0,0,0.65)] ring-1 ring-inset ring-white/[0.04]"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-4 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
            aura-maison.de
          </div>
        </div>

        {/* demo site: own nav */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0b0b0c] px-6 py-4 md:px-10">
          <span className="font-serif text-sm font-semibold tracking-[0.3em] text-white md:text-base">
            AURA
          </span>
          <div className="hidden items-center gap-8 text-xs tracking-wide text-white/55 md:flex">
            {demoNavLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
          <span className="rounded-full border border-gold/30 px-3 py-1.5 text-[11px] tracking-wide text-gold-light md:px-4 md:text-xs">
            Termin
          </span>
        </div>

        {/* demo site: hero */}
        <div className="grid gap-8 bg-[#f4f1ea] px-6 py-10 md:grid-cols-2 md:items-center md:gap-10 md:px-10 md:py-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-dark md:text-xs">
              Neue Kollektion
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-[1.1] text-[#141414] md:text-4xl lg:text-5xl">
              Zeitlose
              <br />
              Eleganz.
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#141414]/60 md:text-base">
              Handgefertigte Unikate für Menschen mit Anspruch an Qualität und
              Design.
            </p>
            <span className="mt-6 inline-block rounded-full bg-[#141414] px-6 py-3 text-xs font-medium tracking-wide text-[#f4f1ea] md:text-sm">
              Kollektion entdecken
            </span>
          </div>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-[#1c1c1e] via-[#111111] to-black md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.16),transparent_60%)]" />
            <div className="absolute inset-6 rounded-lg border border-gold/20" />
          </div>
        </div>

        {/* demo site: cards */}
        <div className="hidden grid-cols-3 gap-4 border-t border-black/5 bg-[#f4f1ea] px-10 py-10 md:grid">
          {demoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-black/5 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-gold-dark/30 text-gold-dark [&>svg]:h-4 [&>svg]:w-4">
                {card.icon}
              </span>
              <h4 className="text-sm font-semibold text-[#141414]">{card.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#141414]/55">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
