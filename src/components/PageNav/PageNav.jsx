import Link from "next/link";
import styles from "../PageNav/PageNav.module.css";

const PageNav = ({ back, next }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navLinkWrapper}>
          <Link href={`/project/${back}`} className={styles.navLink}>
            {" "}
            Back
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={35}
            height={35}
            fill="#FFF"
            className={styles.arrow}
          >
            {" "}
            {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </li>
        <li className={styles.navLinkWrapper}>
          <Link href={`/project/${next}`} className={styles.navLink}>
            Next
          </Link>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={35}
            height={35}
            fill="#FFF"
            className={styles.arrow}
          >
            {/*<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
