import { RenderListItem } from "../../components/RenderList";
import { useState } from "react";
export interface ScheduleItem {
    day: string;
    time:string;
    activity: string;
    imgTarefa: string;
  }
  

export function Rotina(){
    const [items, setItems] = useState<ScheduleItem[]>(JSON.parse(localStorage.getItem('schedule') || '[]'));
    const handleDelete = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        localStorage.setItem('schedule', JSON.stringify(newItems));
      };

    return(
      <div className="container justify-center items-center">        <ul>
        {items.map((item, index) => (
          <RenderListItem key={index} item={item} index={index} handleDelete={handleDelete} />
        ))}
      </ul>
        </div>
    )
}