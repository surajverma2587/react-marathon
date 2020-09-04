import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  return (
    <Sider trigger={null}>
      <Menu mode="inline">
        <SubMenu key="useState" title="componentDidMount">
          <Menu.Item key="1">
            <Link to="/componentDidMount-1">Basic</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/componentDidMount-2">Data Fetch</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu mode="inline">
        <SubMenu key="useState" title="useState Hook">
          <Menu.Item key="1">
            <Link to="/useState-1">Class-Based</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/useState-2">Hook-Based</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/useState-3">Custom-Hook</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavBar;
