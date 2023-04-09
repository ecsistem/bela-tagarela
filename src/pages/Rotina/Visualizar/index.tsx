import { Header } from "../../../components/Header";
import { Rotina } from "../../Rotina";
import { Footer } from "../../../components/Footer";
export function VisualizarRotina(){
    return(
        <>
        <Header />
        <div className="container mx-auto text-right my-4">

        <h1 className="text-xl font-bold my-8 text-green-tertiary text-center">
          Bem vindo(a) a Rotina Visual
        </h1>
        <p className="text-green-tertiary text-center my-6">
            Organize como será seu dia
          </p>
          <a
              className="bg-green-primary text-white py-2 px-4 rounded-lg my-8 items-center content-center sm:mr-4"
              href="/rotina/cadastrar"
              >
              Cadastrar Rotina
            </a>
                </div>
        <Rotina />
        <Footer />
        </>
    )
}