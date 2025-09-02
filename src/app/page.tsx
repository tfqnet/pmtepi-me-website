import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
