import styles from "../DesktopScreenshot/DesktopScreenshot.module.css";
import Image from "next/image";
import MenuBar from "../MenuBar/MenuBar";
import { motion } from "framer-motion";
import { variants } from "@src/utils/framer";

const DesktopScreenshot = ({ image }) => {
  return (
    <>
      <motion.div
        className={styles.desktopImageWrapper}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness: 200,
          mass: 1,
          damping: 40,
        }}
        viewport={{ once: true, amount: "some" }}
      >
        <MenuBar />
        <div className={styles.screenshotDesktopWrapper}>
          <Image
            src={image}
            alt="app screenshot"
            className={styles.screenshotDesktop}
            width={3024}
            height={1940}
            sizes="(max-width: 48em) 100vw,
                  70vw"
          />
        </div>
      </motion.div>
    </>
  );
};

export default DesktopScreenshot;
