import { I_login, I_user, I_userInfo, I_userLogin } from "./userManagementInterface";

interface I_userManagement {
    userLogin: I_userLogin;
    isPageLogin: boolean;
    autofill: I_login | null;
    userList: I_user[];
    userInfo: I_userInfo | null;
}

interface I_initialState {
    userManagementSlice: I_userManagement;
}

export default I_initialState;
