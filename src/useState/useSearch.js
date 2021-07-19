import React, { useState } from "react";

const useSearch = (initialValue = "") => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const Input = () => {
    return (
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        value={searchTerm}
      />
    );
  };

  return { searchTerm, Input };
};

export default useSearch;
