import styles from "./Link.module.scss";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  underlined?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, underlined, href }) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${
        underlined ? styles["link--underlined"] : ""
      }`}
    >
      {children}
    </a>
  );
};

export default Link;
