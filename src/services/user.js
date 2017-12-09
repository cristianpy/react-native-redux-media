import { API_IP, API_PORT, API_PROTOCOL } from '../constants';

const base64 = require('base-64');

const login = (username, password) => {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(username+":"+password));
    return fetch(`${API_PROTOCOL}://${API_IP}:${API_PORT}/api/login`, {
      headers: headers
    })
}

const register = (email, fullName, password) => {
    let headers = new Headers();
    return fetch(`${API_PROTOCOL}://${API_IP}:${API_PORT}/api/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: email,
          fullname: fullName,
          password: password
        })
    });
}


const getUserInfo = (token) => {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(token+":noused"));
    return fetch(`${API_PROTOCOL}://${API_IP}:${API_PORT}/api/users`, {
      headers: headers
    })
}

export const userService = {
  login,
  register,
  getUserInfo
}