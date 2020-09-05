import React, { useState, useEffect } from "react";

const UseEffect3 = () => {
  const [message, setMessage] = useState("---");

  useEffect(() => {
    console.log("componentDidMount");
    const timer = setTimeout(() => {
      setMessage("Hello");
    }, 2000);

    return () => {
      console.log("componentWillUnmount");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container w-25">
      <h3 className="text-white">Message: {message}</h3>
    </div>
  );
};

export default UseEffect3;
