import axios from "axios";
import { lcStorage } from "../helpers/localStorage.jsx";
import { ACCESS_TOKEN } from "../contants/userContants.js";
import { BASE_URL } from "../contants/apiContants.js";


axios.defaults.baseURL = BASE_URL;

// Add a request interceptor 
axios.interceptors.request.use(
	function (config) {
		config.url = `${axios.defaults.baseURL}${config.url}`;

		config.headers.Authorization = `Bearer ${lcStorage.get(ACCESS_TOKEN)}`;
		
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		console.log(error);
		return Promise.reject(error);
	},
);

