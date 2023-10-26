import { useEffect } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { setImgListHomePageMID, setImgListSavedHomePageMID } from "../../redux/slices/imageSlice";

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
    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);
    const { imgListHomePage } = useSelector((state: RootState) => state.imageSlice);

    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (userLogin) {
                dispatch(setImgListSavedHomePageMID());
            }
            if (!userLogin) {
                dispatch(setImgListHomePageMID());
            }
        };
        fetchData();
    }, [userLogin]);

    return (
        <div className="container pt-5">
            <p className="text-base font-semibold text-center text-text">Dành cho bạn</p>
            <MasonryLayer imgList={imgListHomePage} />
        </div>
    );
}
export default HomePage;
