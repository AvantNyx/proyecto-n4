
export const fetchVideos = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/AvantNyx/proyecto-n4/videos");
      if (!response.ok) {
        throw new Error("Error al obtener los videos");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  };

export const updateVideo = async (id, updatedVideoData) => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/AvantNyx/proyecto-n4/videos${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVideoData),
      });
      
  
      if (!response.ok) {
        throw new Error("Error al actualizar el video");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Hubo un problema con la actualización:", error);
    }
  };

  export const addVideo = async (video) => {
    const response = await fetch('https://my-json-server.typicode.com/AvantNyx/proyecto-n4/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) throw new Error('Error al agregar el video');
    return response.json();
  };