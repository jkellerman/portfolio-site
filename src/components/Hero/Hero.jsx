import styles from "../Hero/Hero.module.css";

const spheres = [
  { id: 1, width: 32, height: 32 },
  { id: 2, width: 24, height: 24 },
  { id: 3, width: 16, height: 16 },
  { id: 4, width: 20, height: 20 },
];

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
        <h1 className={styles.title}>Front End Developer</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa,
          fuga, ea delectus qui natus, repellendus odio ut non excepturi
        </p>
        <button className={styles.button}>See my work</button>
      </div>
    </section>
  );
};

export default Hero;
