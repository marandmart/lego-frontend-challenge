import styles from "./Footer.module.scss";
import Text from "../Text";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text type="small">
        LEGO, the LEGO logo and the Brick and Knob configurations are trademarks
        of the LEGO Group. ©2022 The LEGO Group.
      </Text>
    </footer>
  );
};

export default Footer;
