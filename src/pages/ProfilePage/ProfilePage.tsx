import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import Created from "./Created";
import Saved from "./Saved";
import { Avatar } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Button from "../../components/Button/Button";
import { setIsPageCreated } from "../../redux/slices/imageSlice";

function ProfilePage() {
    const { isPageCreated } = useSelector((state: RootState) => state.imageSlice);
    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const dispatch: DispatchType = useDispatch();
    const handleCreated = () => {
        dispatch(setIsPageCreated(true));
    };
    const handleSaved = () => {
        dispatch(setIsPageCreated(false));
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <Avatar className="bg-[#e9e9e9]" size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 120, xxl: 130 }}>
                    <span className="text-text">{userLogin.fullName.at(0)}</span>
                </Avatar>
                <h1 className="text-4xl font-semibold">{userLogin.fullName}</h1>
                <p className="text-sm font-normal text-[#5f5f5f]">@{userLogin.userName}</p>
                <p className="text-base font-normal text-text">
                    <MailOutlined /> {userLogin.email}
                </p>
                <p className="text-base font-normal text-text">
                    <PhoneOutlined /> {userLogin.phoneNumber}
                </p>
            </div>
            <div className="flex items-center justify-center gap-2 py-3 mt-7">
                <Button className={isPageCreated ? "!bg-gray-400" : ""} onClick={handleCreated} type="secondary">
                    Đã tạo
                </Button>
                <Button className={isPageCreated ? "" : "!bg-gray-400"} onClick={handleSaved} type="secondary">
                    Đã lưu
                </Button>
            </div>
            {isPageCreated ? <Created /> : <Saved />}
        </>
    );
}
export default ProfilePage;
