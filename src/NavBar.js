import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  return (
    <Sider trigger={null}>
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
      <Menu mode="inline">
        <SubMenu key="useState" title="useEffect Hook">
          <Menu.Item key="1">
            <Link to="/useEffect-1">Class-Based</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/useEffect-2">Hook-Based</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/useEffect-3">Timer</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/useEffect-4">Class-Based API</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/useEffect-5">Hook-Based API</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/useEffect-6">Custom-Hook API</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu mode="inline">
        <SubMenu key="useState" title="forms">
          <Menu.Item key="1">
            <Link to="/forms-1">Login Form</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavBar;
