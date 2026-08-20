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
  title: "Webdesign St. Gallen | DreamWebStudio",
  description:
    "Professionelles Webdesign für Unternehmen in St. Gallen und der ganzen Schweiz. DreamWebStudio entwickelt moderne, schnelle Websites, die Kunden gewinnen.",
  keywords: [
    "Webagentur",
    "Webdesign",
    "Webentwicklung",
    "Next.js",
    "UI/UX Design",
    "St. Gallen",
    "Schweiz",
  ],
  alternates: {
    canonical: "https://dreamwebstudio.ch",
  },
  openGraph: {
    title: "Webdesign St. Gallen | DreamWebStudio",
    description:
      "Professionelles Webdesign für Unternehmen in St. Gallen und der ganzen Schweiz. DreamWebStudio entwickelt moderne, schnelle Websites, die Kunden gewinnen.",
    type: "website",
  },
  twitter: {
    title: "Webdesign St. Gallen | DreamWebStudio",
    description:
      "Professionelles Webdesign für Unternehmen in St. Gallen und der ganzen Schweiz. DreamWebStudio entwickelt moderne, schnelle Websites, die Kunden gewinnen.",
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
