import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";

import Tasklogo from "../../assets/task-logo-square-400px.png";
import { logOut } from "../../api/auth";
import "./headerComponent.css";

const { SubMenu } = Menu;
const { Header } = Layout;

function HeaderComponent(props) {
	const closeSession = () => {
		logOut();
		window.location.reload();
	};

	return (
		<Header className="header-light">
			<img className="logo" src={Tasklogo} alt="logo" />
			<Menu theme="light" mode="horizontal">
				<Menu.Item key="1">
					<a href="/principal/signin">INICIO</a>
				</Menu.Item>
				<Menu.Item key="2">
					<a href="#">MODO TASK</a>
				</Menu.Item>
				<Menu.Item key="3">
					<Button type="link" onClick={closeSession}>
						SALIR
					</Button>
				</Menu.Item>
			</Menu>
		</Header>
	);
}

export default HeaderComponent;
