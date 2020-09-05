import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [message, setMessage] = useState("---");

  useEffect(() => {
    console.log("something like componentDidMount");
    setMessage("Hello");
  }, []);

  return (
    <div className="container w-25">
      <h3 className="text-white">Message: {message}</h3>
    </div>
  );
};

export default UseEffect2;
