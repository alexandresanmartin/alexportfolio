import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import FloatingActions from "@/components/FloatingActions";

const Resume = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}CV.pdf`;
    link.download = 'Alexandre_Sanmartin_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container max-w-5xl py-12 px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Resume</h1>
            <p className="text-lg text-muted-foreground">
              Alexandre Sanmartin Goyanes - Mechanical Engineer
            </p>
          </div>

          {/* Inline PDF (iframe) for maximum compatibility */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <iframe
              src={`${import.meta.env.BASE_URL}CV.pdf`}
              title="Alexandre Sanmartin Goyanes - Resume"
              className="w-full"
              style={{ height: "80vh" }}
            />
          </div>

          {/* Download Button */}
          <div className="flex justify-center pb-8">
            <Button 
              size="lg" 
              onClick={downloadCV}
              className="gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Note about CV */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Last updated: Available upon request</p>
          </div>
        </div>
      </div>
      
      {/* Floating action buttons */}
      <FloatingActions />
    </div>
  );
};

export default Resume;

