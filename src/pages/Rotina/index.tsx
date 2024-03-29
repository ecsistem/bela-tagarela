import { RenderListItem } from "../../components/RenderList";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  daysWeek  from "../../data/daysWeek.json"

export interface ScheduleItem {
  id: string;
  day: string;
  time:string;
  activity: string;
  imgTarefa: string;
}

export function Rotina() {
  const [items, setItems] = useState<ScheduleItem[]>(JSON.parse(localStorage.getItem('schedule') || '[]'));

  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem('schedule', JSON.stringify(newItems));
    toast.success('Tarefa removida com sucesso!');
  };

  const filterByDay = (day: string) => {
    return items
      .filter((item) => item.day === day)
      .sort((a, b) => {
        return Number.parseInt(a.time.replace(':', '')) - Number.parseInt(b.time.replace(':', ''))
      });
};

  return (
    <div className="flex justify-between place-content-center gap-4 overflow-x-scroll px-4 container mx-auto my-10">
  <ToastContainer />
  {daysWeek.map((day) => (
    <ul className="text-center text-green-tertiary ">{day.semana}
      {filterByDay(day.semana).map((item, index) => (
        <RenderListItem key={index} item={item} index={index} handleDelete={handleDelete} />
      ))}
    </ul>
  ))}
</div>
  );
}