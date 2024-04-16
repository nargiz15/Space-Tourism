import styles from "./../styles/destination.module.css";
import YupitersNav from "../Components/YupitersNav";
import TitanPg from "../assets/images/Titan.png"

const Titan = () => {
  return (
    <div className={styles.container}>

        
    <div className={styles.destinationContext}>
      
      <img src={TitanPg} alt="moonPhoto" />
      
     
       <div className={styles.destinationText}>
        <YupitersNav/>
        <div className={styles.moreText}>
    
        
        <p className={styles.MoonTitle}>TITAN</p>
        <p className={styles.MoonDescription}>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
        <hr  />
        <div className={styles.bottomSideDestination}>
         <div className={styles.bottomRight}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>AVG. DISTANCE</span>
           <p style={{fontSize: "28px"}}>1.6 BIL. KM</p>
         </div>
         <div className={styles.bottomLeft}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>  EST. TRAVEL TIME</span>
           <p style={{fontSize: "28px"}}>7 YEARS</p>
         </div>
        </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Titan