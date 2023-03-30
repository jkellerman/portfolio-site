import Image from "next/image";
import styles from "../Spheres/Spheres.module.css";
import img from "@/public/assets/sphere.webp";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 262,
      damping: 31,
      mass: 1,
    },
  },
};

const Spheres = ({ about }) => {
  return (
    <>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Image src={img} alt="" sizes="5vw" />
      </motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Image src={img} alt="" sizes="5vw" />
      </motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </>
  );
};

export default Spheres;
