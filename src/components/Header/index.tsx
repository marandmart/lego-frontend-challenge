import NavBar from "../NavBar";
import Text from "../Text";
import styles from "./Header.module.scss";
import brandLogo from "../../assets/images/Brand Logo.png";
import categoriesIcon from "../../assets/icons/Categories_Icon.svg";
import searchIcon from "../../assets/icons/search.svg";
import requestIcon from "../../assets/icons/shoppingbag.svg";
import contactIcon from "../../assets/icons/message-circle.svg";
import Button from "../Button";
import { useContext } from "react";
import { ModalContext } from "../context";

const Header = () => {
  const { openModal } = useContext(ModalContext);

  const handleOpenMenu = () => {
    openModal();
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles.menu}>
          <img src={brandLogo} className={styles.logo} alt="Lego Logo" />
          <Button type="text" onClick={handleOpenMenu}>
            <div className={styles.headerBtn}>
              <img src={categoriesIcon} alt="Categories icon" />
              <Text as="span" type="small">
                Categories
              </Text>
            </div>
          </Button>
        </div>
        <NavBar />
        <div className={styles.buttons}>
          <Button type="text">
            <div className={`${styles.headerBtn} ${styles.hidden}`}>
              <img src={contactIcon} alt="Contact bubble icon" />
              <Text as="span" type="small">
                Contact Us
              </Text>
            </div>
          </Button>
          <Button type="text">
            <div className={styles.headerBtn}>
              <img src={requestIcon} alt="Request icon" />
              <Text as="span" type="small">
                Request
              </Text>
            </div>
          </Button>
          <Button type="text">
            <div className={styles.headerBtn}>
              <img src={searchIcon} alt="Search icon" />
              <Text as="span" type="small">
                Search
              </Text>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
