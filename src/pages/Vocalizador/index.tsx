import { useCallback, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackToTopButton } from './../../components/BackToTopButton'
import imageCards from "../../data/imageCards.json";
export function Vocalizador(){
    const [selectedText, setSelectedText] = useState<string>("");
    const [selectedTexArray, setSelectedTexArray] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const startSpeech = () => {
      speechSynthesis.speak(new SpeechSynthesisUtterance(selectedText));
    };
    const Limpar = () => {
      setSelectedImages([]);
      setSelectedText("");
      setSelectedTexArray([]);
    };
    const handleCategorySelect = useCallback((category: string) => {
      setSelectedCategory(category);
    }, []);
    const handleImageDrop = (image: string, text: string) => {
      if (selectedImages.length < 8) {
        setSelectedImages([...selectedImages, image]);
        setSelectedTexArray([...selectedTexArray, text]);
        setSelectedText(`${selectedText} ${text}`);
      } else {
        alert("Limeite máximo de 8 atigido");
      }
    };
    console.log(1);
    return (
      <div className="">
        <Header />
        <div className="flex flex-col justify-center content-center items-center">
          <h1 className="text-xl font-bold my-8 text-green-tertiary">Bem vindo(a) ao Vocalizador</h1>
          <div className="grid grid-cols-4 gap-4 max-w-xl mb-6">
          {
        selectedImages.map((image, index) => (
          <div
          key={index * selectedImages.length}
          className="max-w-[6rem] rounded-lg bg-white text-black shadow-lg overflow-hidden"
          >
            <img className="w-full" src={image} alt="" />
            <p className="text-center w-full text-sm mb-2">{selectedTexArray[index]}</p>
          </div>
        ))
      } 
          </div>
          {selectedImages.length != 0 ? (
            <div className="text-center">
              <label className="text-green-tertiary">Frase Formada:👇🏽</label>
              <div className="p-4 text-orange-primary">{selectedText}</div>
            </div>
          ) : (
            <label className="text-green-tertiary">Selecione suas imagens para formar frase</label>
          )}
          <div className='flex flex-row gap-4'>
      <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg my-8' onClick={Limpar}>Limpar</button>
      <button className='bg-green-primary hover:bg-green-hover text-white py-2 px-4 rounded-lg my-8' onClick={startSpeech}>Falar</button>
        </div>

        </div>
        <div className="flex">
          <aside className="w-1/4">
            <div className="overflow-y-auto rounded bg-green-primary h-full">
            <h2 className="text-orange-secundary text-center">Selecione uma categorias👇🏽</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    onClick={() => handleCategorySelect("all")}
                    className="flex items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-100 dark:hover:bg-orange-primary"
                  >
                    <span className="mx-auto">Todos</span>
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
                        className="flex items-center p-2 text-base font-normal text-white  hover:bg-orange-primary"
                      >
                        <span className="px-auto text-center w-full">{category.category}</span>
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
                    <p className="py-4 font-bold w-full text-sm mb-2 text-center">
                      {image.name}
                    </p>
                  </div>
                ))}
            </div>
          <BackToTopButton/>
          </div>
          </div>
        <Footer />
      </div>
    );
  };
