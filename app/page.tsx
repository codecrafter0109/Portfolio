import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
