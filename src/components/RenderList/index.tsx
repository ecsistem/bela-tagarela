import { useState } from "react";

interface ScheduleItem {
    id: string;
    day: string;
    time:string;
    activity: string;
    imgTarefa: string;
  }
  
  interface RenderListItemProps {
    item: ScheduleItem;
    index: number; // change key to index
    handleDelete: (id: string) => void; // add handleDelete prop
  }
  export function RenderListItem({ item, index, handleDelete }: RenderListItemProps){ // destructure props
    return (

      <div key={index} className="bg-white rounded-md shadow p-4 mx-auto my-4 w-80">
        <div className="flex text-center">

        <img src={item.imgTarefa} width={64} alt="" className="mt-2" />
        <div>
        <p className="text-lg font-medium text-green-primary">{item.activity}</p>

        <p className="text-lg font-medium text-green-tertiary">{item.day} às {item.time}</p>
        </div>
        </div>
      <button onClick={() => handleDelete(item.id)} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4 w-full">Apagar</button>
      </div>

    )
  }