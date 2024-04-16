import styles from "./../styles/destination.module.css";
import YupitersNav from "../Components/YupitersNav";
import europaPg from "../assets/images/Europa.png"

const Europa = () => {
  return (
    <div className={styles.container}>

        
    <div className={styles.destinationContext}>
      
      <img src={europaPg} alt="moonPhoto" />
      
     
       <div className={styles.destinationText}>
        <YupitersNav/>
        <div className={styles.moreText}>
    
        
        <p className={styles.MoonTitle}>EUROPA</p>
        <p className={styles.MoonDescription}>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <hr  />
        <div className={styles.bottomSideDestination}>
         <div className={styles.bottomRight}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>AVG. DISTANCE</span>
           <p style={{fontSize: "28px"}}>628 MIL. KM</p>
         </div>
         <div className={styles.bottomLeft}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>  EST. TRAVEL TIME</span>
           <p style={{fontSize: "28px"}}>3 YEARS</p>
         </div>
        </div>
       </div>
       </div>
    </div>
    </div>
    
        
      )
    }
  
  


export default Europa