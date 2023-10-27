import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../../helpers/navigate";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserControll from "./UserControll";
import { DispatchType, RootState } from "../../redux/store";
import { setIsOpenModalAuthREDU } from "../../redux/slices/modalSlice";

function Header() {
    const dispatch: DispatchType = useDispatch();

    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const checkLogin = () => {
        if (userLogin) return true;
        if (!userLogin) return false;
    };

    const handleClickCreateImage = () => {
        if (!checkLogin()) {
            dispatch(setIsOpenModalAuthREDU(true));
            return;
        }
        navigate("/create-image");
    };
    return (
        <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-white gap-7 h-header">
            <div className="flex items-center">
                <Logo />
                <Button onClick={handleClickCreateImage} type="secondary">
                    Tạo
                </Button>
            </div>
            <Search />
            <UserControll />
        </header>
    );
}
export default Header;
