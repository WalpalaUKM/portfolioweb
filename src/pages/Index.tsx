import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Goals } from "@/components/sections/Goals";
import { Contact } from "@/components/sections/Contact";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
