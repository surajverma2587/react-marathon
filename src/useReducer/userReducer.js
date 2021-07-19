import { FETCHING, SUCCESS, ERROR } from "./actionTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, response: action.response };
    case ERROR:
      return { ...state, status: ERROR, error: action.error };
    default:
      return state;
  }
};

export default userReducer;
