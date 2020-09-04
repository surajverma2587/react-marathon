import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import ComponentDidMount1 from "./componentDidMount/01";
import ComponentDidMount2 from "./componentDidMount/02";

import Search1 from "./useState/01";
import Search2 from "./useState/02";
import Search3 from "./useState/03";

const { Content } = Layout;

const Routes = () => {
  return (
    <Layout>
      <Content className="app">
        <Route
          exact
          path="/componentDidMount-1"
          component={ComponentDidMount1}
        />
        <Route
          exact
          path="/componentDidMount-2"
          component={ComponentDidMount2}
        />

        <Route exact path="/useState-1" component={Search1} />
        <Route exact path="/useState-2" component={Search2} />
        <Route exact path="/useState-3" component={Search3} />
      </Content>
    </Layout>
  );
};

export default Routes;
