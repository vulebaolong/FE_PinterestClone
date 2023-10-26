import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, USER_LOGIN } from "../../contants/userContants";
import { lcStorage } from "../../helpers/localStorage";
import I_initialState from "../../interfaces/initialStateInterface";
import { I_login_req, I_register_req } from "../../interfaces/userManagementInterface";
import { DispatchType } from "../store";
import { userApi } from "../../api/userApi";
import { success } from "../../helpers/message";
import { setIsOpenModalAuthREDU } from "./modalSlice";
import { decodeJWT } from "../../helpers/jwt";

const initialState: I_initialState["userManagementSlice"] = {
    userLogin: lcStorage.get(USER_LOGIN),
    isPageLogin: true,
    autofill: {
        password: "",
        userName: "",
    },
    userList: [],
    userInfo: null,
};

const userManagementSlice = createSlice({
    name: "userManagementSlice",
    initialState,
    reducers: {
        loginREDU: (state, { payload }) => {
            state.userLogin = payload;
        },
        updateUserLoginREDU: (state, { payload }) => {
            // delete payload.enrolledCourseDetail;
            lcStorage.set(USER_LOGIN, payload);
            state.userLogin = payload;
        },
        setIsPageLoginREDU: (state, { payload }) => {
            state.isPageLogin = payload;
        },
        setAutofillREDU: (state, { payload }) => {
            state.autofill = payload;
        },
        setUserListREDU: (state, { payload }) => {
            state.userList = payload;
        },
        setUserInfoREDU: (state, { payload }) => {
            state.userInfo = payload;
        },
    },
});

export const { setUserInfoREDU, setUserListREDU, setAutofillREDU, loginREDU, updateUserLoginREDU, setIsPageLoginREDU } = userManagementSlice.actions;

export default userManagementSlice.reducer;

// =========================MIDLEWARE============================

//registerMID
export const registerMID = (requestData: I_register_req) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await userApi.register(requestData);

            console.log("registerMID", { data, status });

            success("Đăng ký thành công");

            dispatch(setAutofillREDU(requestData));

            dispatch(setIsPageLoginREDU(true));
        } catch (err) {
            console.log(err);
        }
    };
};

//loginMID
export const loginMID = (requestData: I_login_req) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await userApi.login(requestData);

            console.log("loginMID", { data, status });

            success("Đăng nhập thành công");

            const token = data.data;

            const decodedToken = decodeJWT(token);

            //lưu localStorage
            lcStorage.set(USER_LOGIN, decodedToken);

            lcStorage.set(ACCESS_TOKEN, token);

            dispatch(loginREDU(decodedToken));

            dispatch(setIsOpenModalAuthREDU(false));
        } catch (err) {
            console.log(err);
        }
    };
};
