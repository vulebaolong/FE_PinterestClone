import axios from "axios";
import { I_login_req, I_register_req, I_userUpdate } from "../interfaces/userManagementInterface";

export const userApi = {
    login: (data: I_login_req) => {
        return axios.post(`/user/login`, data);
    },
    register: (data: I_register_req) => {
        return axios.post(`/user/register`, data);
    },
    getListImageSaved: () => {
        return axios.get(`/user/images-saved`);
    },
    getListImageCreacted: () => {
        return axios.get(`/user/images-created`);
    },
    updateUser: (data: I_userUpdate) => {
        return axios.put(`/user/update`, data);
    },
};
