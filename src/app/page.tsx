import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredBar from "@/components/CredBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ZoneShift from "@/components/ZoneShift";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CredBar />
      <About />
      <Services />
      <Process />
      <ZoneShift />
      <Projects />
      <CurrentlyBuilding />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
