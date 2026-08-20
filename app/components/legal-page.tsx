import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./footer";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-sm font-bold text-black">
              D
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Dream<span className="text-gradient-gold">Web</span>Studio
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-gold/40 hover:text-gold"
          >
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,98,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {intro}
          </p>

          <div className="mt-14 space-y-12 text-[15px] leading-7 text-zinc-300">
            {children}
          </div>

          <p className="mt-16 border-t border-white/[0.08] pt-8 text-sm text-zinc-500">
            Stand: 20. August 2026
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
