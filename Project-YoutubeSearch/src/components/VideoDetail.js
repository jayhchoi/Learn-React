import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="video-detail m-2">Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail card m-2">
      <iframe title="video-player" src={videoSrc} width="100%" height="350" />
      <div className="card-body">
        <h5 className="card-title mt-3">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
