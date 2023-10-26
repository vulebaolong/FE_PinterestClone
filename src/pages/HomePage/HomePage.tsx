import { useEffect, useState } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import { imageApi } from "../../api/imageApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export interface I_img {
    imageId: number;
    imageName: string;
    imageUrl: string;
    users_id: number;
    users: I_img_users;
    saved: number;
}

export interface I_img_users {
    userName: string;
}

function HomePage() {
    const [imgList, setImgList] = useState<I_img[]>([]);
    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    useEffect(() => {
        const fetchData = async () => {
            if (userLogin) {
                const { data } = await imageApi.getImgListSaved();
                console.log(data);
                setImgList(data.data);
            }
            if (!userLogin) {
                const { data } = await imageApi.getImgList();
                console.log(data);
                setImgList(data.data);
            }
        };
        fetchData();
    }, [userLogin]);

    return (
        <div className="container">
            <p className="text-base font-semibold text-center text-text">Dành cho bạn</p>
            <MasonryLayer imgList={imgList} />
        </div>
    );
}
export default HomePage;
