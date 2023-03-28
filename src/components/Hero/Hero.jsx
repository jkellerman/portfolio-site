import Button from "../Button/Button";
import styles from "../Hero/Hero.module.css";
import Spheres from "../Spheres/Spheres";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <Spheres />
        <div className={styles.name}>Hi, I&apos;m Josh</div>
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
