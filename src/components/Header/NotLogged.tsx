import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/store";
import { setIsOpenModalAuthREDU } from "../../redux/slices/modalSlice";
import Button from "../Button/Button";
import { setIsPageLoginREDU } from "../../redux/slices/userManagementSlice";

function NotLogged() {
    const dispatch: DispatchType = useDispatch();

    const handleClickLogin = () => {
        dispatch(setIsOpenModalAuthREDU(true));
        dispatch(setIsPageLoginREDU(true));
    };
    const handleClickRegister = () => {
        dispatch(setIsOpenModalAuthREDU(true));
        dispatch(setIsPageLoginREDU(false));
    };
    return (
        <div className="flex flex-row items-center gap-2">
            <Button onClick={handleClickLogin} type="primary">
                Đăng nhập
            </Button>
            <Button onClick={handleClickRegister} type="secondary">
                Đăng ký
            </Button>
        </div>
    );
}
export default NotLogged;
