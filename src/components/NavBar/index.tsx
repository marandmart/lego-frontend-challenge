import Link from "../Link";
import Text from "../Text";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  vertical?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ vertical }) => {
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
    <nav
      className={`${styles.navBar}${
        vertical ? ` ${styles["navBar--vertical"]}` : ""
      }`}
    >
      {linkList.map(({ displayName, href }) => (
        <Link href={href} key={href.replace(/#/g, "")}>
          <Text as="span" type={vertical ? "large" : "regular"}>
            {displayName}
          </Text>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
