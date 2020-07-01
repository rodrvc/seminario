import { BASE_PATH } from "./config";

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
