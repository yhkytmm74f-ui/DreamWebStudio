"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HeroShowcase } from "./hero-showcase";
import { IconArrowRight } from "./icons";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 60]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fineHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fineHover || reduceMotion) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = section!.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      section!.style.setProperty("--mx", `${x}%`);
      section!.style.setProperty("--my", `${y}%`);
    }

    section.addEventListener("pointermove", handlePointerMove);
    return () => section.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 sm:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-pointer-glow absolute inset-0" />
        <motion.div
          style={{ y: blobY }}
          className="absolute -top-40 left-1/4 h-[500px] w-[500px]"
        >
          <div className="animate-gradient-shift absolute inset-0 rounded-full bg-gold/8 blur-[120px]" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-zinc-400"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Premium Webagentur · Design & Entwicklung
          </div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span
              className="animate-fade-in-up block"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Digitale Erlebnisse,
            </span>
            <span
              className="animate-fade-in-up block text-gradient-gold"
              style={{ animationDelay: "0.34s", opacity: 0 }}
            >
              die begeistern.
            </span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            style={{ animationDelay: "0.48s", opacity: 0 }}
          >
            DreamWebStudio entwickelt hochwertige Websites, die Unternehmen
            professionell präsentieren, Vertrauen schaffen und aus Besuchern
            Kunden machen.
          </p>

          <div
            className="animate-fade-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-medium text-black transition-[transform,filter,box-shadow] duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(201,169,98,0.25)] active:translate-y-0 active:scale-[0.98] glow-gold"
            >
              Kostenlose Beratung
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-medium text-zinc-300 transition-[color,transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white active:translate-y-0 active:scale-[0.98]"
            >
              Portfolio ansehen
            </a>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
