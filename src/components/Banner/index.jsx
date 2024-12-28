import styles from "./Banner.module.css";
import banner from "./banner-001.png";
import banner2 from "./robot-bnnr-01.png"

function Banner() {
    return (
        <div className={styles.bannerBackgr} style={{ backgroundImage: `url(${banner})` }} alt="portada">
            <section className={styles.portada}>
                <section className={styles.textPortada}>
                    <h1 style={{
                        fontFamily: 'Co Text, sans-serif', fontSize: '28px',
                        color: '#6DD6FF', textShadow: '0 0 5px #165D7D'
                    }}
                    >FRONT END</h1>
                    <h2 style={{ fontFamily: 'Noyh Geometric, sans-serif ', color: '#D9F2FD' }}>Challenge React</h2>
                    <p style={{ fontSize: '18px', color: '#D9F2FD' }}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </section>
                <section>
                    <img style={{ alignSelf: 'center' }} className={styles.robot} src={banner2} alt="robot de programación">
                    </img>
                </section>
            </section>
        </div>
    )
}

export default Banner;