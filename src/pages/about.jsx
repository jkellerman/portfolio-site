import Head from "next/head";
import Contact from "@src/components/Contact/Contact";
import styles from "@styles/about.module.css";
import Image from "next/image";
import img from "@/public/assets/sphere.webp";

const About = () => {
  return (
    <>
      <Head>
        <title>About Josh Kellerman | Front End Developer</title>
        <meta
          name="description"
          content="About Josh Kellerman, Front End Developer"
        />
      </Head>
      <main>
        <div className={styles.aboutContainer}>
          <div className={styles.sphere}></div>
          <div className={styles.sphere}>
            <Image src={img} alt="" />
          </div>
          <div className={styles.sphere}>
            <Image src={img} alt="" />
          </div>
          <div className={styles.sphere}></div>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/josh.webp"
              alt="Image of Josh Kellerman"
              className={styles.image}
              width={1200}
              height={1600}
              priority
              sizes="(max-width: 48em) 85vw,
              66vw"
            />
          </div>
          <div>
            <span className={styles.subheading}>About me</span>
            <h1 className={styles.heading}>
              I&apos;m Josh, a Front End Developer
            </h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus dignissimos dolores vero ut accusamus quasi quisquam eos,
              odio in mollitia voluptatum quas exercitationem. Et eligendi
              deserunt quis voluptatibus culpa, id rem neque inventore
              exercitationem deleniti? Expedita, eum. Facere aperiam voluptates
            </p>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus dignissimos dolores vero ut accusamus quasi quisquam eos,
              odio in mollitia voluptatum quas exercitationem. Et eligendi
              deserunt quis voluptatibus culpa, id rem neque inventore
              exercitationem deleniti? Expedita, eum. Facere aperiam voluptates
            </p>
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
};

export default About;
