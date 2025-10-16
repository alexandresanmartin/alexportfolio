import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFFirstPageImageProps {
  pdfPath: string;
  title: string;
  className?: string;
  width?: number;
  height?: number;
}

const PDFFirstPageImage: React.FC<PDFFirstPageImageProps> = ({
  pdfPath,
  title,
  className = "",
  width = 400,
  height = 300
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onDocumentLoadSuccess = () => {
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    console.error('PDF Path:', pdfPath);
    setError('Failed to load PDF');
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center p-4 border border-red-200 rounded-lg bg-red-50 ${className}`}>
        <div className="text-center">
          <p className="text-red-600 text-sm">Failed to load PDF</p>
          <p className="text-red-500 text-xs mt-1">{pdfPath}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-lg border shadow-sm overflow-hidden bg-gray-50">
        {isLoading && (
          <div className="flex items-center justify-center" style={{ width, height }}>
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-xs text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}
        
        <div className={isLoading ? 'hidden' : ''}>
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
          >
            <Page
              pageNumber={1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-sm"
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFFirstPageImage;

