import React, { Component } from "react";
import axios from "axios";
import { Alert, Card, Spin } from "antd";

class ComponentDidMount2 extends Component {
  state = {
    user: undefined,
    loading: true,
    error: "",
  };

  async componentDidMount() {
    console.log("componentDidMount() executed");

    try {
      const { data } = await axios.get("https://randomuser.me/api/");

      const user = data.results[0];

      this.setState({ user, loading: false, error: "" });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  renderLoadingSpinner() {
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
  }

  renderError() {
    return (
      <Alert
        message="Error"
        description={this.state.error}
        type="error"
        showIcon
        style={{ textAlign: "left", width: "80%" }}
      />
    );
  }

  renderCard() {
    const { name, location, picture } = this.state.user;
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
  }

  render() {
    console.log("render() executed");

    if (this.state.loading) {
      return this.renderLoadingSpinner();
    }

    if (this.state.error) {
      return this.renderError();
    }

    return this.renderCard();
  }
}

export default ComponentDidMount2;
