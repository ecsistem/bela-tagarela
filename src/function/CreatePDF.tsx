import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function CreatePDF(formData: { boardName?: string; userName?: string; theme?: string; backgroundColor?: string; isColorful?: boolean; UserName?: any; }){
    console.log(formData)
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
      pdf.setTextColor(250, 166, 18);
      pdf.text("Bela Tagarela", 80, 10);
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(12);
      pdf.text(`Nome da prancha: ${formData.boardName}`, 80, 15);
      pdf.text(`Tema: ${formData.theme}`, 80, 25);
      pdf.text(`Usuário: ${formData.UserName}`, 80, 35);
      let pageHeight = pdf.internal.pageSize.height;
      let currentHeight = 40;
      let sectionHeight = pageHeight - 40
      let sliceHeight = imgHeight > sectionHeight ? sectionHeight : imgHeight;
      const pageWidth = pdf.internal.pageSize.width;
const margin = 20;
const availableWidth = pageWidth - margin * 2;
const center = pageWidth / 2;
const centerOfImage = availableWidth / 2;
const imageX = center - centerOfImage;

pdf.addImage(imgData, 'PNG', imageX, currentHeight, imgWidth, sliceHeight);
    //   pdf.addImage(imgData, 'PNG', 5, currentHeight, imgWidth, sliceHeight);
    pdf.text("Bela Tagrela", pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 10);
      pdf.save('prancha.pdf');
    }
}