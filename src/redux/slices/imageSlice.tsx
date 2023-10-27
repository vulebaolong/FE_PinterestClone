import { createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import { imageApi } from "../../api/imageApi";
import { error, success } from "../../helpers/message";
import { navigate } from "../../helpers/navigate";
import { setIsLoadingBtnREDU, setIsLoadingPageREDU } from "./loadingSlice";
import { userApi } from "../../api/userApi";

const initialState = {
    isPageCreated: false,
    imgListHomePage: [],
    imgListSavedPage: [],
    imgListCreatedPage: [],
};

const imageSlice = createSlice({
    name: "imageSlice",
    initialState,
    reducers: {
        setIsPageCreated: (state, { payload }) => {
            state.isPageCreated = payload;
        },
        setImgListHomePage: (state, { payload }) => {
            state.imgListHomePage = payload;
        },
        setImgListSavedPage: (state, { payload }) => {
            state.imgListSavedPage = payload;
        },
        setImgListCreatedPage: (state, { payload }) => {
            state.imgListCreatedPage = payload;
        },
    },
});

export const { setImgListCreatedPage, setImgListSavedPage, setIsPageCreated, setImgListHomePage } = imageSlice.actions;

export default imageSlice.reducer;

//createImageMID
export const createImageMID = (requestData: FormData) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setIsLoadingBtnREDU(true));

            const { data, status } = await imageApi.createImage(requestData);

            console.log("createImageMID", { data, status });

            success("Thêm hình ảnh thành công");

            navigate("/profile");

            dispatch(setIsPageCreated(true));
        } catch (err) {
            console.log(err);
            error("Thêm hình ảnh không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };
};


//setImgListHomePageMID
export const setImgListHomePageMID = (flag: string) => {
    return async (dispatch: DispatchType) => {
        try {
            if (flag === "page") dispatch(setIsLoadingPageREDU(true));

            const { data, status } = await imageApi.getImgList();

            console.log("setImgListHomePageMID", { data, status });

            dispatch(setImgListHomePage(data.data));
        } catch (err) {
            console.log(err);
        } finally {
            if (flag === "page") dispatch(setIsLoadingPageREDU(false));
        }
    };
};

//setImgListSavedPageMID
export const setImgListSavedPageMID = (flag: string) => {
    return async (dispatch: DispatchType) => {
        try {
            if (flag === "page") dispatch(setIsLoadingPageREDU(true));

            const { data, status } = await userApi.getListImageSaved();

            console.log("setImgListSavedPageMID", { data, status });

            dispatch(setImgListSavedPage(data.data));
        } catch (err) {
            console.log(err);
        } finally {
            if (flag === "page") dispatch(setIsLoadingPageREDU(false));
        }
    };
};

//setImgListCreatedPageMID
export const setImgListCreatedPageMID = (flag: string) => {
    return async (dispatch: DispatchType) => {
        try {
            if (flag === "page") dispatch(setIsLoadingPageREDU(true));

            const { data, status } = await userApi.getListImageCreacted();

            console.log("setImgListCreatedPageMID", { data, status });

            dispatch(setImgListCreatedPage(data.data));
        } catch (err) {
            console.log(err);
        } finally {
            if (flag === "page") dispatch(setIsLoadingPageREDU(false));
        }
    };
};
