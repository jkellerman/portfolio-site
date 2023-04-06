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
              Hey there, welcome to my portfolio website! I&apos;m a front-end
              developer based in the UK and I absolutely love building clean and
              user-friendly web applications. With four years of experience
              working for a software company in the financial services industry,
              I was exposed to developer teams and their work, which sparked my
              interest in coding. Since then, I&apos;ve been teaching myself the
              ins and outs of web development and I&apos;ve never looked back.
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
              In each project, my focus is on creating seamless and intuitive
              experiences that prioritise usability and performance. I believe
              in writing clean and efficient code that is easy to maintain and
              scale.
            </motion.p>
            <motion.p
              className={styles.paragraph}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 160,
                delay: 1,
                mass: 1,
                damping: 60,
              }}
            >
              Right now, my go-to stack is TypeScript, Next.js with either
              Styled Components or CSS Modules. But I&apos;m always up for
              learning about the latest web technologies and trying out new
              techniques to level up my skills and stay ahead of the game.
            </motion.p>
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
};

export default About;
