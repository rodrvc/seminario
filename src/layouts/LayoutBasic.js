import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
import { Login } from "../pages/Usr/Login";

export default function LayoutBasic(props) {
  const { routes } = props;

  const user = null;
  if (!user) {
    return (
      <>
        <Route path="/principal/login" component={Login} />
        <Redirect to="/principal/login" />
      </>
    );
  }

  return (
    <div>
      <p>Esto es un layout basico para mi aplicacion</p>
      <Layout>
        <RoutesWithComponents routes={routes} />
      </Layout>
    </div>
  );
}

function RoutesWithComponents({ routes }) {
  return routes.map((rout, i) => (
    <Route
      key={i}
      path={rout.path}
      exac={rout.exac}
      component={rout.component}
    />
  )); // this is an Object so not {}!! instead ()
}
