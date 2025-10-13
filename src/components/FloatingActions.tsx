import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingActions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact section doesn't exist, navigate to home first
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}CV.pdf`;
    link.download = 'Alexandre_Sanmartin_CV.pdf';
    link.click();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              onClick={scrollToContact}
              variant="outline"
              className="shadow-lg hover:shadow-xl transition-all bg-white border-2 border-primary text-primary hover:bg-primary/10 rounded-full h-14 px-6"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact me</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              onClick={downloadCV}
              variant="outline"
              className="shadow-lg hover:shadow-xl transition-all bg-white border-2 border-primary text-primary hover:bg-primary/10 rounded-full h-14 px-6"
            >
              <Download className="h-5 w-5 mr-2" />
              CV
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download my CV</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingActions;

