import styles from "../Footer/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/jkellerman/portfolio-site"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        Built from scratch, by Josh Kellerman
      </a>
      <div className={styles.iconsContainer}>
        <a
          href="https://github.com/jkellerman"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconWrapper}
        >
          <svg
            viewBox="0 0 176 176"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className={styles.icon}
          >
            <title>Github</title>
            <g data-name="Layer 2">
              <g id="github">
                <path d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-46.75 140.55c-2.82.54-3.78-1.16-3.78-2.57 0-1.76.07-7.57.07-14.8 0-5.07-1.79-8.38-3.71-10 12.23-1.33 25.09-5.9 25.09-26.66a20.71 20.71 0 0 0 -5.64-14.52c.55-1.37 2.41-6.87-.55-14.31 0 0-4.6-1.45-15 5.54a52.85 52.85 0 0 0 -27.5 0c-10.52-7-15.13-5.54-15.13-5.54-3 7.46-1.1 12.96-.53 14.31a20.64 20.64 0 0 0 -5.66 14.5c0 20.7 12.84 25.35 25 26.7a11.45 11.45 0 0 0 -3.48 7.23c-3.15 1.38-11.12 3.77-16-4.49 0 0-2.9-5.2-8.42-5.57 0 0-5.37-.07-.39 3.28 0 0 3.62 1.67 6.12 7.9 0 0 3.23 10.51 18.53 7.26 0 4.5.06 7.9.06 9.19s-1 3.1-3.75 2.59c-21.82-7.12-37.58-27.37-37.58-51.25 0-29.85 24.61-54 55-54s55 24.2 55 54.05c0 23.79-15.74 44.06-37.75 51.16z" />
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/joshkellerman/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconWrapper}
        >
          {" "}
          <svg
            viewBox="0 0 176 176"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            className={styles.icon}
          >
            <title>LinkedIn</title>
            <g data-name="Layer 2">
              <g id="linkedin">
                <path d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z" />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
