import Head from "next/head";
import styles from "@styles/project.module.css";
import { ProjectList } from "@src/data/Projects";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/assets/reelgood-desktop.webp";
import background from "@/public/assets/bg-1.webp";
import Nav from "@src/components/Nav/Nav";
import { shimmer, toBase64 } from "@src/utils/placeholder";

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
      <Nav />
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
          <div className={styles.projectDetailsContainer}>
            <h1 className={styles.headingTop}>{ProjectList[0].name}</h1>
            <p className={styles.outline}>{ProjectList[0].outline}</p>
            <div className={styles.tickerWrapper}>
              <div className={styles.tickerTrack}>
                {ProjectList[0].stack.map((tech) => (
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
              {ProjectList[0].link && (
                <div className={styles.linkWrapper}>
                  <a
                    href={ProjectList[0].link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
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
                </div>
              )}
              <div className={styles.linkWrapper}>
                <a
                  href={ProjectList[0].github}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
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
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.contentContainer}>
            <h2 className={styles.heading}>Project overview</h2>
            <p className={styles.paragraph}>{ProjectList[0].overview}</p>
          </div>

          <div className={styles.contentContainer}>
            <h2 className={styles.heading}>The solution</h2>
            <p className={styles.paragraph}>{ProjectList[0].solution[0]}</p>
            <p className={styles.paragraph}>{ProjectList[0].solution[1]}</p>
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.heading}>Challenges</h2>
            <p className={styles.paragraph}>{ProjectList[0].challenges[0]}</p>
            <p className={styles.paragraph}>{ProjectList[0].challenges[1]}</p>
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.heading}>Lessons learned</h2>
            <p className={styles.paragraph}>{ProjectList[0].lessons}</p>
          </div>
          <a
            className={styles.screenshotContainer}
            href={ProjectList[0].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.screenshotWrapper}>
              <div className={styles.menuBar}>
                <div className={styles.menuBarButton}></div>
                <div className={styles.menuBarButton}></div>
                <div className={styles.menuBarButton}></div>
              </div>

              <Image
                src={img}
                alt="reelgood web app"
                className={styles.screenshot}
                sizes="(max-width: 48em) 90vw,
              66vw"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(240, 140)
                )}`}
              />
            </div>
          </a>
        </section>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navLinkWrapper}>
              <Link href="/project/billy" className={styles.navLink}>
                {" "}
                Back
              </Link>
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
            </li>
            <li className={styles.navLinkWrapper}>
              <Link href="/project/planetviewer" className={styles.navLink}>
                Next
              </Link>{" "}
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
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Project;
