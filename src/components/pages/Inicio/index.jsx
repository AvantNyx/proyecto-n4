import React, { useState, useEffect } from "react";
import Cardvideo from "components/Cardvideo";
import Banner from "components/Banner";
import { fetchVideos } from "services/apiService";
import styles from "./index.module.css";

function Inicio() {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    const obtenerVideos = async () => {
      const data = await fetchVideos();
      const agrupados = data.reduce((acc, video) => {
        if (!acc[video.categoria]) {
          acc[video.categoria] = [];
        }
        acc[video.categoria].push(video);
        return acc;
      }, {});
      setVideosPorCategoria(agrupados);
    };
    obtenerVideos();
  }, []);

  const handleEditVideo = (updatedVideo) => {
    setVideosPorCategoria((prev) => {
      const nuevaCategoria = updatedVideo.categoria;
      const nuevaData = { ...prev };

      for (const categoria in nuevaData) {
        const indice = nuevaData[categoria].findIndex((v) => v.id === updatedVideo.id);
        if (indice !== -1) {
          nuevaData[categoria].splice(indice, 1);
          if (!nuevaData[nuevaCategoria]) nuevaData[nuevaCategoria] = [];
          nuevaData[nuevaCategoria].push(updatedVideo);
          break;
        }
      }

      return nuevaData;
    });
  };

  const handleDeleteVideo = (id) => {
    setVideosPorCategoria((prev) => {
      const nuevaData = { ...prev };

      for (const categoria in nuevaData) {
        nuevaData[categoria] = nuevaData[categoria].filter((video) => video.id !== id);

        if (nuevaData[categoria].length === 0) {
          delete nuevaData[categoria];
        }
      }

      return nuevaData;
    });
  };

  return (
    <div>
      <Banner />
      <div style={{ marginBottom: "8em" }}>
        {Object.entries(videosPorCategoria).map(([categoria, videos]) => (
          <div key={categoria}>
            <h3
              className={styles.eqtitle}
              style={{
                backgroundColor:
                  categoria === "front end"
                    ? "#4BD9FF"
                    : categoria === "back end"
                    ? "#7FF056"
                    : "#FCFE28",
              }}
            >
              {categoria.toUpperCase()}
            </h3>
            <section className={styles.container}>
              {videos.map((video) => (
                <Cardvideo
                  {...video}
                  key={video.id}
                  onEdit={handleEditVideo}
                  onDelete={() => handleDeleteVideo(video.id)}
                />
              ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
