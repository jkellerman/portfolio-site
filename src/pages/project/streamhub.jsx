import Head from "next/head";
import styles from "@styles/project.module.css";
import { ProjectList } from "@src/data/Projects";
import Image from "next/image";
import img from "@/public/assets/streamhub-desktop.webp";
import Nav from "@src/components/Nav/Nav";
import ProjectDetails from "@src/components/ProjectDetails/ProjectDetails";
import ProjectContent from "@src/components/ProjectContent/ProjectContent";
import PageNav from "@src/components/PageNav/PageNav";

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
        className={`${styles.backgroundWrapper} ${styles.background1}`}
      ></div>
      <main className={styles.main}>
        <div className={styles.descriptionContainer}>
          <ProjectDetails project={0} />
        </div>
        <div>
          <ProjectContent heading="Project overview">
            <p className={styles.paragraph}>
              I built StreamHub from the ground up whilst making design
              decisions along the way with user experience and performance in
              mind. I am continously improving the app as I pick up new skills
              and technologies.
            </p>
          </ProjectContent>
          <ProjectContent heading="The solution">
            <p className={styles.paragraph}>
              Next.js was the logical choice for this web app, offering the
              ability to set up dynamic page and API routes with ease, along
              with various rendering options that can lead to improved
              performance. The app uses a mixture of SSG, CSR & SSR for speedy
              page loads which provided me the opportunity to familiarise myself
              with web performance and SEO best practices.
            </p>
            <p className={styles.paragraph}>
              React Query was used for the interior genre and search pages,
              which involve infinite query , to reduce the amount of code needed
              for fetching data and improving performance by handling data
              caching and background refetching.
            </p>
          </ProjectContent>
          <ProjectContent heading="Challenges">
            <p className={styles.paragraph}>
              One of the main challenges I encountered was image optimisation
              due to the large volume of images in the application. Using the
              Next/Image component or a custom loader would have incurred some
              costs, therefore, I opted out of the offered by Vercel which would
              have generated images in next-gen format, resized them for
              different screen sizes, and prevented cumulative layout shifts.
            </p>
            <p className={styles.paragraph}>
              However, I implemented best practices where possible, such as lazy
              loading and fetching images from the TMDB API at appropriate
              sizes.
            </p>
          </ProjectContent>
          <ProjectContent heading="Lessons learned">
            <p className={styles.paragraph}>
              This is the largest application I&apos;ve built from scratch which
              provided valuable lessons in code structure and organisation.
              Initially, my code was not clean, and instead of refactoring, I
              completed tasks and moved on to the next. I have since made a
              point of refactoring my code for better readability and
              organisation.
            </p>
          </ProjectContent>
          <div className={styles.screenshotContainer}>
            <a
              className={styles.screenshotWrapper}
              href={ProjectList[0].link}
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
                alt="streamhub web app"
                className={styles.screenshot}
                sizes="(max-width: 48em) 87.5vw,
              66vw"
                placeholder="blur"
              />
            </a>
          </div>
        </div>
        <PageNav back="billy" next="planetviewer" />
      </main>
    </>
  );
};

export default Project;
