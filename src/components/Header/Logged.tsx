import { Avatar } from "antd";
import { ACCESS_TOKEN, USER_LOGIN } from "../../contants/userContants";
import { lcStorage } from "../../helpers/localStorage";
import { navigate } from "../../helpers/navigate";
import { I_userLogin } from "../../interfaces/userManagementInterface";
import Button from "../Button/Button";

function Logged({ userLogin }: { userLogin: I_userLogin }) {
    const handleClickLogout = () => {
        lcStorage.remove(USER_LOGIN);
        lcStorage.remove(ACCESS_TOKEN);
        window.location.href = "/";
    };

    const handleProfile = () => {
        navigate("/profile");
    };
    return (
        <>
            <div className="items-center hidden gap-2 lg:flex">
                <div className="max-w-[200px] cursor-pointer" onClick={handleProfile}>
                    <div className="flex items-center gap-2">
                        <Avatar className="bg-[#e9e9e9] flex-shrink-0 flex items-center justify-between" size={30}>
                            <span className="text-text">{userLogin.userName.at(0)}</span>
                        </Avatar>
                        <p className="text-base font-bold truncate text-text ">{userLogin.fullName}</p>
                    </div>
                    <p className="ml-2 text-sm font-normal truncate text-text">{userLogin.email}</p>
                </div>
                <Button onClick={handleClickLogout} type="secondary">
                    Thoát
                </Button>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
                <Avatar className="bg-[#e9e9e9] flex-shrink-0 flex items-center justify-between" size={30}>
                    <span className="text-text">{userLogin.userName.at(0)}</span>
                </Avatar>
                <Button onClick={handleClickLogout} type="secondary">
                    Thoát
                </Button>
            </div>
        </>
    );
}
export default Logged;
