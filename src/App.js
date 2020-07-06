import React, { useState } from "react";
import { render } from "react-dom";
import { DatePicker, message, Alert, PageHeader, Card } from "antd";

import "antd/dist/antd.css";
import "./App.less";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from "./config/routes";
import Principal from "./pages/landing";
import AuthProdiver from "./provider/AuthProviders";
//import AuthProvider from "./provider/authProviders";

function App() {
	/**
	 * Esto es una prueba
	 * @method {integer}
	 * {aasdasda}
	 * @type {String}
	 */

	return (
		<AuthProdiver>
			<Router>
				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</Router>
		</AuthProdiver>
	);
}

function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

export default App;
