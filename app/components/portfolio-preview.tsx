import type { ComponentType } from "react";

export type PortfolioVariant = "fashion" | "fintech" | "architecture" | "hospitality";

const chartBars = [40, 65, 50, 80, 60, 95, 70];

function FashionPreview() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#f4f1ea] px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xs tracking-[0.3em] text-[#141414]">
          LUMIÈRE
        </span>
        <span className="h-2 w-2 rounded-full border border-[#141414]/30" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2 py-4 sm:gap-3">
        <div className="col-span-2 rounded-md bg-gradient-to-br from-[#e4d3c3] via-[#d9c3ab] to-[#b99f82] transition-transform duration-500 group-hover:-translate-y-1" />
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex-1 rounded-md bg-gradient-to-br from-gold/50 to-gold-dark/60 transition-transform duration-500 group-hover:translate-y-1" />
          <div className="flex-1 rounded-md bg-[#141414]/90" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-16 rounded-full bg-[#141414]/20" />
        <span className="rounded-full border border-gold-dark/40 px-3 py-1 text-[10px] tracking-wide text-gold-dark">
          Neu
        </span>
      </div>
    </div>
  );
}

function FinTechPreview() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#0a0a0a] px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-white">
          APEX
        </span>
        <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] text-zinc-400">
          Start
        </span>
      </div>
      <div className="flex-1 py-4">
        <div className="flex h-full items-end gap-1.5 sm:gap-2">
          {chartBars.map((height, i) => (
            <div
              key={i}
              className="origin-bottom flex-1 rounded-t-sm bg-gradient-to-t from-gold/70 to-gold/20 transition-transform duration-500 group-hover:scale-y-105"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 sm:gap-3">
        <div className="flex-1 rounded-md border border-white/10 bg-white/[0.03] p-2.5">
          <span className="block h-1.5 w-8 rounded-full bg-white/15" />
          <span className="mt-1.5 block h-2 w-12 rounded-full bg-gold/50" />
        </div>
        <div className="flex-1 rounded-md border border-white/10 bg-white/[0.03] p-2.5">
          <span className="block h-1.5 w-8 rounded-full bg-white/15" />
          <span className="mt-1.5 block h-2 w-10 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

function ArchitecturePreview() {
  return (
    <div className="flex h-full flex-col bg-[#e5e1d8]">
      <div className="flex items-center justify-between px-5 py-3 sm:px-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#141414]">
          Nova
        </span>
        <span className="h-px w-10 bg-gold-dark/50" />
      </div>
      <div className="flex flex-1 gap-1 p-1">
        <div className="flex w-2/3 flex-col gap-1">
          <div className="flex-[2] bg-[#c8c2b4] transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="flex-1 bg-[#141414]" />
        </div>
        <div className="flex w-1/3 flex-col gap-1">
          <div className="flex-1 border border-gold-dark/30 bg-[#efece5]" />
          <div className="flex-1 bg-[#a9a08c]" />
          <div className="flex-1 bg-[#8f8674] transition-transform duration-500 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}

function HospitalityPreview() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1a1310] via-[#120d0b] to-black px-5 py-5 sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-gold/15 blur-[70px]" />
      <div className="relative flex items-center justify-between">
        <span className="font-serif text-xs tracking-[0.3em] text-gold-light">
          VELVET
        </span>
        <span className="h-2 w-2 rounded-full bg-gold/60" />
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center">
        <span className="h-2.5 w-32 rounded-full bg-white/20 sm:w-40" />
        <span className="mt-2 h-2.5 w-20 rounded-full bg-gold/50 sm:w-24" />
      </div>
      <div className="relative flex divide-x divide-white/10 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] text-[10px] text-zinc-300">
        <span className="flex-1 px-3 py-2 text-center">Anreise</span>
        <span className="flex-1 px-3 py-2 text-center">Abreise</span>
        <span className="flex-1 bg-gradient-gold px-3 py-2 text-center font-medium text-black transition-transform duration-500 group-hover:scale-[1.04]">
          Suchen
        </span>
      </div>
    </div>
  );
}

const previews: Record<PortfolioVariant, ComponentType> = {
  fashion: FashionPreview,
  fintech: FinTechPreview,
  architecture: ArchitecturePreview,
  hospitality: HospitalityPreview,
};

type PortfolioPreviewProps = {
  variant: PortfolioVariant;
};

export function PortfolioPreview({ variant }: PortfolioPreviewProps) {
  const Preview = previews[variant];

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <span className="mx-auto rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          Design Concept
        </span>
      </div>
      <div className="flex-1">
        <Preview />
      </div>
    </div>
  );
}
