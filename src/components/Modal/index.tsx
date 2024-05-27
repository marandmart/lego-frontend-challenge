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
import architecture from "./assets/logos/architecture_logo.png";
import city from "./assets/logos/city_logo.png";
import creator from "./assets/logos/creator_logo.png";
import dots from "./assets/logos/dots_logo.png";
import duplo from "./assets/logos/duplo_logo.png";
import friends from "./assets/logos/friends_logo.png";
import ideas from "./assets/logos/ideas_logo.png";
import minifigures from "./assets/logos/minifigures_logo.png";
import technic from "./assets/logos/technic_logo.png";

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

  const logos = [
    { src: architecture, alt: "architecture" },
    { src: city, alt: "city" },
    { src: creator, alt: "creator" },
    { src: dots, alt: "dots" },
    { src: duplo, alt: "duplo" },
    { src: friends, alt: "friends" },
    { src: ideas, alt: "ideas" },
    { src: minifigures, alt: "minifigures" },
    { src: technic, alt: "technic" },
  ];

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
