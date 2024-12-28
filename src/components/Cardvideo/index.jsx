import React, { useState } from "react";
import styles from "./Cardvideo.module.css";
import EditVideoPopup from "components/pages/EditVideo/EditVideoPopup";

function Cardvideo({ id, imgvideo, titulo, link, categoria, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const obtenerBoxShadowPorCategoria = (categoria) => {
    const boxShadows = {
      "front end": "0px 0px 10px 4px rgba(7, 120, 155, 0.486)",
      "back end": "0px 0px 10px 4px rgba(34, 139, 34, 0.486)",
      "innovación y gestión": "0px 0px 10px 4px rgba(252, 211, 3, 0.486)",
    };
    return boxShadows[categoria] || "0px 0px 10px 4px rgba(0, 0, 0, 0.2)";
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedVideo) => {
    onEdit(updatedVideo);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <>
      <div
        className={styles.card}
        style={{
          boxShadow: obtenerBoxShadowPorCategoria(categoria),
        }}
      >
        <div
          className={styles.imgcontenedor}
          style={{
            boxShadow: obtenerBoxShadowPorCategoria(categoria),
          }}
        >
          <a href={link} className={styles.linkvid}>
            <img src={imgvideo} alt={titulo} className={styles.imgvideo} />
            <h2 className={styles.titlevid}>{titulo}</h2>
          </a>
        </div>
        <div className={styles.iconos}>
          <button className={styles.borrar} onClick={handleDeleteClick} aria-label="borrar">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.5 1h9v3H22v2h-2.029l-.5 17H4.529l-.5-17H2V4h5.5zm2 3h5V3h-5zM6.03 6l.441 15h11.058l.441-15zm3.142 3.257L12 12.086l2.828-2.829l1.415 1.415l-2.829 2.828l2.829 2.828l-1.415 1.415L12 14.914l-2.828 2.829l-1.415-1.415l2.829-2.828l-2.829-2.828z"
                />
              </svg>
            </span>{" "}
            <p> BORRAR </p>{" "}
          </button>
          <button className={styles.editar} onClick={handleEditClick} aria-label="editar">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.238 3.64a1.854 1.854 0 0 0-1.629-1.628l-.8.8a3.37 3.37 0 0 1 1.63 1.628zM4.74 7.88l3.87-3.868a1.854 1.854 0 0 1 1.628 1.629L6.369 9.51a1.5 1.5 0 0 1-.814.418l-1.48.247l.247-1.48a1.5 1.5 0 0 1 .418-.814M9.72.78l-2 2l-4.04 4.04a3 3 0 0 0-.838 1.628L2.48 10.62a1 1 1 0 0 0 1.151 1.15l2.17-.36a3 3 0 0 0 1.629-.839l4.04-4.04l2-2c.18-.18.28-.423.28-.677A3.353 3.353 0 0 0 10.397.5c-.254 0-.498.1-.678.28M2.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            <p> EDITAR </p>{" "}
          </button>
        </div>
      </div>
      {isEditing && (
        <EditVideoPopup
          videoData={{ id, imgvideo, titulo, link, categoria }}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default Cardvideo;
