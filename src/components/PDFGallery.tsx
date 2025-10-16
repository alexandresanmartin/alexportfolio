import React from 'react';
import PDFPreview from './PDFPreview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PDFDocument {
  path: string;
  title: string;
  description?: string;
  category?: string;
}

interface PDFGalleryProps {
  title?: string;
  description?: string;
  pdfs: PDFDocument[];
  className?: string;
}

const PDFGallery: React.FC<PDFGalleryProps> = ({
  title = "Documents",
  description = "Browse through my technical documents and research papers",
  pdfs,
  className = ""
}) => {
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pdfs.map((pdf, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <PDFPreview
                  pdfPath={pdf.path}
                  title={pdf.title}
                  className="w-full"
                />
                {pdf.description && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {pdf.description}
                    </p>
                  </div>
                )}
                {pdf.category && (
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {pdf.category}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDFGallery;

