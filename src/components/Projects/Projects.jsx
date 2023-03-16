import Link from "next/link";
import styles from "../Projects/Projects.module.css";

const ProjectList = [
  {
    id: 1,
    title: "Reelgood",
    desktop: "",
    mobile: "",
    outline: "streaming search engine",
  },
  {
    id: 2,
    title: "3D/AR Planet Viewer",
    desktop: "",
    mobile: "",
    outline: "Learn and interactive with the planets in our solar system",
  },
  {
    id: 3,
    title: "Billy",
    desktop: "",
    mobile: "",
    outline: "Invoice Management App",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>What I&apos;ve been working on </h1>
      {ProjectList.map((item) => (
        <div key={item.id} className={styles.projectWrapper}>
          <div className={styles.desktopImage}></div>
          <div className={styles.mobileImage}></div>
          <div className={styles.projectDetailsWrapper}>
            <h2 className={styles.title}>{item.title}</h2>
            <span className={styles.outline}>{item.outline}</span>
            <Link href={`/${item.name}`}>View project</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
