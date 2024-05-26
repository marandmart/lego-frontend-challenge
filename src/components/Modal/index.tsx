import React, { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import brandLogo from "../../assets/images/Brand Logo.png";
import Button from "../Button";
import requestIcon from "../../assets/icons/shoppingbag.svg";
import contactIcon from "../../assets/icons/message-circle.svg";
import homeIcon from "../../assets/icons/home.svg";
import Title from "../Title";
import Text from "../Text";
import NavBar from "../NavBar";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
        <div className={styles.themeLine}></div>
        <header className={styles.modalHeader}>
          <div className={styles.modalClose}>
            <img src={brandLogo} className={styles.logo} alt="Lego Logo" />
            <button className={styles.closeButton} onClick={handleClose}>
              X
            </button>
          </div>
          <div className={styles.modalHeaderBtns}>
            <Button type="text">
              <div className={styles.modalHeaderBtn}>
                <img src={homeIcon} alt="Contact bubble icon" />
                <Title level={4}>Home</Title>
              </div>
            </Button>
            <Button type="text">
              <div className={styles.modalHeaderBtn}>
                <img src={requestIcon} alt="Request icon" />
                <Title level={4}>Requests</Title>
              </div>
            </Button>
            <Button type="text">
              <div className={styles.modalHeaderBtn}>
                <img src={contactIcon} alt="Contact bubble icon" />
                <Title level={4}>Contact Us</Title>
              </div>
            </Button>
          </div>
          <div className={styles.themeTitle}>
            <Text>Themes</Text>
          </div>
          <NavBar vertical />
        </header>
        <div className={styles.modalContentSets}>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
          <div>Algo</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
