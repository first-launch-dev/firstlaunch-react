import axios from "axios";
import { apiUrl } from "helper.js";

const API_URL = apiUrl();

/*
 ** Basic Auth
 */
const fetchService = (data) => {
  return axios.get(API_URL + "/appointment/service/2");
};


const AppoinmentService = {
  fetchService,
};
export default AppoinmentService;
