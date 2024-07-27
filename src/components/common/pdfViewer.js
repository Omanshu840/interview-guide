import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

// Set workerSrc to load the PDF worker script from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null); // Clear any previous errors
  };

  const onDocumentLoadError = (error) => {
    console.error("Failed to load PDF file:", error);
    setError("Failed to load PDF file.");
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page 
              key={`page_${index + 1}`} 
              pageNumber={index + 1} 
            />
          )
        )}
      </Document>
    </div>
  );
};

export default PDFViewer;
