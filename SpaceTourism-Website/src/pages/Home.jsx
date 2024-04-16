import Header from "../Components/Header"
import HomeText from "../Components/HomeText"
import styles from "./../styles/home.module.css"

const Home = () => {
  return (
    <div className={styles.homeScreen}>
    <Header/>
    <HomeText/>
    </div>

  )
}

export default Home