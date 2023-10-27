import { useEffect, useState } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import { I_img } from "../HomePage/HomePage";
import { userApi } from "../../api/userApi";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { setImgListCreatedPageMID } from "../../redux/slices/imageSlice";

function Created() {
    const { imgListCreatedPage } = useSelector((state: RootState) => state.imageSlice);

    const { isLoadingPage } = useSelector((state: RootState) => state.loadingSlice);

    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        dispatch(setImgListCreatedPageMID("page"));
    }, [dispatch]);

    return (
        <div className="container">
            {isLoadingPage && <Loading />}
            <MasonryLayer imgList={imgListCreatedPage} />
        </div>
    );
}
export default Created;
