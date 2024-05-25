import Link from "../Link";
import Text from "../Text";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const linkList = [
    { displayName: "Gifting", href: "#Gifting" },
    { displayName: "Travel", href: "#Travel" },
    { displayName: "Adults Welcome", href: "#Adults_Welcome" },
    { displayName: "Art & Home Décor", href: "#Art_Home" },
    { displayName: "Space", href: "#Space" },
    { displayName: "Pop Culture", href: "#Pop_Culture" },
    { displayName: "Toddlers", href: "#Toddlers" },
    {
      displayName: "Real World Role Playing",
      href: "#Real_World_Role_Playing",
    },
  ];

  return (
    <nav className={styles.navBar}>
      {linkList.map(({ displayName, href }) => (
        <Link href={href} key={href.replace(/#/g, "")}>
          <Text as="span">{displayName}</Text>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
