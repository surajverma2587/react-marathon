import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container w-25">
      <div className="form-group">
        <label>Hook-Based</label>
        <input type="text" className="form-control" onChange={handleChange} />
        <small className="form-text text-muted">{searchTerm}</small>
      </div>
    </div>
  );
};

export default Search;
