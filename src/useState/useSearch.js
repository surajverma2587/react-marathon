import { useState } from "react";

const useSearch = (initialValue = "") => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return { searchTerm, handleChange };
};

export default useSearch;
