import styles from "./Banner.module.scss";
import Text from "../Text";
// import Button from "../Button";
// import { useState } from "react";
// import SoundOnIcon from "./assets/SoundOnIcon";
// import SoundOffIcon from "./assets/SoundOffIcon";
// import DownloadVideo from "./assets/DownloadVideo";
import legoBanner from "../../assets/images/banner/LEGO-Banner-MainBanner.jpg";
import ScrollDown from "./assets/ScrollDown";

const Banner = () => {
  // const [soundOn, setSoundOn] = useState<boolean>(false);
  return (
    <section className={styles.banner}>
      <div className={styles.video} style={{
          backgroundImage: `url(${legoBanner})`
        }}>
        <div className={styles.bannerSectionContainer}>
          {/* <div className={styles.videoBtnContainer}>
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
          </div> */}
          <div className={styles["scroll-message"]}>
            <Text as="span" type="small">
              Scroll down
            </Text>
            <ScrollDown />
          </div>
        </div>
      </div>
      {/* <div className={styles.message}>
        <div className={styles.messageContainer}>
          <Text type="large">Welcome to the</Text>
          <Text type="large">Play Matters Interactive Lookbook</Text>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
