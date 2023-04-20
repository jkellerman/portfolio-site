import styles from "../BackToTopButton/BackToTopButton.module.css";

const BackToTopButton = () => {
  const handleScroll = () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleScroll}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFF"
          height="25"
          width="25"
        >
          <g id="line">
            <path d="m19.6509 14.2407-7-6a1 1 0 0 0 -1.3018 0l-7 6a1 1 0 0 0 1.3018 1.5186l6.3491-5.4424 6.3491 5.4424a1 1 0 0 0 1.3018-1.5186z" />
          </g>
        </svg>
        Back to projects
      </button>
    </div>
  );
};

export default BackToTopButton;
