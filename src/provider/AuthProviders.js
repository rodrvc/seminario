import React, { useState, useEffect, createContext } from "react";
import { getAccess, getRefresh, setRefreshAccessToken, logOut } from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider(props) {
	const { children } = props;

	const [user, setUser] = useState({
		user: null,
		isLoading: true,
	});

	useEffect(() => {
		verifyLogin(setUser)
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
			setRefreshAccessToken(refreshToken);
		}
	} else {
		setUser({
			user: jwtDecode(accessToken),
			isLoading: true,
		});
	}
}
