import styles from "../Nav/Nav.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../NavMenuButton/NavMenuButton";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll");
  };
  return (
    <>
      <header className={styles.navbarWrapper}>
        <div className={styles.navInnerWrapper}>
          <div className={styles.menuWrapper}>
            <Link href="/" aria-label="home">
              <div className={styles.logoWrapper}>
                <span className={styles.logo1}>Josh</span>
                <span className={styles.logo2}>Portfolio</span>
              </div>
            </Link>
            <MenuButton
              isOpen={isOpen}
              onClick={toggleMenu}
              strokeWidth="2"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="20"
              height="14"
            ></MenuButton>
            <nav
              className={
                isOpen
                  ? `${styles.navMenu} ${styles.isOpen}`
                  : `${styles.navMenu}`
              }
            >
              <ul className={styles.navMenuList}>
                <li>
                  <Link
                    href="/about"
                    className={styles.navListItem}
                    onClick={toggleMenu}
                  >
                    about
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto: joshkellerman9@gmail.com"
                    className={styles.navListItem}
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={isOpen ? `${styles.colorOverlay}` : undefined}></div>
      <div className={styles.contentWrapper} style={{ paddingTop: "5rem" }}>
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Nav;
