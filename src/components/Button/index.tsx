import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => {};
  type?:
    | "primary"
    | "secondary"
    | "circular"
    | "circular--small-1"
    | "circular--small-2"
    | "close"
    | "text";
  content: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  content,
  type = "primary",
}) => {
  return (
    <button className={styles[type]} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
