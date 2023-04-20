import styles from "../OtherProjects/OtherProjects.module.css";
import { OtherProjectsLists } from "@src/data/OtherProjects";
import Image from "next/image";
import folder from "@/public/assets/folder-solid.svg";
import { motion } from "framer-motion";
import { containerVariants } from "@src/utils/animations";

const OtherProjects = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <motion.h2
          className={styles.heading}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
        >
          Other projects
        </motion.h2>
      </div>
      <motion.ul
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
      >
        {OtherProjectsLists.map((item) => (
          <motion.li
            key={item.id}
            className={styles.project}
            variants={containerVariants}
          >
            <header>
              <div className={styles.projectTop}>
                <Image src={folder} alt="folder-icon" width={25} height={25} />
                <div className={styles.iconsWrapper}>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a1a3bb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={20}
                      height={20}
                      className={styles.icons}
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a1a3bb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={20}
                      height={20}
                      className={styles.icons}
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className={styles.title}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {item.title}
                </a>
              </h3>

              <p className={styles.outline}>{item.outline}</p>
            </header>
            <footer className={styles.stackWrapper}>
              {item.stack.map((tech) => (
                <span key={tech.id} className={styles.stackName}>
                  {tech.name}
                </span>
              ))}
            </footer>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default OtherProjects;
