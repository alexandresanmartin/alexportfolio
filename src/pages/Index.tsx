import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  

  return (
    <div className="min-h-screen pt-16">
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
      
      {/* Floating action buttons */}
      <FloatingActions />
    </div>
  );
};

export default Index;
