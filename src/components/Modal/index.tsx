import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import brandLogo from "../../assets/images/Brand Logo.png";
import Button from "../Button";
import requestIcon from "../../assets/icons/shoppingbag.svg";
import contactIcon from "../../assets/icons/message-circle.svg";
import homeIcon from "../../assets/icons/home.svg";
import Title from "../Title";
import Text from "../Text";
import NavBar from "../NavBar";
import { logos } from "./utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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

  const handleClose = () => {
    setTimeout(onClose, 300);
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : ""}`}>
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
              <div className={`${styles.modalHeaderBtn} ${styles.bar}`}>
                <img src={homeIcon} alt="Contact bubble icon" />
                <Title level={4}>Home</Title>
              </div>
            </Button>
            <Button type="text">
              <div className={`${styles.modalHeaderBtn} ${styles.bar}`}>
                <img src={requestIcon} alt="Request icon" />
                <Title level={4}>Requests</Title>
              </div>
            </Button>
            <Button type="text">
              <div className={`${styles.modalHeaderBtn} ${styles.bar}`}>
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
          {logos.map((img) => (
            <div key={img.alt}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
