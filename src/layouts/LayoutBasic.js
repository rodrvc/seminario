import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { Login } from "../pages/landing/Login";
import { HeaderComponent } from "./HeaderComponent";
import { getAccess, getRefresh } from "../api/auth";
import useAuth from "../hooks/useAuth";
import { SELECTION_ALL } from "antd/lib/table/hooks/useSelection";

export default function LayoutBasic(props) {
	const { routes } = props;

	const { user, isLoading } = useAuth();

	if (!user) {
		return (
			<>
				<HeaderComponent />
				<div className="landing-page-bg">
					{
						/* <Route path="/principal/" component={Login} />
					<Redirect to="/principal/" /> */
						<RoutesWithComponents routes={routes} />
					}
				</div>
			</>
		);
	} else if (user) {
		return (
			<>
				<Layout>
					<HeaderComponent />
					<RoutesWithComponents routes={routes} />
				</Layout>
			</>
		);
	}
}

function RoutesWithComponents({ routes }) {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
		</Switch>
	);
	// this is an Object so not {}!! instead ()
}
