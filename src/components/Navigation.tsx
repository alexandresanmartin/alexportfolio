import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToHome = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    setIsOpen(false);
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}CV.pdf`;
    link.download = 'Alexandre_Sanmartin_CV.pdf';
    link.click();
  };

  const navItems = [
    { name: 'Home', icon: Home, action: scrollToHome },
    { name: 'About Me', icon: User, link: '/about' },
    { name: 'Projects', icon: Briefcase, action: () => scrollToSection('projects') },
    { name: 'Contact', icon: Mail, action: () => scrollToSection('contact') },
    { name: 'Resume', icon: FileText, action: downloadCV },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            Alexandre Sanmartin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.link ? (
                <Link key={item.name} to={item.link}>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={item.action}
                  className="text-primary hover:bg-primary/10"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Button>
              )
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    item.link ? (
                      <Link key={item.name} to={item.link} onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-primary hover:bg-primary/10"
                        >
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        key={item.name}
                        variant="ghost"
                        onClick={item.action}
                        className="w-full justify-start text-primary hover:bg-primary/10"
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </Button>
                    )
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

