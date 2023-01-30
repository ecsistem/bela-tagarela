import React, { useState } from 'react';
import { ImArrowRight2 } from "react-icons/im";
import LayoutCard from "../../data/layoutCard.json";

export function MultiStep() {
  const [currentStep, setCurrentStep] = useState(1);
  const [widthLayout, setWidthLayout] = useState(2);
  const [HeightLayout, setHeightLayout] = useState(2);

  const selectCardLayout = (width: number, height: number) => {
      setWidthLayout(width);
      setHeightLayout(height);
      handleNext()
  };

  const handleNext = () => {
    if (currentStep < 4) {
    setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
    setCurrentStep(currentStep - 1);
    }
  };
  console.log(widthLayout,HeightLayout);


  // console.log(currentStep);

  return (
    <div>
      <div className='flex justify-center gap-2 items-center my-8'>
      {currentStep >= 1 ?  
      <div className='flex flex-col'>
        <p className='text-center text-green-tertiary'>Layout</p>
        <div className='flex flex-row gap-2 items-center'>  
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(1)}>1</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-center text-green-tertiary'>Layout</p>
        <div className='flex flex-row gap-4 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(1)}>1</button>  
        </div>
        </div>}
        {currentStep >= 2 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center pl-8'>Figuras</p>
        <div className='flex flex-row gap-2 items-center'>  
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' />
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(2)}>2</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Figuras</p>
        <div className='flex flex-row gap-2 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(2)}>2</button>  
        </div>
        </div>}
        {currentStep >= 3 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center pl-5'>Informações</p>
        <div className='flex flex-row gap-2 items-center'>  
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' />
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(3)}>3</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Informações</p>
        <div className='flex flex-row gap-4 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(3)}>3</button> 
        </div>
        </div>}
        {currentStep >= 4 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Salvar</p>
        <div className='flex flex-row gap-4 items-center'> 
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' /> 
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(4)}>4</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Salvar</p>
        <div className='flex flex-row gap-4 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(4)}>4</button>  
        </div>
        </div>}
        
       
      </div>
      <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 1 ? '' : 'hidden'}`}>
      <p className="text-gray-600 my-6">Selecione um layout de acordo com o tamanho da prancha que deseja</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 [&>:not(:hover)]:scale-90">
              {LayoutCard
                .map((layout, index) => (
                  <div
                    key={index}
                    className="max-w-sm rounded-lg shadow-lg m-4 cursor-pointer bg-green-primary"
                    draggable
                    onClick={() => selectCardLayout(layout.width, layout.height)}
                  >
                    <img className="w-full p-8" src={layout.image} alt={layout.text} />
                    <p className="py-4 font-bold text-xl mb-2 text-center">
                      {layout.text}
                    </p>
                  </div>
                ))}
            </div>
      </div>


        <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 2 ? '' : 'hidden'}`}>
        <h2 className="text-lg font-medium mb-4">Etapa {currentStep}</h2>
        {/* Passo atual */}
      <div className="flex">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2">Vermelho</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2">Verde</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Azul</button>
        </div>
        <div className='flex flex-row gap-4'>
      <button className='bg-orange-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleBack}>Voltar</button>
      <button className='bg-green-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleNext}>Avançar</button>
        </div>
        {/* Próximo passo */}
      </div>
      <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 3 ? '' : 'hidden'}`}>
      <h2 className="text-lg font-medium mb-4">Etapa {currentStep}</h2>
      <div className='flex flex-row gap-4'>
      <button className='bg-orange-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleBack}>Voltar</button>
      <button className='bg-green-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleNext}>Avançar</button>
        </div>
        {/* Passo posterior ao próximo */}
      </div>
      <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 4 ? '' : 'hidden'}`}>
      <h2 className="text-lg font-medium mb-4">Etapa {currentStep}</h2>
        {/* Passo posterior ao próximo */}
        <div className='flex flex-row gap-4'>
      <button className='bg-orange-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleBack}>Voltar</button>
      <button className='bg-green-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleNext}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

