import React from "react";

import useSearch from "./useSearch";

const Search = () => {
  const { searchTerm, Input } = useSearch();

  return (
    <div className="container w-25">
      <div className="form-group">
        <label>Custom-Hook</label>
        <Input />
        <Input />
        <small className="form-text text-muted">{searchTerm}</small>
      </div>
    </div>
  );
};

export default Search;
