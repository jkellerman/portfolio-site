import Link from "next/link";
import styles from "../Projects/Projects.module.css";
import { ProjectList } from "@src/data/Projects";
import DesktopScreenshot from "../DesktopScreenshot/DesktopScreenshot";
import MobileScreenshot from "../MobileScreenshot/MobileScreenshot";
import { motion } from "framer-motion";
import { variants } from "@src/utils/animations";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>
        <span className={styles.heading1}>Selected</span>
        <span className={styles.heading2}>Work</span>
      </h1>
      {ProjectList.map((item) => (
        <div key={item.id} className={styles.projectWrapper}>
          <div className={styles.screenshots}>
            <DesktopScreenshot image={item.desktop} />
            <MobileScreenshot image={item.mobile} />
          </div>
          <motion.div
            className={styles.projectDetailsWrapper}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "spring",
              stiffness: 200,
              mass: 1,
              damping: 40,
            }}
            viewport={{ once: true, amount: "some" }}
          >
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.outline}>{item.outline}</p>
            <div className={styles.projectLinkWrapper}>
              <Link
                href={`project/${item.name}`}
                className={styles.projectLink}
              >
                View project
              </Link>
              <svg
                id="Layer_1"
                enableBackground="new 0 0 128 128"
                height="15"
                viewBox="0 0 128 128"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                className={styles.arrow}
              >
                <path
                  id="Right_Arrow_4_"
                  d="m44 108c-1.023 0-2.047-.391-2.828-1.172-1.563-1.563-1.563-4.094 0-5.656l37.172-37.172-37.172-37.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40c1.563 1.563 1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
