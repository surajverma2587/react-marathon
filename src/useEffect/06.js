import React from "react";
import { Card } from "antd";

import useFetch from "./useFetch";
import Loading from "./Loading";
import Error from "./Error";

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

const UseEffect6 = () => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <Loading />;
  }
  if (!loading && error) {
    return <Error error={error} />;
  }

  if (data) {
    return renderCard(data);
  }

  return null;
};

export default UseEffect6;
