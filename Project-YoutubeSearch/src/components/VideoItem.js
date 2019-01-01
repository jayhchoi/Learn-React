import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <li
        onClick={() => onVideoSelect(video)}
        className="video-item media py-2"
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          className="mr-3"
          alt={video.snippet.title}
        />
        <div className="media-body">
          <p className="mt-0 mb-1">{video.snippet.title}</p>
        </div>
      </li>
    );
  }
}

export default VideoItem;
