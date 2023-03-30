import styles from "../Ticker/Ticker.module.css";
import { motion } from "framer-motion";
import { variants } from "@src/utils/framer";

const TickerItems = [
  { id: 1, name: "SCSS" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "Next.js" },
  { id: 6, name: "TypeScript" },
  { id: 7, name: "GraphQL" },
  { id: 8, name: "React Query" },
  { id: 9, name: "Jest" },
  { id: 10, name: "RTL" },
  { id: 11, name: "Framer Motion" },
  { id: 12, name: "Firebase" },
  { id: 13, name: "Vercel" },
  { id: 14, name: "Netlify" },
  { id: 15, name: "Git" },
  { id: 16, name: "Storybook" },
];

const Ticker = () => {
  return (
    <div className={styles.outerWrapper}>
      <motion.div
        className={styles.contentWrapper}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness: 320,
          mass: 1,
          damping: 40,
          staggerChildren: 0.4,
        }}
        viewport={{ once: true, amount: "all" }}
      >
        <h2 className={styles.heading}>Tech I&apos;m Currently Using</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          aspernatur illum alias cum debitis ducimus.
        </p>
      </motion.div>
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
    </div>
  );
};

export default Ticker;
