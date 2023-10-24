import { Typography } from "antd";

function ItemComment() {
    return (
        <div className="flex items-baseline">
            <span className="text-base font-semibold truncate text-text max-w-[100px] inline-block">Name userName userName userName userName userName user</span>
            <span>: </span>
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem at? Animi, libero explicabo. Accusantium pariatur autem, minima quam quasi illo
                accusamus, labore deserunt numquam eaque ex similique vero unde.
            </Typography.Paragraph>
        </div>
    );
}
export default ItemComment;
