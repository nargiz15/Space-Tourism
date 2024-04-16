import styles from "./../styles/crew.module.css"
import CrewNav from "./CrewNav"
import CrewStaffPng from "./../assets/images/crewStaff2.png"

const MissionSpecialist  = () => {
  return (
    <>
    <div className={styles.CrewContainer}>
      <div className={styles.crewContent}>
        <div className={styles.leftSideCrew}>
         <p className={styles.MainTitle}>MISSION SPECIALIST </p>
         <p className={styles.StaffName}>MARK SHUTTLEWORTH</p>
         <p className={styles.desc}>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
       
      
        </div>
        <div className={styles.rightSideCrew}>
        <img width={"450px"} height={"530px"} src={CrewStaffPng} alt="CrewStaff" />
        </div>
        <CrewNav/>
      </div>
    
    </div>
    </>
  )
}

export default MissionSpecialist 