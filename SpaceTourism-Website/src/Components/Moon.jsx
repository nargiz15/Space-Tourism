import YupitersNav from "../Components/YupitersNav";
import MoonPg from "../assets/images/Moon.png";
import styles from "./../styles/destination.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Moon = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div data-aos="fade-left" className={styles.destinationContext}>
          <img src={MoonPg} alt="moonPhoto" />

          <div className={styles.destinationText}>
            <YupitersNav />
            <div className={styles.moreText}>
              <p className={styles.MoonTitle}>MOON</p>
              <p className={styles.MoonDescription}>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr />
              <div className={styles.bottomSideDestination}>
                <div className={styles.bottomRight}>
                  <span style={{ color: "#D0D6F9", letterSpacing: "2.36px" , fontFamily: "Bellefair"}}>
                    AVG. DISTANCE
                  </span>
                  <p style={{ fontSize: "28px", fontFamily: "Bellefair"}}>384,400 KM</p>
                </div>
                <div className={styles.bottomLeft}>
                  <span style={{ color: "#D0D6F9", letterSpacing: "2.36px", fontFamily: "Bellefair" }}>
                    EST. TRAVEL TIME
                  </span>
                  <p style={{ fontSize: "28px" , fontFamily: "Bellefair"}}>3 DAYS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moon;
