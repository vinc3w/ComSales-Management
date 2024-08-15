import generatePDF, { Margin } from "react-to-pdf";

function PDFExport({ formRef }) {

  return (
    <button className="pdf-export button-primary" onClick={() => generatePDF(formRef, { fileName: 'form.pdf', page: { margin: Margin.MEDIUM } })}>
      Export as PDF
    </button>
  );
}

export default PDFExport;
