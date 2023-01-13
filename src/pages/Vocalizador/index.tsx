import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import imageCards from "../../data/imageCards.json";

const SpeechSynthesis: React.FC = () => {
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
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  const handleImageDrop = (image: string, text: string) => {
    if (selectedImages.length < 8) {
      setSelectedImages([...selectedImages, image]);
      setSelectedTexArray([...selectedTexArray, text]);
      setSelectedText(`${selectedText} ${text}`);
    } else {
      alert("Limeite máximo de 8 atigido");
    }
  };
console.log(selectedTexArray);
  return (
    <div className="">
      <Header />
      <div className="flex flex-col justify-center content-center items-center">
      <h1 className="text-xl font-bold mb-4">
          Arraste a Imagem ou click para selecionar
        </h1>
        <div className="grid grid-cols-4 gap-4 max-w-xl">
          {selectedImages.map((image, index) => {
            return (
              <div key={index} className="max-w-[5rem] rounded-lg shadow-lg m-4">
                <img className="w-full" src={image} alt="" />
                <p>{selectedTexArray[index]}</p>
              </div>
            );
          })}
        </div>
        <div className="p-4">{selectedText}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          onClick={startSpeech}
          >
          Speak
          </button>
          <button
                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                 onClick={Limpar}
               >
          Limpar
          </button>
          </div>
      <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <div className="p-4">
          <button
            className="bg-green-primary text-orange-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            onClick={() => handleCategorySelect("all")}
          >
            Todos
          </button>
          {imageCards
            .filter(
              (category, index, self) =>
                self.findIndex((item) => item.category === category.category) ===
                index
            )
            .map((category) => (
              <button
                key={category.category}
                className="bg-green-primary text-orange-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                onClick={() => handleCategorySelect(category.category)}
              >
                {category.category}
              </button>
            ))}
        </div>
      </div>
      <div className="w-3/4">
        
        
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          className="max-w-sm rounded-lg shadow-lg m-4 cursor-pointer"
          draggable
          onDragEnd={() => handleImageDrop(image.image, image.text)}
          onClick={() => handleImageDrop(image.image, image.text)}
          >
          <img className="w-full" src={image.image} alt={image.text} />
          <div className="py-4">
                <div className="font-bold text-xl mb-2">{image.name}</div>
              </div>
          </div>
          ))}
          </div>
          </div>
          </div>
          <Footer />
          </div>
          );
          };
          
          export default SpeechSynthesis;
          
          