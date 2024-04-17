import styles from "./../styles/crew.module.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CrewNav from "./CrewNav"
import CommanderImg from "./../assets/images/Commander.png"
const Commander = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.CrewContainer}>
    <div data-aos="fade-left" className={styles.crewContent}>
      <div className={styles.leftSideCrew}>
       <p className={styles.MainTitle}>COMMANDER </p>
       <p className={styles.StaffName}>DOUGLAS HURLEY</p>
       <p className={styles.desc}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
     
    
      </div>
      <div className={styles.rightSideCrew}>
      <img width={"450px"} height={"530px"} src={CommanderImg} alt="CrewStaff" />
      </div>
      <CrewNav/>
    </div>
  
  </div>
  )
}

export default Commander