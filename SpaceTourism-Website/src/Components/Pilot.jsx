import styles from "./../styles/crew.module.css"
import CrewNav from "./CrewNav"
import CrewStaffPng from "./../assets/images/Pilot.png"


const Pilot = () => {
  return (
    <>
     <div className={styles.CrewContainer}>
      <div className={styles.crewContent}>
        <div className={styles.leftSideCrew}>
         <p className={styles.MainTitle}>PILOT </p>
         <p className={styles.StaffName}>Victor Glover</p>
         <p className={styles.desc}>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
       
        
        </div>
        <div className={styles.rightSideCrew}>
        <img src={CrewStaffPng} alt="CrewStaff" />
        </div>
        <CrewNav/>
      </div>

    </div>
    </>
  )
}

export default Pilot