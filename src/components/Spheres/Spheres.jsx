import Image from "next/image";
import styles from "../Spheres/Spheres.module.css";
import img from "@/public/assets/sphere.webp";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  easeIn,
  clamp,
  easeOut,
} from "framer-motion";

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
      stiffness: 160,
      damping: 40,
      mass: 1,
    },
  },
};

const Spheres = ({ about }) => {
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, 400, 800, 1200, 1600, 2000],
    [0, -40, -80, -120, -160, -200]
  );

  return (
    <>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{ translateY: y }}
      ></motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{ translateY: y }}
      >
        <Image src={img} alt="" sizes="5vw" priority />
      </motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{ translateY: y }}
      >
        <Image src={img} alt="" sizes="5vw" priority />
      </motion.div>
      <motion.div
        className={about ? `${styles.sphereAbout}` : styles.sphere}
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{ translateY: y }}
      ></motion.div>
    </>
  );
};

export default Spheres;
