import styles from "./Banner.module.scss";
import Text from "../Text";
import Button from "../Button";
import { useState } from "react";
import SoundOnIcon from "./assets/SoundOnIcon";
import SoundOffIcon from "./assets/SoundOffIcon";
import DownloadVideo from "./assets/DownloadVideo";

const Banner = () => {
  const [soundOn, setSoundOn] = useState<boolean>(false);
  return (
    <section>
      <div className={styles.video}>
        <div className={styles.message}>
          <Text type="large">Welcome to the</Text>
          <Text type="large">Play Matters Interactive Lookbook</Text>
        </div>
        <Button
          type="circular"
          onClick={() => setSoundOn((curr) => !curr)}
          className={styles.btnContent}
        >
          {soundOn ? <SoundOnIcon /> : <SoundOffIcon />}
        </Button>
        <Button
          type="circular--small"
          onClick={() => setSoundOn((curr) => !curr)}
          className={styles.btnContent}
        >
          <DownloadVideo />
        </Button>
        <div className={styles["scroll-message"]}>
          <Text as="span" type="small">
            Scroll down
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Banner;
