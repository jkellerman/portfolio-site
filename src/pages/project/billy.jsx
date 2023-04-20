import Head from "next/head";
import styles from "@styles/project.module.css";
import { ProjectList } from "@src/data/Projects";
import Image from "next/image";
import img from "@/public/assets/billy-desktop.webp";
import background from "@/public/assets/bg-3.webp";
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
        <div className={styles.descriptionContainer}>
          <ProjectDetails project={2} />
        </div>
        <div>
          <ProjectContent heading="Project overview">
            <p className={styles.paragraph}>
              As a collaborative effort with a software engineer, my primary
              responsibilities for this project was developing reusable
              components and features within an existing codebase.
            </p>
          </ProjectContent>
          <ProjectContent heading="The solution">
            <p className={styles.paragraph}>
              The project was built using DynamoDB, a NoSQL database service,
              which provided a reliable and secure data storage solution for the
              backend, and TypeScript, Next.js, and Styled-components for the
              frontend. As part of the development process, I utilised Storybook
              to create and test UI components in isolation. To implement the
              login authentication, I opted for Firebase due to its simple setup
              process and customisable login form options. Additionally, I set
              up unit and integration tests using Jest and React Testing library
              to ensure reliability and functionality across the app
            </p>
          </ProjectContent>
          <ProjectContent heading="Challenges">
            <p className={styles.paragraph}>
              As this was my first collaborative project, one of the obstacles I
              faced was getting acquainted with the existing codebase.
              Additionally, I had to familiarise myself with new technologies
              while adhering to coding standards, which was a challenging task.
              Despite the challenges, the project helped me develop skills in
              project management, communication, and problem-solving.
            </p>
          </ProjectContent>
          <ProjectContent heading="Lessons learned">
            <p className={styles.paragraph}>
              Collaborating with a more experienced software engineer was
              invaluable to me. I gained knowledge of best practices for
              collaborating on app development, and I have since applied this
              knowledge to my own projects. However, the most significant
              takeaway for me was learning how to use Git in a pair programming
              scenario. While I was already familiar with Git, I learned best
              practices for making commits, managing conflicts, and
              participating in code reviews.
            </p>
          </ProjectContent>
          <div className={styles.screenshotContainer}>
            <div className={styles.screenshotWrapper}>
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
              />
            </div>
          </div>
        </div>
        <PageNav back="planetviewer" next="reelgood" />
      </main>
    </>
  );
};

export default Project;
