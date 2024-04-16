import styles from "./../styles/home.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CircleExplorePng from "./../assets/images/explore.png";
const HomeText = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div  data-aos="fade-up"  data-aos-delay="200" className={styles.homeTexts}>
          <div className={styles.leftSideText}>
            <p className={styles.Title}>SO, YOU WANT TO TRAVEL TO</p>
            <p className={styles.mainText}>SPACE</p>
            <p className={styles.description}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.rightSide}>
            <img src={CircleExplorePng} alt="explore" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeText;
