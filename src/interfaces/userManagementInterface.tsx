export interface I_login_req {
    userName: string;
    password: string;
}

export interface I_register_req {
    fullName: string;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
}

export interface I_register_res {
    fullName: string;
    userName: string;
    email: string;
    phoneNumber: string;
}

export interface I_userLogin {
    userId: number;
    userName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    iat: number;
    exp: number;
}

export interface I_PropLogged {
    userLogin: I_userLogin;
}

export interface I_accountInfo {
    id: string;
    username: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    userType: string;
    avatar: string;
    bannerProfile: string;
}

export interface I_user {
    _id: string;
    username: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    userType: string;
    avatar: string;
    bannerProfile: string;
    avatarName?: string;
}

export interface I_userInfo {
    _id: string;
    username: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    userType: string;
    avatar: string;
    bannerProfile: string;
}

export interface I_userUpdate {
    userName?: string;
    email?: string;
    phoneNumber?: string;
    fullName?: string;
}
