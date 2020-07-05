import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { Login } from "../pages/landing/Login";
import { HeaderComponent } from "./HeaderComponent";
import { getAccess, getRefresh } from "../api/auth";

const hola = getAccess();
const resT = getRefresh();
console.log("access token : " + hola + "\n refreshtoken : " + resT);

export default function LayoutBasic(props) {
	const { routes } = props;

	const user = null;
	if (!user) {
		return (
			<>
				<HeaderComponent />
				<div className="landing-page-bg">
					<Route path="/principal/login" component={Login} />
					<Redirect to="/principal/login" />
				</div>
			</>
		);
	}

	return (
		<>
			<p>Esto es un layout basico para mi aplicacion</p>

			<Layout>
				<RoutesWithComponents routes={routes} />
			</Layout>
		</>
	);
}

function RoutesWithComponents({ routes }) {
	return routes.map((rout, i) => (
		<>
			<Route key={i} path={rout.path} exac={rout.exac} component={rout.component} />
		</>
	)); // this is an Object so not {}!! instead ()
}
