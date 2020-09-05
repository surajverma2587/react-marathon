import React, { useEffect, useState } from "react";
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

const UseEffect5 = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://randomuser.me/api/");

        const user = data.results[0];

        setUser(user);
        setLoading(false);
        setError("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return renderLoadingSpinner();
  }

  if (error) {
    return renderError(error);
  }

  return renderCard(user);
};

export default UseEffect5;
