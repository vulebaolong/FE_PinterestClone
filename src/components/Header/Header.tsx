import { navigate } from "../../helpers/navigate";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserControll from "./UserControll";

function Header() {
    const handleClickCreateImage = () => {
        navigate("/create-image");
    };
    return (
        <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-white h-header">
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
