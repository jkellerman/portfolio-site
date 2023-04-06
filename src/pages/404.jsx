import Spheres from "@src/components/Spheres/Spheres";
import Head from "next/head";
import styles from "@styles/404.module.css";
import Nav from "@src/components/Nav/Nav";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="Josh Kellerman, Front End Developer Portfolio"
        />
      </Head>
      <Nav />

      <main className={styles.wrapper}>
        <h1 className={styles.heading}>404</h1>
        <span className={styles.subheading}>
          Oops! Looks like you took a wrong turn
        </span>
      </main>
    </>
  );
};

export default Custom404;
