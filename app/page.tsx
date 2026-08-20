import { Contact } from "./components/contact";
import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { WhyUs } from "./components/why-us";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DreamWebStudio",
  url: "https://dreamwebstudio.ch",
  areaServed: ["St. Gallen", "Schweiz"],
  description:
    "Webdesign, Webentwicklung und Branding für Unternehmen in St. Gallen und der Schweiz.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
