import style from "./MasonryItem.module.css";
import Button from "./../../components/Button/Button";
import { navigate } from "../../helpers/navigate";
import { MouseEvent } from "react";
import { I_img } from "../../pages/HomePage/HomePage";
import { imageApi } from "../../api/imageApi";
import { error, success } from "../../helpers/message";
import { DispatchType, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setImgListCreatedPageMID, setImgListHomePageMID, setImgListSavedPageMID } from "../../redux/slices/imageSlice";
import { MAIN_URL } from "../../contants/apiContants";
import { LoadingOutlined } from "@ant-design/icons";
import { setIsLoadingBtnREDU } from "../../redux/slices/loadingSlice";
import { useLocation } from "react-router-dom";
import { setIsOpenModalAuthREDU } from "../../redux/slices/modalSlice";

interface I_props {
    image: I_img;
}
function MasonryItem({ image }: I_props) {
    const dispatch: DispatchType = useDispatch();

    const { pathname } = useLocation();

    const { isLoadingBtn } = useSelector((state: RootState) => state.loadingSlice);

    const { isPageCreated } = useSelector((state: RootState) => state.imageSlice);

    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const handleClick = () => {
        navigate(`detail/${image.imageId}`);
    };

    const checkLogin = () => {
        if (userLogin) return true;
        if (!userLogin) return false;
    };

    const handleClickSave = async (e: MouseEvent) => {
        try {
            e.stopPropagation();

            if (!checkLogin()) {
                dispatch(setIsOpenModalAuthREDU(true));
                return;
            }

            console.log(`lưu ${image.imageId}`);

            dispatch(setIsLoadingBtnREDU(true));

            await imageApi.saveAndUnSaveImage(image.imageId);

            success("Lưu hình ảnh thành công");

            if (pathname === "/profile" && isPageCreated === false) return dispatch(setImgListSavedPageMID("update"));

            if (pathname === "/profile" && isPageCreated === true) return dispatch(setImgListCreatedPageMID("update"));

            if (pathname === "/") return dispatch(setImgListHomePageMID("update"));
        } catch (err) {
            error("Lưu hình ảnh không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };

    const handleClickUnSave = async (e: MouseEvent) => {
        try {
            e.stopPropagation();

            console.log(`bỏ lưu ${image.imageId}`);

            dispatch(setIsLoadingBtnREDU(true));

            await imageApi.saveAndUnSaveImage(image.imageId);

            success("Bỏ lưu hình ảnh thành công");

            if (pathname === "/profile" && isPageCreated === false) return dispatch(setImgListSavedPageMID("update"));

            if (pathname === "/profile" && isPageCreated === true) return dispatch(setImgListCreatedPageMID("update"));

            if (pathname === "/") return dispatch(setImgListHomePageMID("update"));
        } catch (err) {
            error("Bỏ lưu hình ảnh không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };

    const handleClickDelete = async (e: MouseEvent) => {
        try {
            e.stopPropagation();

            dispatch(setIsLoadingBtnREDU(true));

            if (pathname === "/profile" && isPageCreated === true) await imageApi.deleteImage(image.imageId);

            success("Xoá hình ảnh thành công");

            if (pathname === "/profile" && isPageCreated === true) return dispatch(setImgListCreatedPageMID("update"));
        } catch (err) {
            error("Xoá hình ảnh không thành công");
        } finally {
            dispatch(setIsLoadingBtnREDU(false));
        }
    };

    return (
        <div onClick={handleClick} className={`w-[252px] p-4 ${style.card} cursor-zoom-in box-border mx-auto`}>
            <div className="relative w-full overflow-hidden rounded-2xl">
                {/* <img className="object-cover w-full" src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/${Math.floor(Math.random() * 280) + 200}`} alt="" /> */}
                <img className="object-cover w-full" src={`${MAIN_URL}/public/img/${image.imageUrl}`} alt="" />
                <div className={`absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 ${style.overLay} transition`}>
                    <div className="flex justify-end gap-2 p-3">
                        {image.saved === 0 ? (
                            <Button onClick={handleClickSave} className="" type="primary">
                                {isLoadingBtn && <LoadingOutlined />}
                                <span>Lưu</span>
                            </Button>
                        ) : (
                            <Button disabled={isLoadingBtn} onClick={handleClickUnSave} className="" type="secondary">
                                {isLoadingBtn && <LoadingOutlined />}
                                <span>Bỏ lưu</span>
                            </Button>
                        )}
                        {isPageCreated && (
                            <Button disabled={isLoadingBtn} onClick={handleClickDelete} className="" type="secondary">
                                {isLoadingBtn && <LoadingOutlined />}
                                <span>Xoá</span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-4 px-[6px]">
                <h3 className="text-sm font-semibold truncate text-text">{image.imageName}</h3>
                <p className="text-sm font-normal truncate text-text">{image.users.userName}</p>
            </div>
        </div>
    );
}
export default MasonryItem;
