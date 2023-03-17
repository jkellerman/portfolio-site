import Link from "next/link";
import styles from "../Projects/Projects.module.css";
import { ProjectList } from "@src/data/Projects";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>What I&apos;ve been working on </h2>
      {ProjectList.map((item) => (
        <div key={item.id} className={styles.projectWrapper}>
          <div className={styles.desktopImage}></div>
          <div className={styles.mobileImage}></div>
          <div className={styles.projectDetailsWrapper}>
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.outline}>{item.outline}</span>
            <Link href={`/${item.name}`}>View project</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
