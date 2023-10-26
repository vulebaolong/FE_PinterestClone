import { useEffect, useState } from "react";
import MasonryLayer from "../../components/Masonry/MasonryLayer";
import { I_img } from "../HomePage/HomePage";
import { userApi } from "../../api/userApi";

function Created() {
    const [imgList, setImgList] = useState<I_img[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await userApi.getListImageCreacted();
            console.log("Created", data);
            setImgList(data.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <MasonryLayer imgList={imgList} />
        </div>
    );
}
export default Created;
