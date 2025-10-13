import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Top half - White background */}
      <div className="bg-white min-h-[50vh] relative">
        <Hero />
      </div>
      
      {/* Bottom half - Blue background */}
      <div className="bg-primary relative">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
