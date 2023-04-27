import styles from "../Contact/Contact.module.css";
import { motion } from "framer-motion";
import { containerVariants } from "@src/utils/animations";

const Contact = () => {
  return (
    <motion.section
      className={styles.contactWrapper}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
    >
      <motion.span className={styles.subheading} variants={containerVariants}>
        Lets collab
      </motion.span>
      <motion.h1 className={styles.heading} variants={containerVariants}>
        Got a project? Lets talk
      </motion.h1>
      <motion.div className={styles.emailWrapper} variants={containerVariants}>
        <a href="mailto:joshkellerman9@gmail.com" className={styles.email}>
          <span>Email me</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className={styles.contactArrow}
            >
              <g>
                <line
                  x1="64"
                  y1="192"
                  x2="192"
                  y2="64"
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <polyline
                  points="88 64 192 64 192 168"
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></polyline>
              </g>
            </svg>
          </span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
