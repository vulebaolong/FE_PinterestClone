import { Avatar, Typography } from "antd";
import { I_comment } from "./DetailPage";

function ItemComment({ comment }: { comment: I_comment }) {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="bg-[#e9e9e9] flex-shrink-0" size={30}>
                <span className="text-text">{comment.users.userName.at(0)}</span>
            </Avatar>
            <div className="flex items-baseline">
                <span className="text-base font-semibold truncate text-text max-w-[100px] inline-block">{comment.users.userName}:</span>
                <span>&nbsp;</span>
                <Typography.Paragraph className="!mb-0" ellipsis={{ rows: 2, expandable: true, symbol: "more" }}> {comment.content}</Typography.Paragraph>
            </div>
        </div>
    );
}
export default ItemComment;
