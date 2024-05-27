import { useContext } from "react";
import Link from "../Link";
import Text from "../Text";
import styles from "./NavBar.module.scss";
import { ModalContext } from "../../context/modal";

interface NavBarProps {
  vertical?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ vertical }) => {
  const linkList = [
    { displayName: "Gifting", href: "#gifting" },
    { displayName: "Travel", href: "#travel" },
    { displayName: "Adults Welcome", href: "#adults_welcome" },
    { displayName: "Art & Home Décor", href: "#art_home" },
    { displayName: "Space", href: "#space" },
    { displayName: "Pop Culture", href: "#pop_culture" },
    { displayName: "Toddlers", href: "#toddlers" },
    {
      displayName: "Real World Role Playing",
      href: "#real_world_role_playing",
    },
  ];

  const { closeModal } = useContext(ModalContext);

  const handleClickModalLink = () => {
    if (vertical) {
      closeModal();
    }
  };

  return (
    <nav
      className={`${styles.navBar}${
        vertical ? ` ${styles["navBar--vertical"]}` : ""
      }`}
    >
      {linkList.map(({ displayName, href }) => (
        <Link
          href={href}
          key={
            vertical
              ? `vertical-${href.replace(/#/g, "")}`
              : href.replace(/#/g, "")
          }
          inPage
          className={styles.link}
          onClick={handleClickModalLink}
        >
          <Text as="span" type={vertical ? "large" : "regular"}>
            {displayName}
          </Text>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
