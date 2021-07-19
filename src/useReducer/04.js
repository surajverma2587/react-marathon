import React, { useReducer } from "react";
import axios from "axios";
import { Alert, Card, Spin } from "antd";

const renderLoadingSpinner = () => {
  return (
    <div
      style={{
        textAlign: "center",
        borderRadius: "4px",
        marginBottom: "20px",
        padding: "30px 50px",
        margin: "20px 0",
      }}
    >
      <Spin />
    </div>
  );
};

const renderError = (error) => {
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

const renderCard = (user) => {
  const { name, location, picture } = user;
  const imageUrl = picture.large;
  const title = `${name.title}. ${name.first} ${name.last}`;
  const description = location.country;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
};

const reducer = () => {};

const UseReducer4 = () => {
  const initialState = {
    status: null, // FETCHING, SUCCESS, ERROR
    response: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.status === "FETCHING") {
    return renderLoadingSpinner();
  }

  if (state.status === "ERROR") {
    return renderError(state.error);
  }

  if (state.status === "SUCCESS") {
    return renderCard(state.response);
  }

  return null;
};

export default UseReducer4;
