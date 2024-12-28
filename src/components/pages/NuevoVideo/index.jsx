import React, { useState } from 'react';
import { addVideo } from 'services/apiService';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from 'components/styles/theme';
import styles from "./NuevoVideo.module.css";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const currencies = [
  { value: "front end", label: "Front End" },
  { value: "back end", label: "Back End" },
  { value: "innovación y gestión", label: "Innovación y Gestión" },
];

function NuevoVideo() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    titulo: '',
    categoria: '',
    imgvideo: '',
    link: '',
    descripción: '',
    errors: {}
  });

  const handleChange = (field) => (event) => {
    setFormState((prev) => ({
      ...prev,
      [field]: event.target.value,
      errors: { ...prev.errors, [field]: '' }
    }));
  };

  const handleValidate = () => {
    const errors = {};
    if (!formState.titulo.trim()) errors.titulo = 'El título es obligatorio';
    if (!formState.categoria) errors.categoria = 'Debe seleccionar una categoría';
    if (!formState.imgvideo.trim()) errors.imgvideo = 'La URL de la imagen es obligatoria';
    if (!formState.link.trim()) errors.link = 'La URL del video es obligatoria';
    if (!formState.descripción.trim()) errors.descripción = 'La descripción es obligatoria';
    setFormState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidate()) {

      const formattedLink = formState.link.startsWith('http://') || formState.link.startsWith('https://')
      ? formState.link
      : `https://${formState.link}`;


      const newVideo = {
        id: Date.now(),
        titulo: formState.titulo,
        categoria: formState.categoria,
        imgvideo: formState.imgvideo,
        link: formattedLink,
        descripción: formState.descripción,
      };

      try {
        await addVideo(newVideo);
        alert('¡Video agregado con éxito!');
        handleClear();
        navigate('/');
      } catch (error) {
        console.error('Error al agregar el video:', error);
        alert('Hubo un error al agregar el video');
      }
    }
  };

  const handleClear = () => {
    setFormState({
      titulo: '',
      categoria: '',
      imgvideo: '',
      link: '',
      descripción: '',
      errors: {}
    });
  };

  return (
    <form className={styles.formu} onSubmit={handleSubmit}>
      <section className={styles.formsub}>
        <h1 style={{ fontWeight: "700", fontSize: "34px" }}>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </section>
      <section className={styles.formulario}>
        <h2 className={styles.crtarjeta}>Crear Tarjeta</h2>
        <div className={styles.textFieldsContainer} style={{ marginTop: "38px" }}>
          <ThemeProvider theme={customTheme}>
            <TextField
              id="titulo"
              label="Título"
              variant="outlined"
              margin="dense"
              sx={{ width: '300px' }}
              value={formState.titulo}
              onChange={handleChange('titulo')}
              error={!!formState.errors.titulo}
              helperText={formState.errors.titulo}
            />
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <TextField
              id="categoria"
              select
              label="Categoría"
              margin="dense"
              sx={{ width: '300px' }}
              value={formState.categoria}
              onChange={handleChange('categoria')}
              error={!!formState.errors.categoria}
              helperText={formState.errors.categoria || 'Seleccione una categoría'}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>
        </div>
        <div className={styles.textFieldsContainer2}>
          <ThemeProvider theme={customTheme}>
            <TextField
              id="imgvideo"
              label="URL de la imagen"
              variant="outlined"
              margin="dense"
              sx={{ width: '300px' }}
              value={formState.imgvideo}
              onChange={handleChange('imgvideo')}
              error={!!formState.errors.imgvideo}
              helperText={formState.errors.imgvideo}
            />
          </ThemeProvider>
          <ThemeProvider theme={customTheme}>
            <TextField
              id="link"
              label="URL del video"
              variant="outlined"
              margin="dense"
              sx={{ width: '300px' }}
              value={formState.link}
              onChange={handleChange('link')}
              error={!!formState.errors.link}
              helperText={formState.errors.link}
            />
          </ThemeProvider>
        </div>
        <div className={styles.textFieldsContainer3}>
          <div>
            <ThemeProvider theme={customTheme}>
              <TextField
                id="descripción"
                label="Descripción"
                multiline
                rows={5}
                margin="dense"
                placeholder="¿De qué se trata este vídeo?"
                sx={{ width: '400px' }}
                value={formState.descripción}
                onChange={handleChange('descripción')}
                error={!!formState.errors.descripción}
                helperText={formState.errors.descripción}
              />
            </ThemeProvider>
            <section className={styles.botonesForm}>
              <button className={styles.btguardar} type="submit" aria-label="Guardar">
                GUARDAR
              </button>
              <button className={styles.btlimpiar} type="button" onClick={handleClear} aria-label="Limpiar">
                LIMPIAR
              </button>
            </section>
          </div>
        </div>
      </section>
    </form>
  );
}

export default NuevoVideo;
