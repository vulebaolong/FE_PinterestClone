import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import Modal from "./components/Modal/Modal";
import { useEffect } from "react";
import { setNavigate } from "./helpers/navigate";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        setNavigate(navigate);
    }, [navigate]);

    return (
        <>
            <Modal />
            <Routes>
                {/* HOME LAYOUT */}
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                </Route>

                {/* OTHER */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
