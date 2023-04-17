import Ticker from "../Ticker/Ticker";
import { ProjectList } from "@src/data/Projects";
import styles from "../ProjectDetails/ProjectDetails.module.css";

const ProjectDetails = ({ project }) => {
  return (
    <div className={styles.projectDetailsContainer}>
      <h1 className={styles.name}>{ProjectList[project].name}</h1>
      <p className={styles.outline}>{ProjectList[project].outline}</p>
      <Ticker project={project} />
      <div className={styles.linksContainer}>
        {ProjectList[project].link && (
          <div className={styles.linkWrapper}>
            <a
              href={ProjectList[project].link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className={styles.externalArrow}
              width={20}
              height={20}
            >
              <g weight="bold">
                <line
                  x1="64"
                  y1="192"
                  x2="192"
                  y2="64"
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <polyline
                  points="88 64 192 64 192 168"
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></polyline>
              </g>
            </svg>
          </div>
        )}
        <div className={styles.linkWrapper}>
          <a
            href={ProjectList[project].github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className={styles.externalArrow}
            width={20}
            height={20}
          >
            <g weight="bold">
              <line
                x1="64"
                y1="192"
                x2="192"
                y2="64"
                fill="none"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <polyline
                points="88 64 192 64 192 168"
                fill="none"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></polyline>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
