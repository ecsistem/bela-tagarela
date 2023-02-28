import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
export function CadastrarRotina(){
    return(
        <>
        <Header />
        
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
                // value={formData.theme}
                // onChange={handleInputChange}
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
                // value={formData.userName}
                // onChange={handleInputChange}
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
                // value={formData.backgroundColor}
                // onChange={handleInputChange}
              />
            </div>
          </form>
        <Footer />
        </>
    )
}