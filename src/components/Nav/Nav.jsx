import styles from "../Nav/Nav.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../NavMenuButton/NavMenuButton";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll");
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <>
      <header className={styles.navbarWrapper}>
        <motion.div
          className={styles.navInnerWrapper}
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 30, mass: 1 }}
        >
          <div className={styles.menuWrapper}>
            <Link href="/" aria-label="home" onClick={closeMenu}>
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
                <li className={styles.navListItemWrapper}>
                  <Link
                    href="/about"
                    className={styles.navListItem}
                    onClick={closeMenu}
                  >
                    about
                  </Link>
                </li>
                <li className={styles.navListItemWrapper}>
                  <a
                    href="mailto:joshkellerman9@gmail.com"
                    className={styles.navListItem}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </header>
      <div className={isOpen ? `${styles.colorOverlay}` : undefined}></div>
      <div
        className={styles.contentWrapper}
        style={{ paddingTop: "5rem" }}
      ></div>
    </>
  );
};

export default Nav;
