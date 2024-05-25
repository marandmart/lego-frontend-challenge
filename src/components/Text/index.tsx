import styles from "./Text.module.scss";

interface TextProps {
  content: string;
  type?: "large" | "regular" | "large-regular" | "small";
}

const Text: React.FC<TextProps> = ({ content, type = "regular" }) => {
  return <p className={styles[`text--${type}`]}>{content}</p>;
};

export default Text;
