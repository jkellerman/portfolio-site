import Head from "next/head";
import Contact from "@src/components/Contact/Contact";
import styles from "@styles/about.module.css";
import Image from "next/image";
import Nav from "@src/components/Nav/Nav";
import Spheres from "@src/components/Spheres/Spheres";
import { motion } from "framer-motion";
import { variants } from "@src/utils/framer";
import img from "@/public/assets/josh.webp";

const About = () => {
  return (
    <>
      <Head>
        <title>About Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="About Josh Kellerman, Front End Developer"
        />
      </Head>
      <Nav />
      <main>
        <div className={styles.aboutContainer}>
          <Spheres about />
          <motion.div
            className={styles.imageWrapper}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 160,
              delay: 0.4,
              mass: 1,
              damping: 60,
            }}
          >
            <Image
              src={img}
              alt="Josh Kellerman"
              className={styles.image}
              priority
              sizes="(max-width: 48em) 85vw,
              66vw"
            />
          </motion.div>
          <div className={styles.contentWrapper}>
            <motion.span
              className={styles.subheading}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 160,
                delay: 0.6,
                mass: 1,
                damping: 60,
              }}
            >
              About me
            </motion.span>
            <motion.h1
              className={styles.heading}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 160,
                delay: 0.4,
                mass: 1,
                damping: 60,
              }}
            >
              I&apos;m Josh, a Front End Developer
            </motion.h1>
            <motion.p
              className={styles.paragraph}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 160,
                delay: 0.6,
                mass: 1,
                damping: 60,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus dignissimos dolores vero ut accusamus quasi quisquam eos,
              odio in mollitia voluptatum quas exercitationem. Et eligendi
              deserunt quis voluptatibus culpa, id rem neque inventore
              exercitationem deleniti? Expedita, eum. Facere aperiam voluptates
            </motion.p>
            <motion.p
              className={styles.paragraph}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus dignissimos dolores vero ut accusamus quasi quisquam eos,
              odio in mollitia voluptatum quas exercitationem. Et eligendi
              deserunt quis voluptatibus culpa, id rem neque inventore
              exercitationem deleniti? Expedita, eum. Facere aperiam voluptates
            </motion.p>
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
};

export default About;
