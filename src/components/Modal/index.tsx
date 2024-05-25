import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`${styles.modal} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
