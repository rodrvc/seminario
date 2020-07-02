import { Component } from "react";
import { Layout } from "antd";
import LayoutBasic from "../layouts/LayoutBasic"; // base
import Login from "../pages/landing";

const routes = [
  {
    path: "/principal",
    component: LayoutBasic,
    routes: [
      {
        path: "/principal/index",
        component: Login,
        exact: true,
      },
      // {
      //   path: "/principal/login",
      //   component: Login,
      //   exact: true,
      // },
    ],
  },
];

export default routes;
