import React, { useState } from 'react';
interface Habit {
    name: string;
    description: string;
    image: string;
  }

interface HabitFormProps {
  onAddHabit: (newHabit: Habit) => void;
}

function HabitForm({ onAddHabit }: HabitFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newHabit: Habit = { name, description, image };
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

export default HabitForm;