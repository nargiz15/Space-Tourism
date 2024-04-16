import Header from "../Components/Header";
import styles from "./../styles/destination.module.css";

const Destination = ({children}) => {
  return (
    <>
      <div className={styles.DestinationFullScreen}>
        <Header />
        <div className={styles.DestinationTitle}>
          <span className={styles.number}>01</span>
          <p className={styles.titledst}>PICK YOUR DESTINATION</p>
        </div>
    {children}
       
      </div>
    </>
  );
};

export default Destination;
