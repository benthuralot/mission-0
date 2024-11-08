import styles from "../components/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <h1 className={styles.heroTitle}>Marketing Association New Zealand</h1>    
      <form className={styles.searchbar}>
        <input type="search" placeholder="Search..." />
        <button>SEARCH</button>
      </form>
    </div>
  );
}
