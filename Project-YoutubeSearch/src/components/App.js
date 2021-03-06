import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onQuerySubmit = async query => {
    const response = await youtube.get("/search", {
      params: {
        q: query
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onQuerySubmit("Learn React");
  }

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
