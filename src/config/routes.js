import { Component } from "react";
import { Layout } from "antd";
import LayoutBasic from "../layouts/LayoutBasic"; // base
import Login from "../pages/landing";
import SignupPage from "../pages/Signup/SignupPage";
import LayoutInternal from "../layouts/LayoutInternal";
import SingUp from "../components/SingUp";

const routes = [
	{
		path: "/principal",
		component: LayoutBasic,
		exact: false,

		routes: [
			{
				path: "/principal/signin",
				component: Login,
				exact: true,
			},
			{
				path: "/principal/signup",
				component: SignupPage,
				exact: true,
			},
			// {
			//   path: "/principal/login",
			//   component: Login,
			//   exact: true,
			// },
		],
	},
	{
		path: "/admin",
		component: LayoutBasic,
		exact: false,
		routes: [
			{
				path: "/admin",
				component: SignupPage,
				exact: true,
			},
			// {
			// 	path: "/admin/login",
			// 	component: AdminSingIn,
			// 	exact: true,
			// },
			// {
			// 	path: "/admin/users",
			// 	component: AdminUsers,
			// 	exact: true,
			// },
			// {
			// 	path: "/admin/menu",
			// 	component: AdminMenuWeb,
			// 	exact: true,
			// },
			// {
			// 	path: "/admin/courses",
			// 	component: AdminCourses,
			// 	exact: true,
			// },
			// {
			// 	path: "/admin/blog",
			// 	component: AdminBlog,
			// 	exact: true,
			// },
			// {
			// 	component: Error404,
			// },
		],
	},
];

export default routes;
