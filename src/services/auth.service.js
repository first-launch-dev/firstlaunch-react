import axios from "axios";
import { apiUrl } from "helper.js";

const API_URL = apiUrl();

/*
 ** Basic Auth
 */
const register = (data) => {
  return axios.post(API_URL + "/register", data);
};
const login = (data) => {
  return axios.post(API_URL + "/login", data);
};


const AuthService = {
  register,
  login
};
export default AuthService;
