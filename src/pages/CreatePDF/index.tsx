import React, { useState } from 'react';
import jsPDF from 'jspdf';

export function MyApp(): JSX.Element {
  const [pdfData, setPdfData] = useState<string | null>(null);

  const handleClick = () => {
    const pdf = new jsPDF();
    pdf.text('Hello World!', 10, 10);
    setPdfData(pdf.output('datauristring'));
  };

  return (
    <div>
      <button onClick={handleClick}>Download PDF</button>
      {pdfData && (
        <a href={pdfData} download="example.pdf">
          <button>Download PDF</button>
        </a>
      )}
    </div>
  );
}
