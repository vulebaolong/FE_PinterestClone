import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserControll from "./UserControll";

function Header() {
    return (
        <header className="fixed z-40 flex items-center justify-between w-full p-4 bg-white h-header">
            <Logo />
            <Search />
            <UserControll />
        </header>
    );
}
export default Header;
