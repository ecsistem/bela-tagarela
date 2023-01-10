import React, { useState } from 'react';
import AccordionLayout from '../AccordionLayout';

interface AccordionProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = () => {
    const [activeIndex, setActiveIndex] = useState(1);

  return (
      <div className='flex flex-col justify-center items-center'>
          <AccordionLayout 
            title="De onde surgiu a ideia do projeto?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Texto aqui    
          </AccordionLayout>

          <AccordionLayout 
            title="Como faço para ultilizar?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Texto aqui 
          </AccordionLayout>
          <AccordionLayout 
            title="Posso sugerir melhorias?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Texto aqui 
          </AccordionLayout>
      </div>
  );
};

export default Accordion;