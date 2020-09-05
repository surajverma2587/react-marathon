import React from "react";
import { Alert } from "antd";

const Error = ({ error }) => {
  return (
    <Alert
      message="Error"
      description={error}
      type="error"
      showIcon
      style={{ textAlign: "left", width: "80%" }}
    />
  );
};

export default Error;
