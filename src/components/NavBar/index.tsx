import Link from "../Link";
import Text from "../Text";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const linkList = [
    { displayName: "Gifting", href: "#gifting" },
    { displayName: "Travel", href: "#travel" },
    { displayName: "Adults Welcome", href: "#adults_Welcome" },
    { displayName: "Art & Home Décor", href: "#art_Home" },
    { displayName: "Space", href: "#space" },
    { displayName: "Pop Culture", href: "#pop_Culture" },
    { displayName: "Toddlers", href: "#toddlers" },
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
