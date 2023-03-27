import Head from "next/head";
import styles from "@styles/project.module.css";
import { ProjectList } from "@src/data/Projects";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/assets/planet-viewer-desktop.webp";
import background from "@/public/assets/bg-2.webp";

const Project = () => {
  return (
    <>
      <Head>
        <title>Josh Kellerman Projects | Front End Developer</title>
        <meta
          name="description"
          content="Josh Kellerman Projects , Front End Developer"
        />
      </Head>
      <div className={styles.backgroundWrapper}>
        <Image
          src={background}
          alt="background"
          sizes="100vw"
          className={styles.background}
          priority
        />
      </div>
      <main className={styles.main}>
        <section className={styles.descriptionContainer}>
          <div className={styles.screenshotWrapper}>
            <div className={styles.menuBar}>
              <div className={styles.menuBarButton}></div>
              <div className={styles.menuBarButton}></div>
              <div className={styles.menuBarButton}></div>
            </div>

            <Image
              src={img}
              alt="/reelgood web app"
              className={styles.screenshot}
              sizes="(max-width: 48em) 85vw,
              66vw"
            />
          </div>

          <div className={styles.projectDetailsContainer}>
            <h1 className={styles.headingTop}>{ProjectList[1].name}</h1>
            <p className={styles.paragraph}>{ProjectList[1].overview}</p>
            <div className={styles.tickerWrapper}>
              <div className={styles.tickerTrack}>
                {ProjectList[1].stack.map((tech) => (
                  <span key={tech.id} className={styles.tickerItem}>
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className={styles.tickerTrack}>
                {ProjectList[0].stack.map((tech) => (
                  <span key={tech.id} className={styles.tickerItem}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.linksContainer}>
              {ProjectList[1].link && (
                <a
                  href={ProjectList[1].link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Live</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    className={styles.externalArrow}
                    width={20}
                    height={20}
                  >
                    <g weight="bold">
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
                </a>
              )}
              <a
                href={ProjectList[1].github}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Code</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className={styles.externalArrow}
                  width={20}
                  height={20}
                >
                  <g weight="bold">
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
              provident ea nemo. Quas quibusdam repellendus sed dolorum
              aspernatur deserunt vel, fugit blanditiis dignissimos sint
              molestias inventore itaque exercitationem!
            </p>
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.heading}>Heading 1</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusamus excepturi qui quod consequuntur voluptates quisquam
              molestias, reprehenderit cum aliquam? Ut, omnis minima asperiores
              accusamus commodi doloremque nulla cumque perferendis accusantium
              provident ea nemo. Quas quibusdam repellendus sed dolorum
              aspernatur deserunt vel, fugit blanditiis dignissimos sint
              molestias inventore itaque exercitationem!
            </p>
          </div>
        </section>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/project/reelgood" className={styles.navLink}>
                {" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={35}
                    height={35}
                    fill="#FFF"
                    className={styles.arrow}
                  >
                    {" "}
                    {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </span>
                <span>Back</span>
              </Link>
            </li>
            <li>
              <Link href="/project/billy" className={styles.navLink}>
                <span>Next</span>
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={35}
                    height={35}
                    fill="#FFF"
                    className={styles.arrow}
                  >
                    {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Project;