import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamWebStudio — Premium Webagentur",
  description:
    "Luxuriöse Websites und Web-Apps — Design, Entwicklung und Branding auf höchstem Niveau. DreamWebStudio, Ihre Premium Webagentur aus Berlin.",
  keywords: [
    "Webagentur",
    "Webdesign",
    "Webentwicklung",
    "Next.js",
    "UI/UX Design",
    "Berlin",
  ],
  openGraph: {
    title: "DreamWebStudio — Premium Webagentur",
    description:
      "Digitale Erlebnisse, die begeistern. Design, Entwicklung und Branding auf höchstem Niveau.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
