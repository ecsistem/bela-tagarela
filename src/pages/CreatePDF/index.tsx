import pdfMake, { vfs } from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import React from 'react';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfFonts.pdfMake.vfs;

export function MyApp(): JSX.Element {
  const handlePrint = () => {
    pdfMake.createPdf({
      content: [
        {
          text: 'Hello World!',
        },
      ],
      pageOrientation: 'landscape',
    }).download();
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

