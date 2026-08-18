import { Contact } from "./components/contact";
import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { WhyUs } from "./components/why-us";

export default function Home() {
  return (
    <>
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
