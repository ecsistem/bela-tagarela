import { Header } from "../../../components/Header";
import { Modal } from "../../../components/Modal";
import { HabitForm } from "../../../components/FormularioRotina/"
import { Rotina } from "../../Rotina";
import { Footer } from "../../../components/Footer";
import { useState } from "react";
export function VisualizarRotina(){
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
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
            <button className="bg-green-primary text-white py-2 px-4 rounded-lg my-8 items-center content-center mr-4" onClick={handleOpenModal}>Cadastrar Rotina</button>
                </div>
                <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2>Adicionar uma atividade</h2>
        <p className="mb-6">Organize como será seu dia.</p>
        <HabitForm />
      </Modal>
        <Rotina />
        <Footer />
        </>
    )
}