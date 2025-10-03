import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_hsl(var(--accent))_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="container max-w-6xl text-center space-y-8 relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                <span className="block">
                  MECHANICAL
                </span>
                <span className="block mt-2">ENGINEERING</span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
              Innovative Solutions Through Design & Analysis
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-muted-foreground">
              <span className="px-4 py-2 rounded-full bg-card border border-border">Product Design</span>
              <span className="px-4 py-2 rounded-full bg-card border border-border">Mechanical Systems</span>
              <span className="px-4 py-2 rounded-full bg-card border border-border">Industrial Applications</span>
            </div>
            <p className="text-lg md:text-xl text-foreground font-medium pt-4">
              Alexandre Sanmartin Goyanes
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="group text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="text-base font-semibold border-2 hover:bg-primary/10"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
