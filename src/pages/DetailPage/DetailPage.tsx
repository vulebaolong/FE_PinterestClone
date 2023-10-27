import Button from "../../components/Button/Button";
import IconArowRight from "../../icon/IconArowRight";
import ItemComment from "./ItemComment";
import IconSend from "../../icon/IconSend";
import { navigate } from "../../helpers/navigate";
import { MAIN_URL } from "../../contants/apiContants";
import { useEffect, useState } from "react";
import { imageApi } from "./../../api/imageApi";
import { useParams } from "react-router-dom";
import { I_img } from "../HomePage/HomePage";
import { success } from "../../helpers/message";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { setIsOpenModalAuthREDU } from "../../redux/slices/modalSlice";

export interface I_comment {
    commentId: number;
    content: string;
    users_id: number;
    images_id: number;
    users: I_comment_users;
}
export interface I_comment_users {
    userName: string;
}

export interface I_comment_req {
    imageId: number;
    content: string;
}

function DetailPage() {
    const dispatch: DispatchType = useDispatch();

    const [img, setImg] = useState<I_img>();

    const [listComment, setListComment] = useState<I_comment[]>([]);

    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const handleClick = () => {
        navigate(-1);
    };

    const { id } = useParams();

    const fetchOneImage = async () => {
        if (!id) return;

        const { data } = await imageApi.getOneImage(+id);

        setImg(data.data);
    };

    const fetchComment = async () => {
        if (!id) return;

        const { data } = await imageApi.getComment(+id);

        setListComment(data.data);
    };

    useEffect(() => {
        if (!id) return;

        fetchOneImage();
        fetchComment();
    }, [id]);

    const checkLogin = () => {
        if (userLogin) return true;
        if (!userLogin) return false;
    };

    const handleClickSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        if (!checkLogin()) {
            dispatch(setIsOpenModalAuthREDU(true));
            return;
        }

        console.log(`lưu ${img?.imageId}`);

        if (!img?.imageId) return;

        await imageApi.saveAndUnSaveImage(img?.imageId);

        success("Lưu hình ảnh thành công");

        fetchOneImage();
    };

    const handleClickUnSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        console.log(`bỏ lưu ${img?.imageId}`);

        if (!img?.imageId) return;

        await imageApi.saveAndUnSaveImage(img?.imageId);

        success("Bỏ lưu hình ảnh thành công");

        fetchOneImage();
    };

    const handleComment = async () => {
        if (!checkLogin()) {
            dispatch(setIsOpenModalAuthREDU(true));
            return;
        }
        
        const commentEl = document.querySelector(".comment") as HTMLInputElement;

        if (!commentEl) return;

        if (!id) return;

        if (commentEl.value.trim() === "") return;

        const dataReq = {
            imageId: +id,
            content: commentEl.value,
        };

        await imageApi.createComment(dataReq);

        success("Nhận sét thành công");

        fetchComment();

        commentEl.value = "";
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") handleComment();
    };
    return (
        <div className="container pt-16">
            <div className="fixed left-5">
                <Button onClick={handleClick} type="circle_secondary">
                    <IconArowRight />
                </Button>
            </div>
            <div className="flex w-[1016px] min-h-[500px] mx-auto rounded-[32px] shadow-[rgba(0,0,0,0.1)_0px_1px_20px_0px] overflow-hidden">
                <div className="flex-shrink-0 w-1/2 basis-1/2">{img?.imageUrl && <img className="w-full h-full" src={`${MAIN_URL}/public/img/${img?.imageUrl}`} alt="" />}</div>
                <div className="flex flex-col flex-shrink-0 w-1/2 basis-1/2">
                    <div className="text-right p-7">
                        {img?.saved === 0 ? (
                            <Button onClick={handleClickSave} type="primary">
                                Lưu
                            </Button>
                        ) : (
                            <Button onClick={handleClickUnSave} type="secondary">
                                Bỏ lưu
                            </Button>
                        )}
                    </div>

                    {/* INFO IMAGE */}
                    <div className="p-7">
                        <h3 className="text-lg font-semibold truncate text-text">{img?.imageName}</h3>
                        <p className="text-sm font-semibold truncate text-text">{img?.users.userName}</p>
                    </div>

                    {/* COMMENT */}
                    <div>
                        <div className="px-7 pt-7">
                            <p className="text-xl font-semibold break-words text-text">Nhận xét</p>

                            {/* LIST COMMENT */}
                            <div className="overflow-y-auto max-h-[300px] mt-5 space-y-5">
                                {listComment.map((comment) => {
                                    return <ItemComment comment={comment} key={comment.commentId} />;
                                })}
                                {listComment.length === 0 ? <p className="text-center">Hãy là người comment đầu tiên</p> : ""}
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="px-7 pb-7">
                            <p className="text-xl font-semibold break-words text-text">
                                <span>{listComment.length} </span>
                                <span>Nhận xét</span>
                            </p>
                        </div>
                    </div>

                    {/* ACTION COMMENT */}
                    <div className=" p-7">
                        <div className="flex">
                            <input
                                className="comment -mr-[50px] w-full pl-5 pr-[60px] py-3 text-lg bg-gray-200 rounded-full outline-none"
                                type="text"
                                placeholder="Thêm nhận xét"
                                onKeyDown={handleKeyPress}
                            />
                            <Button onClick={handleComment} type="circle_primary">
                                <IconSend />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailPage;
