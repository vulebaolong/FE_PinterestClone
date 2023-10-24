import { createSlice } from "@reduxjs/toolkit";

interface I_initialState {
    isOpenModalAuth: boolean;
}

const initialState: I_initialState = {
    isOpenModalAuth: false,
};

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setIsOpenModalAuthREDU: (state, { payload }) => {
            state.isOpenModalAuth = payload;
        },
    },
});

export const { setIsOpenModalAuthREDU } = modalSlice.actions;

export default modalSlice.reducer;
