import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = ({ target }) => {
    // console.log(this.state.searchTerm);
    setSearchTerm(target.value);
    // console.log(this.state.searchTerm);
  };

  return (
    <div className="container w-25">
      <form>
        <div class="form-group">
          <label>Hook-Based</label>
          <input type="text" class="form-control" onChange={handleChange} />
          <small class="form-text text-muted">{searchTerm}</small>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
