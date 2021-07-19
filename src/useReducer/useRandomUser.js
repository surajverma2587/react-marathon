import { useEffect, useReducer } from "react";
import axios from "axios";

import userReducer from "./userReducer";
import { fetching, success } from "./actionCreators";

const useRandomUser = (URL) => {
  const initialState = {
    status: null,
    response: null,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetching());

      try {
        const { data } = await axios.get(URL);
        const user = data.results[0];

        dispatch(success(user));
      } catch (error) {
        dispatch(error(error.message));
      }
    };

    fetchData();
  }, [URL]);

  return { state };
};

export default useRandomUser;
