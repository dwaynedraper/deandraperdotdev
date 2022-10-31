import resume from "./resume.pdf";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={1000} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
