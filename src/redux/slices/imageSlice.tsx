import { createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import { imageApi } from "../../api/imageApi";
import { success } from "../../helpers/message";
import { navigate } from "../../helpers/navigate";

const initialState = {
    isPageCreated: false,
    imgListHomePage: [],
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
    },
});

export const { setIsPageCreated, setImgListHomePage } = imageSlice.actions;

export default imageSlice.reducer;

//createImageMID
export const createImageMID = (requestData: FormData) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await imageApi.createImage(requestData);

            console.log("createImageMID", { data, status });

            success("Thêm hình ảnh thành công");

            navigate("/profile");

            dispatch(setIsPageCreated(true));
        } catch (error) {
            console.log(error);
        }
    };
};

//setImgListSavedHomePageMID
export const setImgListSavedHomePageMID = () => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await imageApi.getImgListSaved();

            console.log("setImgListSavedHomePageMID", { data, status });

            dispatch(setImgListHomePage(data.data));
        } catch (error) {
            console.log(error);
        }
    };
};

//setImgListHomePageMID
export const setImgListHomePageMID = () => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await imageApi.getImgList();

            console.log("setImgListHomePageMID", { data, status });

            dispatch(setImgListHomePage(data.data));
        } catch (error) {
            console.log(error);
        }
    };
};
