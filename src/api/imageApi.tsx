import axios from "axios";
import { I_comment_req } from "../pages/DetailPage/DetailPage";

export const imageApi = {
    createImage: (data: FormData) => {
        return axios.post(`/image/create`, data);
    },
    getImgList: () => {
        return axios.get(`/image/list`);
    },
    saveAndUnSaveImage: (imageId: number) => {
        return axios.get(`/image/save-and-unsave/${imageId}`);
    },
    getOneImage: (imageId: number) => {
        return axios.get(`/image/image-info/${imageId}`);
    },
    getComment: (imageId: number) => {
        return axios.get(`/image/comment/${imageId}`);
    },
    createComment: (dataComment: I_comment_req) => {
        return axios.post(`/image/comment`, dataComment);
    },
    deleteImage: (imageId: number) => {
        return axios.delete(`/image/delete/${imageId}`);
    },
    searchImage: (nameImage: string) => {
        return axios.get(`/image/search?searchText=${nameImage}`);
    },
    searchImageInSavedPage: (nameImage: string) => {
        return axios.get(`/image/search-saved?searchText=${nameImage}`);
    },
};
