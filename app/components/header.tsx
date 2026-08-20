"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./icons";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#warum", label: "Warum wir" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#bewertungen", label: "Arbeitsweise" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,box-shadow] duration-300 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-sm font-bold text-black">
            D
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Dream<span className="text-gradient-gold">Web</span>Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Projekt starten
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[#080808] shadow-2xl shadow-black/60 md:hidden">
          <nav id="mobile-navigation" className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-white/5 hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-2 rounded-full bg-gradient-gold px-4 py-3 text-center text-sm font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              Projekt starten
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
