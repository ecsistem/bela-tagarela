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

      <div key={index} className="bg-white rounded-md shadow p-4 mx-auto my-4 w-80">
        <div className="flex text-center">

        <img src={item.imgTarefa} width={64} alt="" className="mt-2" />
        <div>
        <p className="text-lg font-medium text-green-primary">{item.activity}</p>

        <p className="text-lg font-medium text-gray-800">{item.day} às {item.time}</p>
        </div>
        </div>
      <button onClick={() => handleDelete(index)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">Apagar</button>
      </div>

    )
  }