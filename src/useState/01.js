import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <div className="container w-25">
        <div className="form-group">
          <label>Class-Based</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">
            {this.state.searchTerm}
          </small>
        </div>
      </div>
    );
  }
}

export default Search;
