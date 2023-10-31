export const BASE_URL = "http://51.250.12.63";
// export const BASE_URL = "http://localhost:3000";

// Обработка ответа сервера
export const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
};

// Регистрация:
export const register = (name: string, email: string, password: string) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    }).then(checkResponse);
};

//Авторизация
export const authorize = (email: string, password: string) => {
  return fetch(`${BASE_URL}/api/v1/auth/sign-in`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
};
