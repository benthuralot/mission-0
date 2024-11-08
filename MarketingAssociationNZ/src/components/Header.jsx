import { useState } from "react";
import styles from "../components/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    console.log("Menu Open State: ", !menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="user photo"
          />
        </div>
        <span className={styles.username}>My Company</span>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.show : ""}`}>
        <ul>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <button className={styles.loginBtn}>Login</button>
      </nav>
    </header>
  );
}
