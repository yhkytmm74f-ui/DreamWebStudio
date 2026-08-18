"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./fade-in";
import { IconMapPin, IconPhone } from "./icons";

type FormStatus = "idle" | "pending" | "success" | "error";

const DEFAULT_ERROR_MESSAGE =
  "Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.";

const contactInfo = [
  {
    number: "01",
    icon: IconPhone,
    label: "Telefon",
    value: "+41 78 244 47 22",
    href: "tel:+41782444722",
  },
  {
    number: "02",
    icon: IconMapPin,
    label: "Standort",
    value: "St. Gallen, Schweiz",
  },
];

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("pending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setErrorMessage(data?.error ?? DEFAULT_ERROR_MESSAGE);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(DEFAULT_ERROR_MESSAGE);
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-shift absolute -bottom-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Bereit für etwas
              <br />
              <span className="text-gradient-gold">Außergewöhnliches?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von
              24 Stunden mit einer ersten persönlichen Einschätzung.
            </p>

            <div className="mt-12 space-y-7">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70">
                      <item.icon />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium transition-colors duration-300 hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-xs tabular-nums text-zinc-600">
                    {item.number}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            {status === "success" ? (
              <div className="glass flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl p-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-2xl text-gold">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold">Vielen Dank!</h3>
                <p className="mt-3 max-w-sm text-zinc-400">
                  Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei
                  Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 sm:p-10"
              >
                <div
                  className="absolute h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="company">Firma</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-zinc-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-zinc-600 hover:border-white/20 focus:border-gold/40 focus:ring-1 focus:ring-gold/20"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-zinc-400"
                    >
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-zinc-600 hover:border-white/20 focus:border-gold/40 focus:ring-1 focus:ring-gold/20"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm text-zinc-400"
                  >
                    Leistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors duration-300 hover:border-white/20 focus:border-gold/40 focus:ring-1 focus:ring-gold/20"
                  >
                    <option value="new">Neue Website</option>
                    <option value="redesign">Website-Redesign</option>
                    <option value="landingpage">Landingpage</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-zinc-400"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-zinc-600 hover:border-white/20 focus:border-gold/40 focus:ring-1 focus:ring-gold/20"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>

                {status === "error" && errorMessage ? (
                  <p
                    role="alert"
                    className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  >
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "pending"}
                  className="mt-9 w-full rounded-full bg-gradient-gold py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5 glow-gold disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:translate-y-0"
                >
                  {status === "pending" ? "Wird gesendet…" : "Nachricht senden"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
