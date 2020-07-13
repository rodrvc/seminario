import { BASE_PATH } from "./config";
import { message } from "antd";

export function signUpApi(data) {
	const url = `${BASE_PATH}/users`;
	const params = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	};

	return fetch(url, params)
		.then((response) => {
			return response; // not convert to json!
		})
		.then((result) => {
			if (result) {
				return { ok: true, message: "Usuario creado correctamente" };
			}
			return { ok: false, message: result.message + "erro 1 " };
		})
		.catch((err) => {
			return { ok: false, err };
		});
}

export function signin(data) {
	//get tokens
	console.log(data);
	const url = `${BASE_PATH}/signin`;
	//console.log(url);
	const params = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	};
	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			if (result) {
				return result;
			}
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getTaskers(token) {
	const url = `${BASE_PATH}/get-taskers`;

	const params = {
		method: "Get",

		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	};
	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			if (result) {
				return result;
			}
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getTaskersRequired(token, skill) {
	const url = `${BASE_PATH}/get-taskers?skill=${skill}`;

	const params = {
		method: "Get",

		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	};
	return fetch(url, params)
		.then((response) => {
			return response.json();
		})

		.catch((err) => {
			return err.message;
		});
}
