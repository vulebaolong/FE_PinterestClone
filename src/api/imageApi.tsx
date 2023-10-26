import axios from "axios";

export const imageApi = {
    createImage: (data: FormData) => {
        return axios.post(`/image/create`, data);
    },
    getImgList: () => {
        return axios.get(`/image/list`);
    },
    getImgListSaved: () => {
        return axios.get(`/image/list-saved`);
    },
};
