import React, { useCallback, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imageCards from "../../data/imageCards.json";
export function SpeechSynthesis(){
    const [selectedText, setSelectedText] = useState("");
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
          <h1 className="text-xl font-bold mb-4">Bem vindo(a) ao Vocalizador</h1>
          <div className="grid grid-cols-4 gap-4 max-w-xl">
            {selectedImages.map((image, index) => {
              return (
                <div
                key={index}
                  className="max-w-[5rem] rounded-lg shadow-lg m-4"
                  >
                  <img className="w-full" src={image} alt="" />
                  <p className="text-center">{selectedTexArray[index]}</p>
                </div>
              );
            })}
          </div>
          {selectedImages.length != 0 ? (
            <div className="text-center">
              <label htmlFor="">Frase Formada:👇🏽</label>
              <div className="p-4">{selectedText}</div>
            </div>
          ) : (
            <label htmlFor="">Selecione suas imagens para formar frase</label>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
            onClick={startSpeech}
          >
            Falar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={Limpar}
          >
            Limpar
          </button>
        </div>
        <div className="flex">
          <aside className="w-1/4">
            <div className="px-3 py-4 overflow-y-auto rounded bg-green-primary h-5/6">
              <h2 className="text-orange-secundary text-center">Selecione uma categorias👇🏽</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    onClick={() => handleCategorySelect("all")}
                    className="flex items-center p-2 text-base font-normal text-white-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-orange-primary"
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
                        className="flex items-center p-2 text-base font-normal text-white-primary rounded-lg  hover:bg-orange-primary"
                      >
                        <span className="mx-auto">{category.category}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
          <div className="w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 [&>:not(:hover)]:scale-90 [&>:not(:hover)]:bg-white-primary">
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
        <Footer />
      </div>
    );
  };
