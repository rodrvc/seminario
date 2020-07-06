import { BASE_PATH } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constans";
import jwtDecode from "jwt-decode";

export function getAccess() {
	const accessToken = localStorage.getItem(ACCESS_TOKEN);
	if (!accessToken || accessToken === "null") {
		return null;
	}

	return isExpired(accessToken) ? null : accessToken;
}

export function getRefresh() {
	const refreshToken = localStorage.getItem(REFRESH_TOKEN);
	if (!refreshToken || refreshToken == "null") {
		return null;
	}

	return isExpired(refreshToken) ? null : refreshToken;
}

export function setRefreshAccessToken(refreshToken) {
	const url = `${BASE_PATH}/refresh-access-token`;
	const responseBody = {
		refresh: refreshToken,
	};
	const params = {
		method: "POST",
		body: JSON.stringify(responseBody),
		headers: {
			"Content-type": "application/json",
		},
	};

	fetch(url, params)
		.then((response) => {
			if (response.status !== 200) {
				return null;
			}
			return response;
		})
		.then((result) => {
			if (!result) {
				logOut();
			} else {
				const { accessToken, refreshToken } = result;
				localStorage.setItem(ACCESS_TOKEN, accessToken);
				localStorage.setItem(REFRESH_TOKEN, refreshToken);
			}
		});
}

export function logOut() {
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(REFRESH_TOKEN);
}

function isExpired(token) {
	const seconds = 60;
	const metaToken = jwtDecode(token);
	const { exp } = metaToken;
	const now = (Date.now() + seconds) / 1000;
	return now > exp; // devoluelve boolean
}
