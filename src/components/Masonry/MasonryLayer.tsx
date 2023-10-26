import Masonry from "react-masonry-css";
import MasonryItem from "./MasonryItem";
import { I_img } from "../../pages/HomePage/HomePage";

const breakpointColumnsObj = {
    default: 6, // Số cột mặc định
    640: 1,
    768: 2,
    1024: 3,
    1280: 4,
    1536: 5,
};
interface I_props {
    imgList: I_img[];
}
function MasonryLayer({ imgList }: I_props) {
    return (
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {imgList.map((image) => (
                <MasonryItem image={image} key={image.imageId} />
            ))}
        </Masonry>
    );
}

export default MasonryLayer;
