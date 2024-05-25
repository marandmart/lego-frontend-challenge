import styles from "./Text.module.scss";

interface TextProps {
  children: string;
  type?: "large" | "regular" | "large-regular" | "small";
  as?: "p" | "span";
}

const Text: React.FC<TextProps> = ({
  type = "regular",
  as: Component = "p",
  children,
}) => {
  return <Component className={styles[`text--${type}`]}>{children}</Component>;
};

export default Text;
