import { createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import { imageApi } from "../../api/imageApi";
import { success } from "../../helpers/message";
import { navigate } from "../../helpers/navigate";

const initialState = {
    isPageCreated: false,
};

const imageSlice = createSlice({
    name: "imageSlice",
    initialState,
    reducers: {
        setIsPageCreated: (state, { payload }) => {
            state.isPageCreated = payload;
        },
    },
});

export const { setIsPageCreated } = imageSlice.actions;

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
