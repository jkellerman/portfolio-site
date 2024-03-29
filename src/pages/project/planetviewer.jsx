import Head from "next/head";
import styles from "@styles/project.module.css";
import { ProjectList } from "@src/data/Projects";
import Image from "next/image";
import img from "@/public/assets/planet-viewer-desktop.webp";
import Nav from "@src/components/Nav/Nav";
import ProjectDetails from "@src/components/ProjectDetails/ProjectDetails";
import ProjectContent from "@src/components/ProjectContent/ProjectContent";
import PageNav from "@src/components/PageNav/PageNav";

// https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/color.tsx
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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
      <div
        className={`${styles.backgroundWrapper} ${styles.background2}`}
      ></div>
      <main className={styles.main}>
        <div className={styles.descriptionContainer}>
          <ProjectDetails project={1} />
        </div>
        <div>
          <ProjectContent heading="Project overview">
            <p className={styles.paragraph}>
              This project was initially a challenge from Frontend Mentor, but I
              decided to expand it by adding some exciting extra features. I was
              motivated to create an app that not only met the requirements of
              the challenge, but also allowed users to interact with 3D Models
              and experience the planets in augmented reality.
            </p>
          </ProjectContent>
          <ProjectContent heading="The solution">
            <p className={styles.paragraph}>
              To accomplish my goals, I used React and React Router DOM to
              create a single-page application with eight routes for each
              planet. As I switched routes, I had to manage the state of the
              current active tab, and this gave me the opportunity to use the
              Context API for the first time, which helped me avoid unnecessary
              prop drilling. I also utilised Styled-Components to efficiently
              build components for all screen sizes with a mobile-first
              workflow.
            </p>
          </ProjectContent>
          <ProjectContent heading="Challenges">
            <p className={styles.paragraph}>
              While building the app, I encountered some challenges related to
              the UI. One of the most significant was the time it took for the
              3D models to load. I mitigated this issue by creating a poster
              file that displays before the model is rendered. This gave the
              users something to see while the model loads, improving their
              experience.
            </p>
          </ProjectContent>

          <div className={styles.screenshotContainer}>
            <a
              className={styles.screenshotWrapper}
              href={ProjectList[1].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.menuBar}>
                <div className={styles.menuBarButton}></div>
                <div className={styles.menuBarButton}></div>
                <div className={styles.menuBarButton}></div>
              </div>

              <Image
                src={img}
                alt="planetviewer web app"
                className={styles.screenshot}
                sizes="(max-width: 48em) 87.5vw,
              66vw"
                placeholder="blur"
              />
            </a>
          </div>
        </div>
        <PageNav back="streamhub" next="billy" />
      </main>
    </>
  );
};

export default Project;
