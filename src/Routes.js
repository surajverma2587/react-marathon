import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

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
import UseReducer1 from "./useReducer/01";
import UseReducer2 from "./useReducer/02";
import UseReducer3 from "./useReducer/03";

const { Content } = Layout;

const Routes = () => {
  return (
    <Layout>
      <Content className="app">
        <Route
          exact
          path="/"
          component={() => {
            return (
              <div>
                <h1 className="text-white">React Marathon</h1>
              </div>
            );
          }}
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

        <Route exact path="/useReducer-1" component={UseReducer1} />
        <Route exact path="/useReducer-2" component={UseReducer2} />
        <Route exact path="/useReducer-3" component={UseReducer3} />
      </Content>
    </Layout>
  );
};

export default Routes;
