import { useState } from "react";

interface ScheduleItem {
    day: string;
    time:string;
    activity: string;
    imgTarefa: string;
  }
  
  interface RenderListItemProps {
    item: ScheduleItem;
    index: number; // change key to index
    handleDelete: (index: number) => void; // add handleDelete prop
  }
  export function RenderListItem({ item, index, handleDelete }: RenderListItemProps){ // destructure props
    return (
      <li key={index}>
        {item.day} às {item.time}: {item.activity}
        <img src={item.imgTarefa} width={64} alt="" />
        <button onClick={() => handleDelete(index)}>Apagar</button>
      </li>
    )
  }