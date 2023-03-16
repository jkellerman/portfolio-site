import Head from "next/head";
import Hero from "@src/components/Hero/Hero";
import Ticker from "@src/components/Ticker/Ticker";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="Josh Kellerman, Front End Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Ticker />
    </>
  );
}
