import styles from "./Footer.module.css"
import Logo from "./Logo.png"

function Footer (){
    return(
        <footer className={styles.footer}>
            <p className={styles.firma}>© 2024 · AvantNyx</p>
            <img className={styles.logofooter} src={Logo} alt="Logo Alura" />
            
        </footer>
    )
}

export default Footer;