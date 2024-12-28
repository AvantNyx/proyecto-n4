import styles from "./BaseSt.module.css";
import React from "react";
import Cabecera from "components/Cabecera";
import Footer from "components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function PaginaBase() {
    const location = useLocation();
    const isFormulario = location.pathname === "/NuevoVideo";

    return (
        <div className={styles.wrapper}>
            <Cabecera isFormulario={isFormulario} />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default PaginaBase;
