import React, { useCallback, useState } from 'react';
import { ImArrowRight2 } from "react-icons/im";
import LayoutCard from "../../data/layoutCard.json";
import imageCards from "../../data/imageCards.json";

export function MultiStep() {
  const [currentStep, setCurrentStep] = useState(1);
  const [WidthLayout, setWidthLayout] = useState(3);
  const [HeightLayout, setHeightLayout] = useState(3);
  


  const [selectedText, setSelectedText] = useState<string>("");
  const [selectedTexArray, setSelectedTexArray] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");


  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);
  const handleImageDrop = (image: string, text: string) => {
    if (selectedImages.length < calculate) {
      setSelectedImages([...selectedImages, image]);
      setSelectedTexArray([...selectedTexArray, text]);
      setSelectedText(`${selectedText} ${text}`);
    }
    else {
      alert(`Limeite máximo de ${calculate} atigido`);
    }
  };

  const Limpar = () => {
    setSelectedImages([]);
    setSelectedText("");
    setSelectedTexArray([]);
  };

  const selectCardLayout = (width: number, height: number) => {
      Limpar()
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
  const calculate = WidthLayout*HeightLayout;


  // console.log(currentStep);

  return (
    <div>
      <div className='flex justify-center gap-1 md:gap-8 items-center my-8 flex-nowrap'>
      {currentStep >= 1 ?  
      <div className='flex flex-col'>
        <p className='text-center text-green-tertiary'>Layout</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center'>  
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(1)}>1</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-center text-green-tertiary'>Layout</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(1)}>1</button>  
        </div>
        </div>}
        {currentStep >= 2 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center pl-8'>Figuras</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center'>  
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' />
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(2)}>2</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Figuras</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(2)}>2</button>  
        </div>
        </div>}
        {currentStep >= 3 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center pl-6'>Dados</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center'>  
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' />
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(3)}>3</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Dados</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(3)}>3</button> 
        </div>
        </div>}
        {currentStep >= 4 ?  
      <div className='flex flex-col'>
        <p className='text-green-tertiary text-center pl-7'>Salvar</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center'> 
        < ImArrowRight2 className='text-green-tertiary w-6 h-6' /> 
        <button className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:" onClick={() => setCurrentStep(4)}>4</button>  
        </div>
        </div> : 
        <div className='flex flex-col'>
        <p className='text-green-tertiary text-center'>Salvar</p>
        <div className='flex flex-row gap-1 md:gap-8 items-center justify-center'>  
        <button className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary" onClick={() => setCurrentStep(4)}>4</button>  
        </div>
        </div>}
        
       
      </div>
      <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 1 ? '' : 'hidden'}`}>
      <p className="text-gray-600 my-6">Selecione um layout de acordo com o tamanho da prancha que deseja</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 [&>:not(:hover)]:scale-90 [&>:not(:hover)]:bg-card-primary">
              {LayoutCard
                .map((layout, index) => (
                  <div
                    key={index}
                    className="max-w-sm rounded-lg shadow-lg m-4 cursor-pointer  bg-green-primary selection:bg-green-primary"
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
        <div className='flex flex-row gap-4'>
      <button className='bg-orange-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleBack}>Voltar</button>
      <button className='bg-green-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleNext}>Avançar</button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 ">
            {
            selectedImages.map((image, index) => {
              return (
                <div
                key={index}
                  className="max-w-[5rem] rounded-lg bg-white shadow-lg m-4"
                  >
                  <img className="w-full" src={image} alt="" />
                  <p className="text-center">{selectedTexArray[index]}</p>
                </div>
              );
            })}
          </div>
          <div className="flex">
          <aside className="w-1/4">
            <div className="px-3 py-4 overflow-y-auto rounded bg-green-primary h-[80vh]">
              <h2 className="text-orange-secundary text-center">Selecione uma categorias👇🏽</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    onClick={() => handleCategorySelect("all")}
                    className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-orange-primary"
                  >
                    <span className="mx-auto">todos</span>
                  </a>
                </li>
                {imageCards
                  .filter(
                    (category, index, self) =>
                      self.findIndex(
                        (item) => item.category === category.category
                      ) === index
                  )
                  .map((category) => (
                    <li key={category.category}>
                      <a
                        onClick={() => handleCategorySelect(category.category)}
                        className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-orange-primary"
                      >
                        <span className="mx-auto">{category.category}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
          <div className="w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 [&>:not(:hover)]:scale-90 [&>:not(:hover)]:bg-white">
              {imageCards
                .filter((imageCard) => {
                  if (selectedCategory === "all") {
                    return true;
                  } else {
                    return imageCard.category === selectedCategory;
                  }
                })
                .map((image, index) => (
                  <div
                    key={index}
                    className="max-w-sm rounded-lg shadow-lg m-4 cursor-pointer "
                    draggable
                    onDragEnd={() => handleImageDrop(image.image, image.text)}
                    onClick={() => handleImageDrop(image.image, image.text)}
                  >
                    <img className="w-full" src={image.image} alt={image.text} />
                    <p className="py-4 font-bold text-xl mb-2 text-center">
                      {image.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          </div>


        
        {/* Próximo passo */}
      </div>
      <div className={`flex flex-col content-center items-center step-${currentStep} ${currentStep === 3 ? '' : 'hidden'}`}>
      <h2 className="text-lg font-medium mb-4">Etapa {currentStep}</h2>
      <div className='flex flex-row gap-4'>
      <button className='bg-orange-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleBack}>Voltar</button>
      <button className='bg-green-primary text-white py-2 px-4 rounded-lg my-8' onClick={handleNext}>Avançar</button>
        </div>
      <div className="rounded bg-green-primary content-center items-center justify-center">
          <div className={`grid grid-cols-${WidthLayout.toString()} gap-4 border-b-4 border-cyan-50`}>
      {
        selectedImages.map((image, index) => (
          <div
          key={index * selectedImages.length}
          className="max-w-[5rem] rounded-lg bg-white shadow-lg m-4"
          >
            <img className="w-full" src={image} alt="" />
            <p className="text-center">{selectedTexArray[index]}</p>
          </div>
        ))
      }
      
    </div>
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

