import { Resend } from "resend";

export const runtime = "nodejs";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@dreamwebstudio.de";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Dream Web Studio <onboarding@resend.dev>";

const SERVICE_LABELS: Record<string, string> = {
  new: "Neue Website",
  redesign: "Website-Redesign",
  landingpage: "Landingpage",
  other: "Sonstiges",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, service, message, company } = body as Record<string, unknown>;

  // Honeypot field: only bots fill this hidden input. Pretend success without sending.
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim() === "" ||
    email.trim() === "" ||
    message.trim() === ""
  ) {
    return Response.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return Response.json(
      { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 },
    );
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return Response.json({ ok: false, error: "Eingabe ist zu lang." }, { status: 400 });
  }

  const serviceLabel =
    typeof service === "string" ? (SERVICE_LABELS[service] ?? service) : undefined;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email.trim(),
      subject: `Neue Kontaktanfrage von ${name.trim()}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email.trim())}</p>
        ${serviceLabel ? `<p><strong>Leistung:</strong> ${escapeHtml(serviceLabel)}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, error: "Nachricht konnte nicht gesendet werden." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { ok: false, error: "Nachricht konnte nicht gesendet werden." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
