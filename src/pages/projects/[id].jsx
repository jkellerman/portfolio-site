/* eslint-disable @next/next/no-img-element */
import styles from "@styles/projects.module.css";
import { ProjectList } from "@src/data/Projects";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { query } = router;
  const project = ProjectList.find((project) => project.name === query.id);

  return (
    <main className={styles.main}>
      <section className={styles.descriptionContainer}>
        <div className={styles.screenshotWrapper}>
          <div className={styles.menuBar}>
            <div className={styles.menuBarButton}></div>
            <div className={styles.menuBarButton}></div>
            <div className={styles.menuBarButton}></div>
          </div>
          <img
            src={project && project.desktop}
            alt={project && `${project.name} screenshot`}
            className={styles.screenshot}
          />
        </div>
        <div className={styles.projectDetailsContainer}>
          <h1 className={styles.headingTop}>{project && project.name}</h1>
          <p className={styles.paragraph}>{project && project.overview}</p>
          <div className={styles.tickerWrapper}>
            <div className={styles.tickerTrack}>
              {project &&
                project.stack.map((tech) => (
                  <span key={tech.id} className={styles.tickerItem}>
                    {tech.name}
                  </span>
                ))}
            </div>
            <div className={styles.tickerTrack}>
              {project &&
                project.stack.map((tech) => (
                  <span key={tech.id} className={styles.tickerItem}>
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>
          <div className={styles.linksContainer}>
            {project && project.link && (
              <a
                href={project && project.link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            )}
            <a
              href={project && project.github}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Heading 1</h2>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            accusamus excepturi qui quod consequuntur voluptates quisquam
            molestias, reprehenderit cum aliquam? Ut, omnis minima asperiores
            accusamus commodi doloremque nulla cumque perferendis accusantium
            provident ea nemo. Quas quibusdam repellendus sed dolorum aspernatur
            deserunt vel, fugit blanditiis dignissimos sint molestias inventore
            itaque exercitationem!
          </p>
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Heading 1</h2>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            accusamus excepturi qui quod consequuntur voluptates quisquam
            molestias, reprehenderit cum aliquam? Ut, omnis minima asperiores
            accusamus commodi doloremque nulla cumque perferendis accusantium
            provident ea nemo. Quas quibusdam repellendus sed dolorum aspernatur
            deserunt vel, fugit blanditiis dignissimos sint molestias inventore
            itaque exercitationem!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Project;
