import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#fef6e7] rounded-lg p-4 max-w-md w-full text-center">
        <button onClick={onClose} className="absolute top-0 right-0 m-3 text-orange-primary hover:text-orange-primary">
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};