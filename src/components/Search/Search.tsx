import { Input } from "antd";
import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { imageApi } from "../../api/imageApi";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {
    setImgListCreatedPage,
    setImgListCreatedPageMID,
    setImgListHomePage,
    setImgListHomePageMID,
    setImgListSavedHomePageMID,
    setImgListSavedPage,
    setImgListSavedPageMID,
} from "../../redux/slices/imageSlice";
// import { courseApi } from "../../api/courseApi";
// import { I_resultSearch } from "../../interfaces/courseManagementInterface";
// import { navigate } from "../../helpers/navigate";
// import { DEBOUNCE_TIMEOUT } from "../../contants/courseManagementContants";

function Search() {
    const dispatch: DispatchType = useDispatch();

    const { pathname } = useLocation();

    const { isPageCreated } = useSelector((state: RootState) => state.imageSlice);

    const [isLoading, setIsLoading] = useState(false);

    const [inputValue, setInputValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(async () => {
            console.log(inputValue);

            if (isLoading) return;

            if (inputValue.trim() === "") {
                if (pathname === "/profile" && isPageCreated === false) return dispatch(setImgListSavedPageMID("page"));

                if (pathname === "/profile" && isPageCreated === true) return dispatch(setImgListCreatedPageMID("page"));

                if (pathname === "/") return dispatch(setImgListHomePageMID("page"));
            }

            setIsLoading(true);

            try {
                const imageName = encodeURIComponent(inputValue);

                if (pathname === "/") {
                    const { data } = await imageApi.searchImage(imageName);
                    console.log("Home Page", data);
                    dispatch(setImgListHomePage(data.data));
                    return;
                }

                if (pathname === "/profile" && isPageCreated === false) {
                    const { data } = await imageApi.searchImageInSavedPage(imageName);
                    console.log("Saved Page", data);
                    dispatch(setImgListSavedPage(data.data));
                    return;
                }

                if (pathname === "/profile" && isPageCreated === true) {
                    const { data } = await imageApi.searchImage(imageName);
                    console.log("Created Page", data);
                    dispatch(setImgListCreatedPage(data.data));
                    return;
                }
            } finally {
                setIsLoading(false);
            }
        }, 400);

        return () => {
            clearTimeout(timerId);
        };
    }, [inputValue]);

    const prefix = () => {
        if (isLoading) return <LoadingOutlined className="mr-2 font-bold" />;
        if (!isLoading) return <SearchOutlined className="mr-2 font-bold" />;
    };

    return (
        <div className="rounded-full  px-1 flex-1 bg-[#e9e9e9]">
            <Input className="" value={inputValue} onChange={onChange} bordered={false} size="large" placeholder="Tìm kiếm" prefix={prefix()} />
        </div>
    );
}
export default Search;
