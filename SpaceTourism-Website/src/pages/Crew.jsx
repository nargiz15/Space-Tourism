
import Header from "../Components/Header";
import styles from "./../styles/crew.module.css";


const Crew = ({children}) => {
  
  return (
    <div className={styles.CrewFullScreen}>
      <Header />
      <div className={styles.container}>
         <p className={styles.titleCrew}><span>02</span> MEET YOUR CREW</p>
      </div>
    
      {children}
    </div>
  );
};

export default Crew