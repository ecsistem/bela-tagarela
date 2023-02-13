import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function CreatePDF(formData: { userName?: string; theme?: string; backgroundColor?: string; isColorful?: boolean; UserName?: any; }){
  console.log(formData)
  // document.getElementById("viewportMeta")?.setAttribute("content", "width=800");
  const input: HTMLElement | null = document.getElementById("App");
  if (input) {
    const canvas = await html2canvas(input, {
      logging: true, 
      useCORS: true, 
      allowTaint: true,
      width: window.innerWidth,
      height: input.scrollHeight,
    });
    const imgWidth = 250;
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
    var img = new Image()
    img.src = '/logo/logo.png'
    pdf.addImage(img, 'png', 70, 10, 16, 16)
    pdf.text("Bela Tagarela", (pdf.internal.pageSize.width / 2) + 9, 18, { align: "center" });
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