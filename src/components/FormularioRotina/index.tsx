import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import dataRotinas from '../../data/dataRotinas.json'
import daysWeek from '../../data/daysWeek.json';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

interface ScheduleItem {
  day: string;
  time:string;
  activity: string;
  imgTarefa: string;
}

export const HabitForm = React.memo(() => {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');
  const [imgTarefa, setImgTarefa] = useState('');

  const addItem = ({ day, time, activity, imgTarefa }: ScheduleItem) => {
    const newId = Math.floor(Math.random() * 100000); // generate a random id
    const newItem = { id: newId.toString(), day, time, activity, imgTarefa };
    setItems((prevItems) => [...prevItems, newItem]);
    localStorage.setItem('schedule', JSON.stringify([...items, newItem]));
    toast.success('Tarefa adicionada com sucesso!');
    window.location.reload();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!day || !time || !activity || !imgTarefa) {
      toast.error('Por favor preencha todos os campos!');
      return;
    }
    const duplicate = items.find(
      (item) => item.day === day && item.time === time
    );
    if (duplicate) {
      toast.error('Este horário já está ocupado!');
      return;
    }
    addItem({ day, time, activity, imgTarefa });
    setDay('');
    setTime('');
    setActivity('');
    setImgTarefa('');
  };

  const handleActivityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedImage = e.target.value;
    const selectedRotina = dataRotinas.find(
      (rotina) => rotina?.image === selectedImage
    );
    if (selectedRotina) {
      setActivity(selectedRotina.name);
      setImgTarefa(selectedRotina.image);
    }
  };

  useEffect(() => {
    const savedSchedule = localStorage.getItem('schedule');
    if (savedSchedule) {
      setItems(JSON.parse(savedSchedule));
    }
  }, []);

  const daysWeekLength = daysWeek.length;

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <form
        className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 max-w-5xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-green-tertiary"
            htmlFor="theme"
          >
            Tarefa
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            id="Rotina"
            onChange={handleActivityChange}
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Selecione uma rotina
            </option>
            {dataRotinas.map(({ name, image }, index) => (
              <option key={index} value={image}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-green-tertiary"
            htmlFor="userName"
          >
            Dias
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            id="Rotina"
            onChange={(e) => setDay(e.target.value)}
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Selecione uma dia da semana
            </option>
            {daysWeek.map(({ semana }, index) => (
              <option key={index} value={semana}>
                {semana}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-green-tertiary"
            htmlFor="backgroundColor"
          >
            Hora
          </label>
          <input
            className="border border-gray-400 h-12 w-full"
            id="backgroundColor"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {imgTarefa && (
          <img src={imgTarefa} alt={activity} className="max-w-full mb-4" />
        )}
        <button
          type="submit"
          className="bg-green-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Adicionar Atividade
        </button>
      </form>
    </div>
  );
});
