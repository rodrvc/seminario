import { Component } from "react";
import { Layout } from "antd";
import LayoutBasic from "../layouts/LayoutBasic"; // base
import Principal from "../pages/landing";
import { Login } from "../pages/landing/Login";

const routes = [
  {
    path: "/principal",
    component: LayoutBasic,
    routes: [
      {
        path: "/principal/index",
        component: Principal,
        exact: true,
      },
      {
        path: "/principal/login",
        component: Login,
        exact: true,
      },
    ],
  },
];

export default routes;
