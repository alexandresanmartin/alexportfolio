import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-white/90">
            Interested in discussing internship opportunities or Master Thesis collaboration
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 transition-all hover:bg-white/15 hover:border-white/30">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-base text-white/80">
                Actively seeking Mechanical Engineering internship opportunities in Aerospace and Automotive Industry
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="h-5 w-5" />
              <span>Zürich, Switzerland</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-lg p-4">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-white text-sm">alexandresanmartingoyanes@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-lg p-4">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white text-sm">+41 772891933</span>
              </div>
            </div>

            <div className="pt-2">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="https://www.linkedin.com/in/alexsanmartin-/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="text-center text-sm text-white/70 pt-4 border-t border-white/20">
              <p>Available for internships starting Summer 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
