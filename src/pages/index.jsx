import Head from "next/head";
import Hero from "@src/components/Hero/Hero";
import Projects from "@src/components/Projects/Projects";
import OtherProjects from "@src/components/OtherProjects/OtherProjects";
import Contact from "@src/components/Contact/Contact";
import Nav from "@src/components/Nav/Nav";
import BackToTopButton from "@src/components/BackToTopButton/BackToTopButton";

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
      <Nav />
      <main>
        <Hero />
        <Projects />
        <OtherProjects />
        <Contact />
        <BackToTopButton />
      </main>
    </>
  );
}
