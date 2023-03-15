import Head from "next/head";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="Josh Kellerman, Front End Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
