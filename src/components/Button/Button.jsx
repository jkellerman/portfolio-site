import styles from "../Button/Button.module.css";
import { motion } from "framer-motion";
import { variants } from "@src/utils/framer";

const Button = ({ children, handleClick }) => {
  return (
    <motion.button
      className={styles.button}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
        stiffness: 160,
        delay: 0.8,
        mass: 1,
        damping: 60,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
