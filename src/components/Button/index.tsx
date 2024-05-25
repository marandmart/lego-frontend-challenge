import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  type?:
    | "primary"
    | "secondary"
    | "circular"
    | "circular--small"
    | "circular--xsmall"
    | "close"
    | "text";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "primary",
}) => {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
