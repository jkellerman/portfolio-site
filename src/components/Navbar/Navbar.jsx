import styles from "../Navbar/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../NavMenuButton/NavMenuButton";

const navListItems = [
  {
    id: 1,
    name: "About",
  },
  { id: 2, name: "Contact" },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.menuWrapper}>
        <Link href="/">
          <div className={styles.logoWrapper}>
            <span className={styles.logo1}>Josh</span>
            <span className={styles.logo2}>Kellerman</span>
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
            isOpen ? `${styles.navMenu} ${styles.isOpen}` : `${styles.navMenu}`
          }
        >
          <ul className={styles.navMenuList}>
            {navListItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={`/${item.name}`} className={styles.navListItem}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
