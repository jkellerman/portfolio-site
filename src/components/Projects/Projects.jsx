import Link from "next/link";
import styles from "../Projects/Projects.module.css";
import { ProjectList } from "@src/data/Projects";
import Image from "next/image";
import DesktopScreenshot from "../DesktopScreenshot/DesktopScreenshot";
import MobileScreenshot from "../MobileScreenshot/MobileScreenshot";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>What I&apos;ve been working on </h2>
      {ProjectList.map((item) => (
        <div key={item.id} className={styles.projectWrapper}>
          <div className={styles.screenshots}>
            <DesktopScreenshot image={item.desktop} />
            <MobileScreenshot image={item.mobile} />
          </div>
          <div className={styles.projectDetailsWrapper}>
            <h3 className={styles.title}>{item.title}</h3>
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
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
