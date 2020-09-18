import React from "react";

import useSearch from "./useSearch";

const Search = () => {
  const { searchTerm, handleChange } = useSearch();

  return (
    <div className="container w-25">
      <div className="form-group">
        <label>Custom-Hook</label>
        <input type="text" className="form-control" onChange={handleChange} />
        <small className="form-text text-muted">{searchTerm}</small>
      </div>
    </div>
  );
};

export default Search;
