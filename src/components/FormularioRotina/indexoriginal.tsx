export function HabitForm() {
  

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 max-w-5xl">
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="theme"
              >
                Nome
              </label>
              <select className="border border-gray-400 p-2 w-full"
                id="theme"
                // value={formData.theme}
                // onChange={handleInputChange}>
                >
                     <option value="volvo">Selecione um nome</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
                
                </select>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="userName"
              >
                Dias
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="userName"
                type="text"
                // value={formData.userName}
                // onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-green-tertiary"
                htmlFor="backgroundColor"
              >
                Hora
              </label>
              <input
                className="border border-gray-400 h-12 w-full"
                id="backgroundColor"
                type="time"
                // value={formData.backgroundColor}
                // onChange={handleInputChange}
              />
            </div>
          </form>
  );
}