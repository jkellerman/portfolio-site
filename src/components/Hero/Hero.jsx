import styles from "../Hero/Hero.module.css";
import Spheres from "../Spheres/Spheres";
import { motion } from "framer-motion";
import { containerVariants } from "@src/utils/animations";
import Image from "next/image";
import img from "@/public/assets/icon.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <Spheres />
        <motion.div
          className={styles.imageWrapper}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 160,
              damping: 40,
              mass: 1,
            },
          }}
        >
          <Image
            src={img}
            alt="josh kellerman"
            priority
            sizes="(max-width: 48em) 33vw,
            10vw"
            className={styles.image}
          />
        </motion.div>
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
            Bringing Ideas to life on the Web.
          </motion.h1>
          <motion.p className={styles.paragraph} variants={containerVariants}>
            I&apos;m a front end developer, based in the UK, passionate about
            creating clean and functional web apps that enhance user
            experiences.
          </motion.p>
          <motion.a
            className={styles.button}
            variants={containerVariants}
            href="mailto:joshkellerman9@gmail.com"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
