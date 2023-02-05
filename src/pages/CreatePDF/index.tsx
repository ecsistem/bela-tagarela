import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

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

