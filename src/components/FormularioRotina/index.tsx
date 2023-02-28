import React, { useState } from 'react';

function FormularioRotina({ onAddHabit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newHabit = { name, description, image };
    onAddHabit(newHabit);
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
        />
      </label>
      <br />
      <label>
        Description:
        <textarea 
          value={description} 
          onChange={(event) => setDescription(event.target.value)} 
        />
      </label>
      <br />
      <label>
        Image:
        <input 
          type="text" 
          value={image} 
          onChange={(event) => setImage(event.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default FormularioRotina;