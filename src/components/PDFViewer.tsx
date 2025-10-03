import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, ExternalLink, FileText } from 'lucide-react';

interface PDFViewerProps {
  name: string;
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ name, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDirectOpen = () => {
    // Try to open in new tab first
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      // If popup blocked, fall back to download
      const link = document.createElement('a');
      link.href = url;
      link.download = name;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
      <div className="flex items-center space-x-3">
        <FileText className="h-5 w-5 text-muted-foreground" />
        <span className="font-medium">{name}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDirectOpen}
          className="flex items-center space-x-1"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Open</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          className="flex items-center space-x-1"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Preview
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-[70vh] border rounded"
                title={name}
                onError={() => {
                  // Fallback if iframe fails
                  const iframe = document.querySelector('iframe');
                  if (iframe) {
                    iframe.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'flex flex-col items-center justify-center h-full text-center p-4';
                    fallback.innerHTML = `
                      <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">PDF Preview Not Available</p>
                      <p className="text-muted-foreground mb-4">Your browser cannot display this PDF inline.</p>
                      <div class="flex space-x-2">
                        <button onclick="window.open('${url}', '_blank')" class="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
                          Open in New Tab
                        </button>
                        <button onclick="const link = document.createElement('a'); link.href = '${url}'; link.download = '${name}'; document.body.appendChild(link); link.click(); document.body.removeChild(link);" class="px-4 py-2 border rounded hover:bg-accent">
                          Download
                        </button>
                      </div>
                    `;
                    iframe.parentNode?.appendChild(fallback);
                  }
                }}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PDFViewer;
