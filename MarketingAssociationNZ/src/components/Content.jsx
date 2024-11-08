import styles from "../components/Content.module.css";

export default function Content() {



  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.item}>
          <img src="src/assets/item1.jpg"/>
          <div className={styles.itemOverlay}>
          <span className={styles.descriptionHeading}>Lorem Ipsum</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolorem.</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="src/assets/item2.jpg"/>
          <div className={styles.itemOverlay}>
            <span className={styles.descriptionHeading}>Lorem Ipsum</span>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolorem.</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="src/assets/item3.jpg"/>
          <div className={styles.itemOverlay}>
          <span className={styles.descriptionHeading}>Lorem Ipsum</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolorem.</p>
          </div>
        </div>
      </div>
    </>
  );
}
