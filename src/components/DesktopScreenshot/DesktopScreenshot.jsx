import styles from "../DesktopScreenshot/DesktopScreenshot.module.css";
import Image from "next/image";
import MenuBar from "../MenuBar/MenuBar";

const DesktopScreenshot = ({ image }) => {
  return (
    <>
      <div className={styles.desktopImageWrapper}>
        <MenuBar />
        <div className={styles.screenshotDesktopWrapper}>
          <Image
            src={image}
            alt="app screenshot"
            className={styles.screenshotDesktop}
            width={3024}
            height={1940}
            sizes="(max-width: 48em) 100vw,
                  66vw"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopScreenshot;
