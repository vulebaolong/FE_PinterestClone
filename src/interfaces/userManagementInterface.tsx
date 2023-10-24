export interface I_login {
    username: string;
    password: string;
}

export interface I_register {
    fullName: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
}

export interface I_userLogin {
    id: string;
    username: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    accessToken: string;
    userType: string;
    avatar: string;
    bannerProfile: string;
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
