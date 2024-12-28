import React, { useState } from "react";
import Cardvideo from "./Cardvideo";
import EditVideoPopup from "./EditVideoPopup";

const VideoList = ({ videos, setVideos }) => {
  const [editingVideo, setEditingVideo] = useState(null);

  const handleEditClick = (video) => {
    setEditingVideo(video);
  };

  const handleSaveEdit = (updatedVideo) => {

    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    setEditingVideo(null);
  };

  return (
    <div>
      {videos.map((video) => (
        <Cardvideo
          key={video.id}
          video={video}
          onEdit={() => handleEditClick(video)}
        />
      ))}

      {editingVideo && (
        <EditVideoPopup
          video={editingVideo}
          onSave={handleSaveEdit}
          onClose={() => setEditingVideo(null)}
        />
      )}
    </div>
  );
};

export default VideoList;
