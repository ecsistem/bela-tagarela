import { RenderListItem } from "../../components/RenderList";
import { useState } from "react";
import  daysWeek  from "../../data/daysWeek.json"

export interface ScheduleItem {
  day: string;
  time:string;
  activity: string;
  imgTarefa: string;
}

export function Rotina() {
  const [items, setItems] = useState<ScheduleItem[]>(JSON.parse(localStorage.getItem('schedule') || '[]'));

  const handleDelete = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem('schedule', JSON.stringify(newItems));
  };

  const filterByDay = (day: string) => {
    return items.filter((item) => item.day === day);
  };

  return (
    <div className="container justify-center items-center" style={{ display: "flex", gap: "20px" }}>
      {daysWeek.map((day) => (
        <ul>
        {filterByDay(day.semana).map((item, index) => (
          <RenderListItem key={index} item={item} index={index} handleDelete={handleDelete} />
        ))}
      </ul>
      ))}
    </div>
  );
}