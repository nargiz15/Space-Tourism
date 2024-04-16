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
       <p className={styles.MainTitle}>MISSION SPECIALIST </p>
       <p className={styles.StaffName}>MARK SHUTTLEWORTH</p>
       <p className={styles.desc}>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
     
    
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