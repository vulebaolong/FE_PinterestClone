import style from "./MasonryItem.module.css";
import Button from "./../../components/Button/Button";
import { navigate } from "../../helpers/navigate";
import { MouseEvent } from "react";
import { I_img } from "../../pages/HomePage/HomePage";
import { imageApi } from "../../api/imageApi";
import { success } from "../../helpers/message";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setImgListSavedHomePageMID } from "../../redux/slices/imageSlice";
import { MAIN_URL } from "../../contants/apiContants";

interface I_props {
    image: I_img;
}
function MasonryItem({ image }: I_props) {
    const dispatch: DispatchType = useDispatch();

    const handleClick = () => {
        navigate(`detail/${image.imageId}`);
    };

    const handleClickSave = async (e: MouseEvent) => {
        e.stopPropagation();
        console.log(`lưu ${image.imageId}`);
        await imageApi.saveAndUnSaveImage(image.imageId);
        success("Lưu hình ảnh thành công");
        dispatch(setImgListSavedHomePageMID());
    };
    const handleClickUnSave = async (e: MouseEvent) => {
        e.stopPropagation();
        console.log(`bỏ lưu ${image.imageId}`);
        await imageApi.saveAndUnSaveImage(image.imageId);
        success("Bỏ lưu hình ảnh thành công");
        dispatch(setImgListSavedHomePageMID());
    };

    return (
        <div onClick={handleClick} className={`w-[252px] p-4 ${style.card} cursor-zoom-in box-border mx-auto`}>
            <div className="relative w-full overflow-hidden rounded-2xl">
                {/* <img className="object-cover w-full" src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/${Math.floor(Math.random() * 280) + 200}`} alt="" /> */}
                <img className="object-cover w-full" src={`${MAIN_URL}/public/img/${image.imageUrl}`} alt="" />
                <div className={`absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 ${style.overLay} transition`}>
                    {image.saved === 0 ? (
                        <Button onClick={handleClickSave} className="absolute top-3 right-3" type="primary">
                            Lưu
                        </Button>
                    ) : (
                        <Button onClick={handleClickUnSave} className="absolute top-3 right-3" type="secondary">
                            Bỏ lưu
                        </Button>
                    )}
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
