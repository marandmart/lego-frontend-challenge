import { MouseEventHandler, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(false);
  };

  const openModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(true);
  };

  return {
    closeModal,
    openModal,
    isOpen,
  };
};
