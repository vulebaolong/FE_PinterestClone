import { I_login_req, I_user, I_userInfo, I_userLogin } from "./userManagementInterface";

interface I_userManagement {
    userLogin: I_userLogin;
    isPageLogin: boolean;
    autofill: I_login_req;
    userList: I_user[];
    userInfo: I_userInfo | null;
}

interface I_initialState {
    userManagementSlice: I_userManagement;
}

export default I_initialState;
