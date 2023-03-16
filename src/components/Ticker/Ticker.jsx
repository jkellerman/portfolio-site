import styles from "../Ticker/Ticker.module.css";

const TickerItems = [
  { id: 2, name: "CSS" },
  { id: 3, name: "SCSS" },
  { id: 4, name: "JavaScript" },
  { id: 5, name: "React" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "TypeScript" },
  { id: 8, name: "Firebase" },
  { id: 9, name: "Framer Motion" },
  { id: 11, name: "React Query" },
  { id: 12, name: "GraphQL" },
  { id: 13, name: "Jest" },
  { id: 14, name: "RTL" },
  { id: 15, name: "Vercel" },
  { id: 16, name: "Netlify" },
  { id: 17, name: "Git" },
  { id: 18, name: "Storybook" },
];

const Ticker = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Tech I&apos;m Currently Using</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          aspernatur illum alias cum debitis ducimus.
        </p>
      </div>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {TickerItems.map((item) => (
            <div className={styles.tickerItem} key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
        <div className={styles.tickerTrack}>
          {TickerItems.map((item) => (
            <div className={styles.tickerItem} key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ticker;
