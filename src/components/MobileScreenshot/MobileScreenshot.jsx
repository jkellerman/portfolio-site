import Image from "next/image";
import styles from "../MobileScreenshot/MobileScreenshot.module.css";
import { motion } from "framer-motion";
import { variants } from "@src/utils/framer";

const MobileScreenshot = ({ image }) => {
  return (
    <>
      <motion.div
        className={styles.mobileImageWrapper}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 0.05,
          mass: 1,
          damping: 40,
        }}
      >
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
      </motion.div>
    </>
  );
};

export default MobileScreenshot;
