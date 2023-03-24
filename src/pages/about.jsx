/* eslint-disable @next/next/no-img-element */
import Contact from "@src/components/Contact/Contact";
import { spheres } from "@src/utils/utils";
import styles from "@styles/about.module.css";
const About = () => {
  return (
    <main>
      <div className={styles.aboutContainer}>
        {spheres.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: item.width,
                height: item.height,
              }}
              className={styles.sphere}
            ></div>
          );
        })}
        <div className={styles.imageWrapper}>
          <img
            src="/assets/josh.webp"
            alt="Image of Josh Kellerman"
            className={styles.image}
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
  );
};

export default About;
