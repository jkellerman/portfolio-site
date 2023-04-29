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
          <div>Email me</div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.image}></div>
              <div className={styles.image2}></div>
            </div>
          </div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
