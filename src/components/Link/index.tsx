import styles from "./Link.module.scss";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  underlined?: boolean;
  inPage?: boolean;
  onClick?: () => {};
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  underlined,
  href,
  onClick,
  inPage = false,
  className,
}) => {
  const handleLocalClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const element = document.getElementById(href.replace(/#/g, ""));
    if (element) {
      const yOffset = -93;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={inPage ? handleLocalClick : onClick}
      className={`${styles.link} ${
        underlined ? styles["link--underlined"] : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </a>
  );
};

export default Link;
