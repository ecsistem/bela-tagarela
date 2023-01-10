import React from 'react';
import { BsDashCircle, BsFillPlusCircleFill } from 'react-icons/bs';

interface AccordionLayoutProps {
  title: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const AccordionLayout: React.FC<AccordionLayoutProps> = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index: number) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex justify-center w-[100%] sm:w-[80%] p-2 mt-1 bg-white-primary'>
            <div className='flex px-4'>
                <div className='text-white font-bold'>{title}</div>
            </div>
            <div className="flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <BsDashCircle className='w-8 h-8' />
                : <BsFillPlusCircleFill className='w-8 h-8' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
              {children}
            </div>
        )}
    </>
  );
};

export default AccordionLayout;