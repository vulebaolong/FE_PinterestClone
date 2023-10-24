import Button from "../../components/Button/Button";
import IconArowRight from "../../icon/IconArowRight";
import ItemComment from "./ItemComment";
import IconSend from "../../icon/IconSend";
import { navigate } from "../../helpers/navigate";

function DetailPage() {
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <div className="container pt-16">
            <div className="fixed left-5">
                <Button onClick={handleClick} type="circle_secondary">
                    <IconArowRight />
                </Button>
            </div>
            <div className="flex w-[1016px] min-h-[500px] mx-auto rounded-[32px] shadow-[rgba(0,0,0,0.1)_0px_1px_20px_0px] overflow-hidden">
                <div className="flex-shrink-0 w-1/2 basis-1/2">
                    <img className="w-full h-full" src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/200`} alt="" />
                </div>
                <div className="flex-shrink-0 w-1/2 basis-1/2">
                    <div className="text-right p-7">
                        <Button type="primary">Lưu</Button>
                    </div>

                    {/* INFO IMAGE */}
                    <div className="p-7">
                        <h3 className="text-lg font-semibold truncate text-text">Name imageName imageName imageName imageName image</h3>
                        <p className="text-sm font-semibold truncate text-text">Name userName userName userName userName userName user</p>
                    </div>

                    {/* COMMENT */}
                    <div>
                        <div className="px-7 pt-7">
                            <p className="text-xl font-semibold break-words text-text">Nhận xét</p>

                            {/* LIST COMMENT */}
                            <div className="overflow-y-auto max-h-[300px] mt-5">
                                <ItemComment />
                                <ItemComment />
                                <ItemComment />
                                <ItemComment />
                                <ItemComment />
                                <ItemComment />
                                <ItemComment />
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="px-7 pb-7">
                            <p className="text-xl font-semibold break-words text-text">
                                <span>10 </span>
                                <span>Nhận xét</span>
                            </p>
                        </div>
                    </div>

                    {/* ACTION COMMENT */}
                    <div className=" p-7">
                        <div className="flex">
                            <input className="-mr-[50px] w-full pl-5 pr-[60px] py-3 text-lg bg-gray-200 rounded-full outline-none" type="text" placeholder="Thêm nhận xét" />
                            <Button type="circle_primary">
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
