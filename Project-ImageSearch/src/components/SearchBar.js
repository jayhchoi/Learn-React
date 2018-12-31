import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    // onSubmit is passed down from App component as a callback
    // I run it here in SearchBar as to have access to this.state.term
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* Above is called 'CONTROLLED INPUT' where data is stored in state rather than in DOM */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
