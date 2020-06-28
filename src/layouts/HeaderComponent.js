import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export function HeaderComponent(props) {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}
