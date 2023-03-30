import Button from "../Button/Button";
import styles from "../Hero/Hero.module.css";
import Spheres from "../Spheres/Spheres";
import { motion } from "framer-motion";
import { containerVariants } from "@src/utils/framer";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <Spheres />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.wrapper}
        >
          <motion.div className={styles.name} variants={containerVariants}>
            Hi, I&apos;m Josh
          </motion.div>
          <motion.h1 className={styles.title} variants={containerVariants}>
            Front end developer
          </motion.h1>
          <motion.p className={styles.paragraph} variants={containerVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa,
            fuga, ea delectus qui natus, repellendus odio ut non excepturi
          </motion.p>
          <motion.a
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={containerVariants}
            href="mailto: joshkellerman9@gmail.com"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
