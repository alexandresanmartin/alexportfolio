import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfPath: string;
  title?: string;
  className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfPath,
  title = "PDF Document",
  className = ""
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
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

  const goToPrevPage = () => {
    setPageNumber(Math.max(1, pageNumber - 1));
  };

  const goToNextPage = () => {
    setPageNumber(Math.min(numPages, pageNumber + 1));
  };

  const zoomIn = () => {
    setScale(Math.min(3.0, scale + 0.25));
  };

  const zoomOut = () => {
    setScale(Math.max(0.5, scale - 0.25));
  };

  const rotate = () => {
    setRotation((rotation + 90) % 360);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center p-8 border border-red-200 rounded-lg bg-red-50 ${className}`}>
        <div className="text-center">
          <p className="text-red-600 text-lg font-medium mb-2">Failed to load PDF</p>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Header with controls */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
          
          <div className="flex items-center gap-2">
            {/* Navigation */}
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600 px-2">
                {pageNumber} / {numPages}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Zoom and rotation controls */}
            <div className="flex items-center gap-1 ml-4">
              <Button size="sm" variant="outline" onClick={zoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600 px-2 min-w-[3rem] text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button size="sm" variant="outline" onClick={zoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={rotate}>
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div className="p-4 bg-gray-100 overflow-auto max-h-[80vh]">
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}
        
        {!isLoading && (
          <div className="flex justify-center">
            <Document
              file={pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading=""
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                rotate={rotation}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-lg"
              />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;