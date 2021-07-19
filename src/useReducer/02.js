import React, { useReducer } from "react";

const UseReducer2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, count: state.count + 1 };
      case "SUB":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const onAdd = () => {
    dispatch({ type: "ADD" });
  };

  const onSub = () => {
    dispatch({ type: "SUB" });
  };

  return (
    <div className="container w-25">
      <div className="form-group">
        <p>useReducer based</p>
        <button className="btn btn-success mt-5 mb-5" onClick={onAdd}>
          Add
        </button>
        <small className="form-text text-muted">{state.count}</small>
        <button className="btn btn-danger mt-5" onClick={onSub}>
          Sub
        </button>
      </div>
    </div>
  );
};

export default UseReducer2;
