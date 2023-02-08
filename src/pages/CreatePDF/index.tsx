import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Prancha} from '../Prancha'

export function FormPDF() {
  const exportPdf = async () => {
    document.getElementById("viewportMeta")?.setAttribute("content", "width=800");
    const input: HTMLElement | null = document.getElementById("App");
    if (input) {
      const canvas = await html2canvas(input, {
        logging: true, 
        useCORS: true, 
        allowTaint: true,
        width: window.innerWidth,
        height: input.scrollHeight,
      });
      const imgWidth = 190;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.setProperties({
        title: 'Bela Tagarela',
        subject: 'Exemplo de relatório PDF gerado com o jsPDF',
        author: 'Bela Tagarela',
        keywords: 'pdf, relatório, exemplo, jsPDF',
      });
      // Título do relatório
      pdf.setFontSize(22);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(100, 100, 100);
      pdf.text("Bela Tagarela", 80, 22);
      let pageHeight = pdf.internal.pageSize.height;
      let currentHeight = 40;
      let sectionHeight = pageHeight - 40
      let sliceHeight = imgHeight > sectionHeight ? sectionHeight : imgHeight;
      pdf.addImage(imgData, 'PNG', 5, currentHeight, imgWidth, sliceHeight);
      pdf.save('prancha.pdf');
    }
  }

  return (
    <>
    <button onClick={exportPdf}>Print Pdf</button>
    <header id='App'>
      <Prancha />
    </header>
    </>
  );
};


