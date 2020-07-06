import React, { useState, useEffect, createContext } from "react";
import { getAccess, getRefresh, setRefreshAccessToken, logOut } from "../api/auth";
import Item from "antd/lib/list/Item";

export const AuthContext = createContext();

export default function AuthProvider(props) {
	const { children } = props;

	const [user, setUser] = useState({
		user: null,
		isLoading: true,
	});

	useEffect(() => {
		verifyLogin(setUser);
	}, []);

	return <AuthContext.Provider value={user}>{children} </AuthContext.Provider>;
}

function verifyLogin(setUser) {
	const accessToken = getAccess();

	if (!accessToken) {
		const refreshToken = getRefresh();
		if (!refreshToken) {
			logOut();
			setUser({
				user: null,
				isLoading: false,
			});
		} else {
			refreshToken(refreshToken);
		}
	} else {
		setUser({
			isLoading: true,
			user: accessToken,
		});
	}
}
