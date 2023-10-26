import { ACCESS_TOKEN, USER_LOGIN } from "../../contants/userContants";
import { lcStorage } from "../../helpers/localStorage";
import { navigate } from "../../helpers/navigate";
import { I_userLogin } from "../../interfaces/userManagementInterface";
import Button from "../Button/Button";

function Logged({ userLogin }: { userLogin: I_userLogin }) {
    console.log(userLogin);
    const handleClickLogout = () => {
        lcStorage.remove(USER_LOGIN);
        lcStorage.remove(ACCESS_TOKEN);
        window.location.href = "/";
    };

    const handleProfile = () => {
        navigate("/profile");
    };
    return (
        <div className="flex items-center gap-2">
            <div className="max-w-[200px] cursor-pointer" onClick={handleProfile}>
                <p className="text-base font-bold truncate text-text ">{userLogin.fullName}</p>
                <p className="text-sm font-normal truncate text-text">{userLogin.email}</p>
            </div>
            <Button onClick={handleClickLogout} type="secondary">
                Thoát
            </Button>
        </div>
    );
}
export default Logged;
