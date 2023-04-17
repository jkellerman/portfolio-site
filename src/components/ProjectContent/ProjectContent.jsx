import styles from "../ProjectContent/ProjectContent.module.css";

const ProjectContent = ({ heading, children }) => {
  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </div>
  );
};

export default ProjectContent;
