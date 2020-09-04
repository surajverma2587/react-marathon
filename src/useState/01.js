import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = ({ target }) => {
    // console.log(this.state.searchTerm);
    this.setState({
      searchTerm: target.value,
    });
    // console.log(this.state.searchTerm);
  };

  render() {
    console.log(this);
    return (
      <div className="container w-25">
        <form>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
