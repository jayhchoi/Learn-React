import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;

    const renderedList = videos.map(video => {
      return (
        <VideoItem
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      );
    });

    return <ul className="video-list list-unstyled p-2">{renderedList}</ul>;
  }
}

export default VideoList;
