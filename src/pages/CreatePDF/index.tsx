import React, { useState } from 'react';
import jsPDF from 'jspdf';

export function FormPDF(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const pdf = new jsPDF();
    pdf.setProperties({
      title: 'Relatório PDF',
      subject: 'Exemplo de relatório PDF gerado com o jsPDF',
      author: 'Bela Tagarela',
      keywords: 'pdf, relatório, exemplo, jsPDF',
    });
    // Título do relatório
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(100, 100, 100);
    pdf.text("Relatório PDF", 80, 22);
    // Subtítulo com informações do formulário
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text('Informações do formulário:', 10, 40);

    // Conteúdo do formulário
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text('Nome: ' + formData.name, 30, 60);
    pdf.text('Email: ' + formData.email, 30, 70);

        // Rodapé com o número da página
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("Página ", pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 10);
  
    pdf.save('form.pdf');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Gerar PDF</button>
      </form>
    </>
  );
};