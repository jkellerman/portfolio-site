import styles from "../Contact/Contact.module.css";
const Contact = () => {
  return (
    <section className={styles.contactWrapper}>
      <span className={styles.subheading}>Let&apos;s collab</span>
      <h1 className={styles.heading}>Got a project? Let&apos;s talk</h1>
      <div className={styles.emailWrapper}>
        <a href="mailto: jkellerman10@gmail.com" className={styles.email}>
          Email me
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          className={styles.contactArrow}
        >
          <g weight="bold">
            <line
              x1="64"
              y1="192"
              x2="192"
              y2="64"
              fill="none"
              stroke="#FFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <polyline
              points="88 64 192 64 192 168"
              fill="none"
              stroke="#FFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></polyline>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
