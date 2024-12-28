import React, { useState } from "react";
import styles from "./EditVideoPopup.module.css";
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import customTheme from 'components/styles/theme';

function EditVideoPopup({ videoData, onClose, onSave }) {
  
  const [titulo, setTitulo] = useState(videoData.titulo);
  const [categoria, setCategoria] = useState(videoData.categoria);
  const [link, setLink] = useState(videoData.link);
  const [imgvideo, setImgvideo] = useState(videoData.imgvideo);
  const [descripcion, setDescripcion] = useState(videoData.descripcion);

 
  const handleSave = () => {
    if (!titulo || !categoria || !link || !imgvideo || !descripcion) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return;
    }

    const updatedVideo = {
      ...videoData,
      titulo,
      categoria,
      link,
      imgvideo,
      descripcion,
    };
    onSave(updatedVideo); 
    onClose(); 
  };

   const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setLink('');
    setImgvideo('');
    setDescripcion('');
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        {/* Botón para cerrar el popup */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar ventana">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#35bcff" d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z" />
              <path fill="#35bcff" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z" />
            </svg>
          </span>
        </button>

        <h2 className={styles.edtitle}>EDITAR CARD:</h2>

        {/* Formulario de edición */}
        <ThemeProvider theme={customTheme}>
          <TextField
            style={{ marginLeft: "2em" }}
            id="titulo"
            label="Título"
            variant="outlined"
            margin="dense"
            sx={{ width: '300px' }}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <TextField
            style={{ marginLeft: "2em" }}
            id="categoria"
            select
            label="Categoría"
            margin="dense"
            value={categoria}
            sx={{ width: '300px' }}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <MenuItem value="front end">Front End</MenuItem>
            <MenuItem value="back end">Back End</MenuItem>
            <MenuItem value="innovación y gestión">Innovación y Gestión</MenuItem>
          </TextField>

          <TextField
            style={{ marginLeft: "2em" }}
            id="imgvideo"
            label="URL de la imagen"
            variant="outlined"
            margin="dense"
            sx={{ width: '300px' }}
            value={imgvideo}
            onChange={(e) => setImgvideo(e.target.value)}
          />

          <TextField
            style={{ marginLeft: "2em" }}
            id="link"
            label="URL del video"
            variant="outlined"
            margin="dense"
            sx={{ width: '300px' }}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <TextField
            style={{ marginLeft: "2em" }}
            id="descripción"
            label="Descripción"
            multiline
            rows={5}
            value={descripcion}
            sx={{ width: '420px' }}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </ThemeProvider>

        {/* Botones de acción */}
        <div className={styles.actions}>
          <button onClick={handleSave} className={styles.popGuard} aria-label="Guardar">GUARDAR</button>
          <button onClick={handleClear} className={styles.popLimp} aria-label="Limpiar">LIMPIAR</button>
        </div>
      </div>
    </div>
  );
}

export default EditVideoPopup;