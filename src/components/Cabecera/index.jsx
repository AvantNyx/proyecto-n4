import { Link } from "react-router-dom";
import React from "react";
import styles from "./Cabecera.module.css";
import CabeceraLink from "components/CabeceraLink";
import logo from "./Logo.png"
import clsx from "clsx";


function Cabecera({ isFormulario }) {
    return (
        <header className={clsx(styles.cabecera, { [styles.cabeceraFormulario]: isFormulario })}>
            <Link to="/">
                <nav>
                    <section className={styles.logoContainer}>
                        <img src={logo} alt="Logo Alura" />
                    </section>
                </nav>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    <button className={clsx(styles.home, { [styles.homeFormulario]: isFormulario })} aria-label="home">HOME</button>
                    <button className={styles.home2}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3576f6" d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-18C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1 12h2v3h3v-5h2l-6-5l-6 5h2v5h3z" /></svg></span>&nbsp;HOME</button>
                </CabeceraLink>
                <CabeceraLink url="./NuevoVideo">
                    <button className={clsx(styles.nvideo, { [styles.nvideoFormulario]: isFormulario })} aria-label="nuevo video">NUEVO VIDEO</button>
                    <button className={styles.nvideo2}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3576f6" d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg></span>&nbsp;NUEVO VIDEO</button>
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;
