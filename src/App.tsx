import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import Modal from "./components/Modal/Modal";
import { useEffect } from "react";
import { setNavigate } from "./helpers/navigate";
import DetailPage from "./pages/DetailPage/DetailPage";
import { message } from "antd";
import { setMessageApi } from "./helpers/message";
import CreateImagePage from "./pages/CreateImagePage/CreateImagePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UpdateUserPage from "./pages/UpdateUserPage/UpdateUserPage";

function App() {
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setMessageApi(messageApi);
    }, [messageApi]);

    useEffect(() => {
        setNavigate(navigate);
    }, [navigate]);

    return (
        <>
            {contextHolder}
            <Modal />
            <Routes>
                {/* HOME LAYOUT */}
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                    <Route path="create-image" element={<CreateImagePage />} />
                    <Route path="profile" element={<ProfilePage />}></Route>
                    <Route path="update-user" element={<UpdateUserPage />}></Route>
                </Route>

                {/* OTHER */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
