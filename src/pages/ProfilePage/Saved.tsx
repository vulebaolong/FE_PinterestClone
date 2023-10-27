import { useEffect } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { setImgListSavedPageMID } from "../../redux/slices/imageSlice";

function Saved() {
    const { imgListSavedPage } = useSelector((state: RootState) => state.imageSlice);

    const { isLoadingPage } = useSelector((state: RootState) => state.loadingSlice);

    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        dispatch(setImgListSavedPageMID("page"));
    }, [dispatch]);

    return (
        <div className="container">
            {isLoadingPage && <Loading />}
            <MasonryLayer imgList={imgListSavedPage} />
        </div>
    );
}
export default Saved;
