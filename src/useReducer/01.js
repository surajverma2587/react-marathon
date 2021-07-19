import React, { useState } from "react";

const UseReducer1 = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSub = () => {
    setCount(count - 1);
  };

  return (
    <div className="container w-25">
      <div className="form-group">
        <p>useState based</p>
        <button className="btn btn-success mt-5 mb-5" onClick={onAdd}>
          Add
        </button>
        <small className="form-text text-muted">{count}</small>
        <button className="btn btn-danger mt-5" onClick={onSub}>
          Sub
        </button>
      </div>
    </div>
  );
};

export default UseReducer1;
