import Masonry from "react-masonry-css";
import Card from "./Card";

const breakpointColumnsObj = {
    default: 6, // Số cột mặc định
    640: 1,
    768: 2,
    1024: 3,
    1280: 4,
    1536: 5,
};
interface I_props {
    items: object[];
}
function MasonryLayout({ items }: I_props) {
    return (
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {items.map((item, index) => (
                <Card index={index} key={index} />
            ))}
        </Masonry>
    );
}

export default MasonryLayout;
