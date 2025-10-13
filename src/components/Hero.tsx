import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const scrollToSection = (id: string) => {
    console.log('Scrolling to:', id);
    const element = document.getElementById(id);
    console.log('Element found:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element not found:', id);
    }
  };

  return (
    <section className="relative h-full flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Subtle background effects for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,0,0,0.05)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(0,0,0,0.03)_0%,_transparent_50%)]"></div>
      
      <div className="container max-w-6xl text-center space-y-8 relative z-10">
        <div className="space-y-6 animate-fade-in">
          {/* Name */}
          <p className="text-4xl md:text-6xl text-primary font-bold">
            Alexandre Sanmartin Goyanes
          </p>
          
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg hover:border-primary/60 transition-all hover:scale-105 cursor-pointer">
                    <img 
                      src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                      alt="Alexandre Sanmartin Goyanes"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image not found
                        e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                  alt="Alexandre Sanmartin Goyanes"
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="inline-block">
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight leading-none">
                MECHANICAL ENGINEERING
              </h1>
              <div className="absolute -inset-1 bg-white opacity-10 blur-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
              Innovative Solutions Through Design & Analysis
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">Product Design</span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">Mechanical Systems</span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">Industrial Applications</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="group text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-black/25 hover:shadow-black/40 transition-all"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
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
