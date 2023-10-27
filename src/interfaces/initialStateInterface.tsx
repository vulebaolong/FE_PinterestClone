import { I_login_req, I_userLogin } from "./userManagementInterface";

interface I_userManagement {
    userLogin: I_userLogin;
    isPageLogin: boolean;
    autofill: I_login_req;
}

interface I_initialState {
    userManagementSlice: I_userManagement;
}

export default I_initialState;
