import { createContext } from "react";
import { useModal } from "./hooks/useModal";

interface ModalContextProps {
  closeModal: Function;
  openModal: Function;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

interface ModalProviderProps {
  children: React.ReactElement;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
