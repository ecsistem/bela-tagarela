import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function CreatePDF(formData: { userName?: string; theme?: string; backgroundColor?: string; isColorful?: boolean; UserName?: any; }){
  const input: HTMLElement | null = document.getElementById("prancha");
  if (input) {
    const canvas = await html2canvas(input, {
      logging: true, 
      useCORS: true, 
      allowTaint: true,
      width: window.innerWidth,
      height: input.scrollHeight,
    });
    const imgWidth = 250;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const imgData = canvas.toDataURL('img/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.setProperties({
      title: 'Bela Tagarela',
      subject: 'Prancha gerada pela bela tagarela',
      author: 'Bela Tagarela',
    });
    
    // Título do relatório
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(250, 166, 18);
    const img = new Image()
    img.src = '/logo/LOGOPDF.png'
    pdf.addImage(img, 'png', 80, 5, 40, 20)
    // pdf.text("Bela Tagarela", (pdf.internal.pageSize.width / 2) + 9, 18, { align: "center" });
    pdf.setTextColor(134, 171, 58);
    pdf.setFontSize(12);
    pdf.text(`Tema: ${formData.theme}`, 20, 30);
    pdf.text(`Usuário: ${formData.UserName}`, 20, 35);
    
    const margin = 20;
    const pageWidth = pdf.internal.pageSize.width;
    const availableWidth = pageWidth - margin * 2;
    const center = pageWidth / 2;
    const centerOfImage = availableWidth / 2;
    const imageX = center - centerOfImage;
    
    const pageHeight = pdf.internal.pageSize.height;
    const currentHeight = 40;
    const sectionHeight = pageHeight - 40;
    const sliceHeight = imgHeight > sectionHeight ? sectionHeight : imgHeight;
    
    pdf.addImage(imgData, 'PNG', imageX, currentHeight, availableWidth, sliceHeight);
    pdf.save(`${formData.theme} - Belatagarela.pdf`);
  }
}