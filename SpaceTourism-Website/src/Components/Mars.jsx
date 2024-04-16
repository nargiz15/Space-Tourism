import styles from "./../styles/destination.module.css";
import YupitersNav from "../Components/YupitersNav";
import MarsPg from "../assets/images/Mars.png"
const Mars = () => {
  return (
    <div className={styles.container}>

        
    <div className={styles.destinationContext}>
      
      <img src={MarsPg} alt="moonPhoto" />
      
     
       <div className={styles.destinationText}>
        <YupitersNav/>
        <div className={styles.moreText}>
    
        
        <p className={styles.MoonTitle}>MARS</p>
        <p className={styles.MoonDescription}>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
        <hr  />
        <div className={styles.bottomSideDestination}>
         <div className={styles.bottomRight}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>AVG. DISTANCE</span>
           <p style={{fontSize: "28px"}}>225 MIL. KM</p>
         </div>
         <div className={styles.bottomLeft}>
           <span style={{color: "#D0D6F9", letterSpacing: "2.36px"}}>  EST. TRAVEL TIME</span>
           <p style={{fontSize: "28px"}}>9 MONTHS</p>
         </div>
        </div>
       </div>
       </div>
    </div>
    </div>
    
        
      )
    }
  

export default Mars