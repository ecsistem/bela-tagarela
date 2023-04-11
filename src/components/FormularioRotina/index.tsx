import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from 'react-select';
import dataRotinas from "../../data/dataRotinas.json";
import daysWeek from "../../data/daysWeek.json";
import "react-toastify/dist/ReactToastify.css";


interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  activity: string;
  imgTarefa: string;
}

export const HabitForm = React.memo(() => {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedImgTarefa, setSelectedImgTarefa] = useState("");

  const handleAddItem = () => {
    if (selectedDays.length === 0 || time === "" || selectedActivity === "") {
      toast.error("Por favor preencha todos os campos!");
      return;
    }
    const newItems: ScheduleItem[] = selectedDays.map((day) => ({
      id: Math.floor(Math.random() * 100000).toString(),
      day,
      time,
      activity: selectedActivity,
      imgTarefa: selectedImgTarefa,
    }));
    setItems((prevItems) => [...prevItems, ...newItems]);
    localStorage.setItem("schedule", JSON.stringify([...items, ...newItems]));
    toast.success("Tarefa adicionada com sucesso!");
    window.location.reload();
    setSelectedDays([]);
    setTime("");
    setSelectedActivity("");
    setSelectedImgTarefa("");

  };

  const handleActivityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedImage = e.target.value;
    const selectedRotina = dataRotinas.find(
      (rotina) => rotina?.image === selectedImage
    );
    if (selectedRotina) {
      setSelectedActivity(selectedRotina.name);
      setSelectedImgTarefa(selectedRotina.image);
    }
  };

  useEffect(() => {
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      setItems(JSON.parse(savedSchedule));
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen my-6">
      <ToastContainer />
      <form
        className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 max-w-5xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
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
          <Select
  options={daysWeek.map(({ semana }) => ({ value: semana, label: semana }))}
  isMulti={true}
  name="days"
  placeholder="Selecione um ou mais dias da semana"
  onChange={(selected) =>
    setSelectedDays(selected ? selected.map((option) => option.value) : [])
  }
/>
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
        {selectedImgTarefa && (
          <img
            src={selectedImgTarefa}
            alt={selectedActivity}
            className="max-w-full mb-4"
          />
        )}
        <button
          type="submit"
          className="bg-green-primary hover:bg-green-700 text-white py-2 px-4 rounded-full"
        >
          Adicionar Atividade
        </button>
      </form>
    </div>
    );
  });
