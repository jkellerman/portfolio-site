import Image from "next/image";
import styles from "../MobileScreenshot/MobileScreenshot.module.css";

const MobileScreenshot = ({ image }) => {
  return (
    <>
      <div className={styles.mobileImageWrapper}>
        <div className={styles.menuBar}></div>
        <div className={styles.screenshotMobileWrapper}>
          <Image
            src={image}
            alt="app screenshot"
            className={styles.screenshotMobile}
            width={750}
            height={1334}
            sizes="(max-width: 48em) 75vw,
                  33vw"
          />
        </div>
      </div>
    </>
  );
};

export default MobileScreenshot;
