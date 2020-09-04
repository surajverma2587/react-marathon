import React, { useState } from "react";

const useSearch = (initialValue = "") => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return { searchTerm, handleChange };
};

const Search = () => {
  const { searchTerm, handleChange } = useSearch();

  return (
    <div className="container w-25">
      <form>
        <div class="form-group">
          <label>Custom-Hook</label>
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
