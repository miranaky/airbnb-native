import axios from "axios";

//make easy request without URL copy and pasting.
//make post get delete put requests.
//send jwt easily

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://127.0.0.1:8000/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  rooms: (page = 1, token) =>
    callApi("get", `/rooms/?page=${page}`, null, token),
  favs: (userId, token) =>
    callApi("get", `/users/${userId}/favs/`, null, token),
  toggleFav: (userId, roomId, token) =>
    callApi("put", `/users/${userId}/favs/`, { pk: roomId }, token),
};
