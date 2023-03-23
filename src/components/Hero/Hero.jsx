import Button from "../Button/Button";
import styles from "../Hero/Hero.module.css";
import { spheres } from "@src/utils/utils";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div>
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
          <div className={styles.name}>Hi, I&apos;m Josh</div>
        </div>
        <h1 className={styles.title}>I build things for the web</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa,
          fuga, ea delectus qui natus, repellendus odio ut non excepturi
        </p>
        <Button>See my work</Button>
      </div>
    </section>
  );
};

export default Hero;
