import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Interested in discussing internship opportunities or Master Thesis collaboration
          </p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Let's Connect</CardTitle>
            <CardDescription className="text-base">
              Actively seeking Mechanical Engineering internship opportunities in Aerospace and Automotive Industry
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>California, USA</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:alexandresanmartingoyanes@gmail.com" className="hover:underline">
                  alexandresanmartingoyanes@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+41772891933" className="hover:underline">
                  +41 772891933
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/alexsanmartin-/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-4">
              <p>Available for internships starting Summer 2026</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
