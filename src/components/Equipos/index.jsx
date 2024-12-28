import React, { useState, useEffect } from "react";
import Cardvideo from "components/Cardvideo";
import { fetchVideos } from "services/apiService";
import styles from "./Equipos.module.css";

function Equipos() {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    const obtenerVideos = async () => {
      const data = await fetchVideos();

      const agrupados = data.reduce((acc, video) => {
        const categoria = video.categoria || "Sin categoría";
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});

      setVideosPorCategoria(agrupados);
    };
    obtenerVideos();
  }, []);

  return (
    <div>
      {Object.keys(videosPorCategoria).length === 0 ? (
        <p className={styles.mensajes}>No hay videos disponibles</p>
      ) : (
        Object.entries(videosPorCategoria).map(([categoria, videos]) => (
          <section key={categoria} className={styles.equipos}>
            <h2 className={styles.categoriaTitulo}>{categoria}</h2>
            {videos.map(video => (
              <Cardvideo {...video} key={video.id} />
            ))}
          </section>
        ))
      )}
    </div>
  );
}

export default Equipos;
