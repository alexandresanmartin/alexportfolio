import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, Eye } from 'lucide-react';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFPreviewProps {
  pdfPath: string;
  title: string;
  className?: string;
  showPreview?: boolean;
  showDownload?: boolean;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({
  pdfPath,
  title,
  className = "",
  showPreview = true,
  showDownload = true
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF');
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center p-4 border border-red-200 rounded-lg bg-red-50 ${className}`}>
        <div className="text-center">
          <FileText className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-red-600 text-sm">Failed to load PDF</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* PDF Preview Thumbnail */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        {isLoading && (
          <div className="flex items-center justify-center h-48 bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}
        
        {!isLoading && (
          <div className="relative">
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading=""
            >
              <Page
                pageNumber={pageNumber}
                width={300}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-sm"
              />
            </Document>
            
            {/* Overlay with actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-2">
                {showPreview && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{title}</h3>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                              disabled={pageNumber <= 1}
                            >
                              Previous
                            </Button>
                            <span className="text-sm text-gray-600">
                              Page {pageNumber} of {numPages}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                              disabled={pageNumber >= numPages}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Document
                            file={pdfPath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                          >
                            <Page
                              pageNumber={pageNumber}
                              width={Math.min(800, window.innerWidth - 100)}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                            />
                          </Document>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                
                {showDownload && (
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* PDF Title */}
      <div className="mt-2 text-center">
        <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
        {numPages > 0 && (
          <p className="text-xs text-gray-500">{numPages} page{numPages !== 1 ? 's' : ''}</p>
        )}
      </div>
    </div>
  );
};

export default PDFPreview;

