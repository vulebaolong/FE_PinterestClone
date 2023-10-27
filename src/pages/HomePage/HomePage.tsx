import { useEffect } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { setImgListHomePageMID } from "../../redux/slices/imageSlice";
import Loading from "../../components/Loading/Loading";

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
    const { imgListHomePage } = useSelector((state: RootState) => state.imageSlice);

    const { isLoadingPage } = useSelector((state: RootState) => state.loadingSlice);

    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setImgListHomePageMID("page"));
        };
        fetchData();
    }, [userLogin, dispatch]);

    return (
        <div className="container">
            {isLoadingPage && <Loading />}
            <MasonryLayer imgList={imgListHomePage} />
        </div>
    );
}
export default HomePage;
