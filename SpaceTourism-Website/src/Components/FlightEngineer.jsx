import styles from "./../styles/crew.module.css"
import CrewNav from "./CrewNav"
import CrewStaffPng from "./../assets/images/FlightEngineer.png"

const FlightEngineer = () => {
  return (
    <>
     <div className={styles.CrewContainer}>
      <div className={styles.crewContent}>
        <div className={styles.leftSideCrew}>
         <p className={styles.MainTitle}>FLIGHT ENGINEER </p>
         <p className={styles.StaffName}>ANOUSHEH ANSARI</p>
         <p className={styles.desc}>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
       
        
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

export default FlightEngineer