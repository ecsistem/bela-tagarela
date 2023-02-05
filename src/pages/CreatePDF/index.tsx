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

    pdf.text('Nome: ' + formData.name, 10, 10);
    pdf.text('Email: ' + formData.email, 10, 20);
  
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