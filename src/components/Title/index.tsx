import styles from "./Title.module.scss";

interface TitleProps {
  level: 1 | 2 | 3 | 4;
  children: string;
  bold?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, level, bold }) => {
  const classNames = `${styles[`heading${level}`]}${
    bold ? ` ${styles["heading--bold"]}` : ""
  }`;
  const tagDict = {
    1: <h1 className={classNames}>{children}</h1>,
    2: <h2 className={classNames}>{children}</h2>,
    3: <h3 className={classNames}>{children}</h3>,
    4: <h4 className={classNames}>{children}</h4>,
  };

  return <>{tagDict[level]}</>;
};

export default Title;
