import style from "./Card.module.css";
import Button from "./../../components/Button/Button";
import { navigate } from "../../helpers/navigate";
import { MouseEvent } from "react";

function Card({ index }: { index: number }) {
    const handleClick = () => {
        console.log(index);
        navigate(`detail/${index}`);
    };

    const handleClickSave = (e: MouseEvent) => {
        e.stopPropagation();
        console.log("lưu");
    };

    return (
        <div onClick={handleClick} className={`w-[252px] p-4 ${style.card} cursor-zoom-in box-border mx-auto`}>
            <div className="relative w-full overflow-hidden rounded-2xl">
                <img className="object-cover w-full" src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/${Math.floor(Math.random() * 280) + 200}`} alt="" />
                <div className={`absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 ${style.overLay} transition`}>
                    <Button onClick={handleClickSave} className="absolute top-3 right-3" type="primary">
                        Lưu
                    </Button>
                </div>
            </div>
            <div className="pt-2 pb-4 px-[6px]">
                <h3 className="text-sm font-semibold truncate text-text">Name imageName imageName imageName imageName image</h3>
                <p className="text-sm font-normal truncate text-text">Name userName userName userName userName userName user</p>
            </div>
        </div>
    );
}
export default Card;
