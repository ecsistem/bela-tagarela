import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import React from 'react';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function MyApp(): JSX.Element {
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

export default MyApp;
