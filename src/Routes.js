import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import ComponentDidMount1 from "./componentDidMount/01";
import ComponentDidMount2 from "./componentDidMount/02";

import Search1 from "./useState/01";
import Search2 from "./useState/02";
import Search3 from "./useState/03";
import UseEffect1 from "./useEffect/01";
import UseEffect2 from "./useEffect/02";
import UseEffect3 from "./useEffect/03";
import UseEffect4 from "./useEffect/04";
import UseEffect5 from "./useEffect/05";
import UseEffect6 from "./useEffect/06";
import LoginForm from "./forms/01";

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

        <Route exact path="/useEffect-1" component={UseEffect1} />
        <Route exact path="/useEffect-2" component={UseEffect2} />
        <Route exact path="/useEffect-3" component={UseEffect3} />
        <Route exact path="/useEffect-4" component={UseEffect4} />
        <Route exact path="/useEffect-5" component={UseEffect5} />
        <Route exact path="/useEffect-6" component={UseEffect6} />

        <Route exact path="/forms-1" component={LoginForm} />
      </Content>
    </Layout>
  );
};

export default Routes;
