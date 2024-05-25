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
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "primary",
  className,
}) => {
  return (
    <button className={`${styles[type]}${` ${className}`}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
