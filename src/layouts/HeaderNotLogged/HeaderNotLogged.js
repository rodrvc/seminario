import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./headerNotLogged.css";
import Tasklogo from "../../assets/task-logo-square-400px.png";

const { SubMenu } = Menu;
const { Header } = Layout;

function HeaderNotLogged(props) {
	return (
		<Header className="header">
			<img className="logo" src={Tasklogo} alt="logo" />

			<Menu theme="light" mode="horizontal">
				<Menu.Item key="1">
					<a href="/principal/signin">Inicio</a>
				</Menu.Item>
				<Menu.Item key="2">
					<a href="/principal/signup">Registrate</a>
				</Menu.Item>
				<Menu.Item key="3">Contacto </Menu.Item>
			</Menu>
		</Header>
	);
}

export default HeaderNotLogged;
