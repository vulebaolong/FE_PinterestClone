import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, USER_LOGIN } from "../../contants/userContants";
import { lcStorage } from "../../helpers/localStorage";
import I_initialState from "../../interfaces/initialStateInterface";
import { I_login_req, I_register_req, I_userUpdate } from "../../interfaces/userManagementInterface";
import { DispatchType } from "../store";
import { userApi } from "../../api/userApi";
import { error, success } from "../../helpers/message";
import { setIsOpenModalAuthREDU } from "./modalSlice";
import { decodeJWT } from "../../helpers/jwt";
import { setIsLoadingBtnREDU } from "./loadingSlice";

const initialState: I_initialState["userManagementSlice"] = {
    userLogin: lcStorage.get(USER_LOGIN),
    isPageLogin: true,
    autofill: {
        password: "",
        userName: "",
    },
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
    },
});

export const { setAutofillREDU, loginREDU, updateUserLoginREDU, setIsPageLoginREDU } = userManagementSlice.actions;

export default userManagementSlice.reducer;

// =========================MIDLEWARE============================

//registerMID
export const registerMID = (requestData: I_register_req) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setIsLoadingBtnREDU(true));

            const { data, status } = await userApi.register(requestData);

            console.log("registerMID", { data, status });

            success("Đăng ký thành công");

            dispatch(setAutofillREDU(requestData));

            dispatch(setIsPageLoginREDU(true));
        } catch (err) {
            console.log(err);
            error("Đăng ký không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };
};

//loginMID
export const loginMID = (requestData: I_login_req) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setIsLoadingBtnREDU(true));

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
            error("Đăng nhập không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };
};

//updateUserMid
export const updateUserMid = (requestData: I_userUpdate) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(setIsLoadingBtnREDU(true));

            const { data, status } = await userApi.updateUser(requestData);

            console.log("updateUserMid", { data, status });

            success("Chỉnh sửa thông tin thành công");

            const token = data.data;

            const decodedToken = decodeJWT(token);

            //lưu localStorage
            lcStorage.set(USER_LOGIN, decodedToken);

            lcStorage.set(ACCESS_TOKEN, token);

            dispatch(loginREDU(decodedToken));
        } catch (err) {
            console.log(err);
            error("Chỉnh sửa thông tin không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };
};
