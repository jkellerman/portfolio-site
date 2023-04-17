import { ProjectList } from "@src/data/Projects";
import styles from "../Ticker/Ticker.module.css";
const Ticker = ({ project }) => {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerTrack}>
        {ProjectList[project].stack.map((tech) => (
          <span key={tech.id} className={styles.tickerItem}>
            {tech.name}
          </span>
        ))}
      </div>
      <div className={styles.tickerTrack}>
        {ProjectList[project].stack.map((tech) => (
          <span key={tech.id} className={styles.tickerItem}>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
