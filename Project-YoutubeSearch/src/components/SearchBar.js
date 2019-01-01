import React, { Component } from "react";

class SearchBar extends Component {
  state = { query: "" };

  onFormSubmit = e => {
    e.preventDefault(); // Prevent auto refresh

    this.props.onFormSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-bar p-2">
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Video Search</span>
            </div>
            <input
              className="form-control"
              type="text"
              onChange={e => this.setState({ query: e.target.value })}
              value={this.state.query}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
