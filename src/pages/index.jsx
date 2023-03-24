import Head from "next/head";
import Hero from "@src/components/Hero/Hero";
import Ticker from "@src/components/Ticker/Ticker";
import Projects from "@src/components/Projects/Projects";
import OtherProjects from "@src/components/OtherProjects/OtherProjects";
import Contact from "@src/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="Josh Kellerman, Front End Developer Portfolio"
        />
      </Head>
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
    </>
  );
}
