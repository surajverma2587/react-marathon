import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (initialState = {}) => {
  const [data, setData] = useState(initialState.data);
  const [loading, setLoading] = useState(initialState.loading || true);
  const [error, setError] = useState(initialState.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://randomuser.me/api/");
        setData(data.results[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
