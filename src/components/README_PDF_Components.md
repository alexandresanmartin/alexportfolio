# PDF Components Documentation

This document explains how to use the PDF-related components in the website.

## Components Overview

### 1. PDFPreview Component
A compact component that displays the first page of a PDF as a thumbnail with preview and download functionality.

**Props:**
- `pdfPath`: string - Path to the PDF file
- `title`: string - Title to display
- `className?`: string - Additional CSS classes
- `showPreview?`: boolean - Show preview button (default: true)
- `showDownload?`: boolean - Show download button (default: true)

**Usage:**
```tsx
import PDFPreview from '@/components/PDFPreview';

<PDFPreview
  pdfPath="/path/to/document.pdf"
  title="My Document"
  className="w-full"
/>
```

### 2. PDFGallery Component
A gallery component that displays multiple PDFs in a grid layout.

**Props:**
- `title?`: string - Gallery title (default: "Documents")
- `description?`: string - Gallery description
- `pdfs`: PDFDocument[] - Array of PDF documents
- `className?`: string - Additional CSS classes

**PDFDocument interface:**
```tsx
interface PDFDocument {
  path: string;
  title: string;
  description?: string;
  category?: string;
}
```

**Usage:**
```tsx
import PDFGallery from '@/components/PDFGallery';

const pdfs = [
  {
    path: '/documents/cv.pdf',
    title: 'My CV',
    description: 'My complete resume',
    category: 'Resume'
  }
];

<PDFGallery
  title="My Documents"
  description="Browse through my documents"
  pdfs={pdfs}
/>
```

### 3. PDFViewer Component
A full-featured PDF viewer with navigation, zoom, and rotation controls.

**Props:**
- `pdfPath`: string - Path to the PDF file
- `title?`: string - Document title (default: "PDF Document")
- `className?`: string - Additional CSS classes

**Features:**
- Page navigation (previous/next)
- Zoom in/out (50% to 300%)
- Rotate document (90° increments)
- Loading states and error handling

**Usage:**
```tsx
import PDFViewer from '@/components/PDFViewer';

<PDFViewer
  pdfPath="/documents/resume.pdf"
  title="My Resume"
  className="w-full"
/>
```

## Dependencies

The components use the following libraries:
- `react-pdf`: For PDF rendering
- `pdfjs-dist`: PDF.js library for PDF processing

## Styling

The components use Tailwind CSS classes and are designed to be responsive. They include:
- Loading animations
- Error states
- Hover effects
- Responsive design

## Browser Compatibility

These components work in modern browsers that support:
- ES6+ features
- Canvas API
- Web Workers

## Performance Notes

- PDFs are loaded on-demand
- First page is rendered as a thumbnail for previews
- Full PDF viewer loads the complete document
- Consider file size for optimal performance

