import React, { useCallback, useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { BackToTopButton } from "./../BackToTopButton";
import { CreatePDF } from "../../function/CreatePDF";
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
  const [formData, setFormData] = useState({
    userName: "",
    theme: "",
    backgroundColor: "#FFFFFF",
  });

  const handleInputChange = (event: { target: { id: any; value: any } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChange = (event: {
    target: { id: any; checked: any };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.checked,
    });
  };

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);
  const handleImageDrop = (image: string, text: string) => {
    if (selectedImages.length < calculate) {
      setSelectedImages([...selectedImages, image]);
      setSelectedTexArray([...selectedTexArray, text]);
      setSelectedText(`${selectedText} ${text}`);
    } else {
      alert(`Limeite máximo de ${calculate} atigido`);
    }
  };

  const Limpar = () => {
    setSelectedImages([]);
    setSelectedText("");
    setSelectedTexArray([]);
  };

  const selectCardLayout = (width: number, height: number) => {
    Limpar();
    setWidthLayout(width);
    setHeightLayout(height);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < 4) {
      if (selectedText == "" && currentStep == 2) {
        alert("Selecione uma imagem para continuar");
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  function handleSubmit() {
    CreatePDF({
      UserName: formData.userName,
      theme: formData.theme,
    });
    alert("Pdf está sendo gerado");
  }

  const calculate = WidthLayout * HeightLayout;

  return (
    <div className="Vocalizador">
      {currentStep === 1 ? (
        <h1 className="text-xl font-bold my-8 text-green-tertiary text-center">
          Bem vindo(a) a Prancha
        </h1>
      ) : (
        ""
      )}
      <div className="flex justify-center gap-1 md:gap-8 items-center my-8 flex-nowrap">
        {currentStep >= 1 ? (
          <div className="flex flex-col">
            <p className="text-center text-green-tertiary">Layout</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center">
              <button
                className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:"
                onClick={() => setCurrentStep(1)}
              >
                1
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-center text-green-tertiary">Layout</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center justify-center">
              <button
                className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary"
                onClick={() => setCurrentStep(1)}
              >
                1
              </button>
            </div>
          </div>
        )}
        {currentStep >= 2 ? (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center pl-8">Figuras</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center">
              <ImArrowRight2 className="text-green-tertiary w-6 h-6" />
              <button
                className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:"
                onClick={() => setCurrentStep(2)}
              >
                2
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center">Figuras</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center justify-center">
              <button
                className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary"
                onClick={() => setCurrentStep(2)}
              >
                2
              </button>
            </div>
          </div>
        )}
        {currentStep >= 3 ? (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center pl-6">Dados</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center">
              <ImArrowRight2 className="text-green-tertiary w-6 h-6" />
              <button
                className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:"
                onClick={() => setCurrentStep(3)}
              >
                3
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center">Dados</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center justify-center">
              <button
                className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary"
                onClick={() => setCurrentStep(3)}
              >
                3
              </button>
            </div>
          </div>
        )}
        {currentStep >= 4 ? (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center pl-7">Salvar</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center">
              <ImArrowRight2 className="text-green-tertiary w-6 h-6" />
              <button
                className="bg-orange-primary text-white w-16 h-16 rounded-full border-4  border-green-tertiary after:"
                onClick={() => setCurrentStep(4)}
              >
                4
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-green-tertiary text-center">Salvar</p>
            <div className="flex flex-row gap-1 md:gap-8 items-center justify-center">
              <button
                className="text-green-tertiary w-16 h-16 rounded-full border-4  border-green-tertiary"
                onClick={() => setCurrentStep(4)}
              >
                4
              </button>
            </div>
          </div>
        )}
      </div>
      {currentStep === 1 && (
        <div
          className={`flex flex-col content-center items-center step-${currentStep}`}
        >
          <p className="text-green-tertiary text-center my-6">
            Selecione um layout de acordo com o tamanho da prancha que deseja
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 [&>:not(:hover)]:scale-90 [&>:not(:hover)]:bg-card-primary">
            {LayoutCard.map((layout, index) => (
              <div
                key={index}
                className="max-w-sm rounded-lg shadow-lg m-4 cursor-pointer  bg-green-primary selection:bg-green-primary"
                draggable
                onClick={() => selectCardLayout(layout.width, layout.height)}
              >
                <img
                  className="w-full p-8"
                  src={layout.image}
                  alt={layout.text}
                />
                <p className="py-4 font-bold text-xl mb-2 text-center">
                  {layout.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div
          className={`flex flex-col content-center items-center step-${currentStep}`}
        >
          <p className="text-green-tertiary my-6">
            Selecione suas figuras para sua prancha
          </p>
          <div className="flex flex-row gap-4">
            <button
              className="bg-orange-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleBack}
            >
              Voltar
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg my-8"
              onClick={Limpar}
            >
              Limpar
            </button>
            <button
              className="bg-green-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleNext}
            >
              Avançar
            </button>
          </div>
          <div
            className={`grid gap-4  m-4`}
            style={{ gridTemplateColumns: `repeat(${WidthLayout}, 1fr)` }}
          >
            {selectedImages.map((image, index) => (
              <div
                key={index * selectedImages.length}
                className="max-w-[6rem] rounded-lg bg-white text-black shadow-lg overflow-hidden"
              >
                <img className="w-full" src={image} alt="" />
                <p className="text-center w-full text-sm mb-2">
                  {selectedTexArray[index]}
                </p>
              </div>
            ))}
          </div>
          <div className="flex">
            <aside className="w-1/4">
              <div className="overflow-y-auto rounded bg-green-primary h-full">
                <h2 className="text-orange-secundary text-center">
                  Selecione uma categorias👇🏽
                </h2>
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
                          onClick={() =>
                            handleCategorySelect(category.category)
                          }
                          className="flex items-center p-2 text-base font-normal text-white  hover:bg-orange-primary"
                        >
                          <span className="px-auto text-center w-full">
                            {category.category}
                          </span>
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
                      <img
                        className="w-full"
                        src={image.image}
                        alt={image.text}
                      />
                      <p className="py-4 font-bold w-full text-sm mb-2 text-center">
                        {image.name}
                      </p>
                    </div>
                  ))}
              </div>
              <BackToTopButton />
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div
          className={`flex flex-col content-center items-center step-${currentStep}`}
        >
          <h2 className="text-green-tertiary text-center my-6">
            Digite os dados de sua prancha
          </h2>

          <form className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 max-w-5xl">
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="theme"
              >
                Tema
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="theme"
                type="text"
                value={formData.theme}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="userName"
              >
                Usuário
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="userName"
                type="text"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="backgroundColor"
              >
                Cor do Fundo
              </label>
              <input
                className="border border-gray-400 h-12 w-full"
                id="backgroundColor"
                type="color"
                value={formData.backgroundColor}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <div className="flex flex-row gap-4">
            <button
              className="bg-orange-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleBack}
            >
              Voltar
            </button>
            <button
              className="bg-green-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleNext}
            >
              Avançar
            </button>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div
          className={`flex flex-col content-center items-center step-${currentStep} ${
            currentStep === 4 ? "" : "hidden"
          }`}
        >
          <h1 className="text-green-tertiary text-center mt-6">
            Prancha de {formData.theme}
          </h1>
          <h2 className="text-green-tertiary text-center mb-6">
            feita por {formData.userName}
          </h2>
          <div
            id="prancha"
            className={`rounded text-white text-center items-center justify-center w-full p-4`}
            style={{ backgroundColor: formData.backgroundColor }}
          >
            <div
              className={`place-items-center  grid gap-4  m-4 `}
              style={{ gridTemplateColumns: `repeat(${WidthLayout}, 1fr)` }}
            >
              {selectedImages.map((image, index) => (
                <div
                  key={index * selectedImages.length}
                  className=" rounded-lg bg-white text-black shadow-lg overflow-hidden"
                >
                  <img className="w-full" src={image} alt="" />
                  <p className="text-center w-full text-sm mb-2">
                    {selectedTexArray[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <button
              className="bg-orange-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleBack}
            >
              Voltar
            </button>
            <button
              className="bg-green-primary text-white py-2 px-4 rounded-lg my-8"
              onClick={handleSubmit}
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
