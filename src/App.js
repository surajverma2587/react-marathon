import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import Routes from "./Routes";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Layout>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </Layout>
  );
};

export default App;
