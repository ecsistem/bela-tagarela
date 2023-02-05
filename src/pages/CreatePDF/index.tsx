import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {SpeechSynthesis} from '../Vocalizador'

export function FormPDF() {
  const exportPdf = async () => {
    const input: HTMLElement | null = document.getElementById("App");
    if (input) {
      const canvas = await html2canvas(input, {logging: true, useCORS: true, allowTaint: true,  height: input.scrollHeight,});
      const imgWidth = 200;
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
    let pageNumber = 1;
    while (imgHeight > 0) {
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, -(pageNumber - 1) * 297, imgWidth, imgHeight > 297 ? 297 : imgHeight);
      imgHeight -= 297;
      pageNumber++;
    }
    pdf.save('prancha.pdf')

    }
  }

  return (
    <>
    <button onClick={exportPdf}>Print Pdf</button>
    <header id='App'>
      <SpeechSynthesis />
    </header>
    </>
  );
};