import { Form, Input, Modal, Upload, UploadFile } from "antd";
import Button from "../../components/Button/Button";
import { navigate } from "../../helpers/navigate";
import IconArowRight from "../../icon/IconArowRight";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { RcFile, UploadProps } from "antd/es/upload";
import { getBase64 } from "../../helpers/antdHelper";
import { I_createImage_req } from "../../interfaces/imageInterface";
import { DispatchType, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { createImageMID } from "../../redux/slices/imageSlice";
import { setIsOpenModalAuthREDU } from "../../redux/slices/modalSlice";

function CreateImagePage() {
    const dispatch: DispatchType = useDispatch();

    const { isLoadingBtn } = useSelector((state: RootState) => state.loadingSlice);

    const { userLogin } = useSelector((state: RootState) => state.userManagementSlice);

    const handleClick = () => {
        navigate(-1);
    };

    const checkLogin = () => {
        if (userLogin) return true;
        if (!userLogin) return false;
    };

    const [form] = Form.useForm();

    const onFinishFailed = () => {
        if (!checkLogin()) {
            dispatch(setIsOpenModalAuthREDU(true));
            return;
        }
    };

    const onFinish = async (values: I_createImage_req) => {
        if (!checkLogin()) {
            dispatch(setIsOpenModalAuthREDU(true));
            return;
        }

        console.log(values);

        const formData = new FormData();

        formData.append("imageName", values.imageName);
        formData.append("file", values.file.file.originFileObj);

        console.log(formData.get("imageName"));
        console.log(formData.get("file"));

        dispatch(createImageMID(formData));
    };

    const [loading, setLoading] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = (await getBase64(file.originFileObj as RcFile)) as string;
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
    };
    const handleChange: UploadProps["onChange"] = (info) => {
        if (info.file.status === "uploading") setLoading(true);

        if (info.file.status === "done") setLoading(false);

        if (info.file.status === "error") setLoading(false);
    };
    const handleCancel = () => setPreviewOpen(false);

    return (
        <div className="container pt-16">
            <div className="fixed left-5">
                <Button onClick={handleClick} type="circle_secondary">
                    <IconArowRight />
                </Button>
            </div>
            <div className="max-w-lg mx-auto">
                <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    {/* NAME IMAGE */}
                    <Form.Item
                        label={<span className="text-base font-bold">Tên ảnh</span>}
                        name="imageName"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên hình ảnh",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input size="large" placeholder="Tên hình ảnh" autoComplete="off" />
                    </Form.Item>

                    {/* HÌNH ẢNH */}
                    <Form.Item
                        label={<span className="text-base font-bold">Hình ảnh</span>}
                        name="file"
                        valuePropName="file"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng tải hình ảnh",
                            },
                        ]}
                        hasFeedback
                    >
                        <Upload
                            listType="picture-card"
                            accept="image/png, image/jpeg"
                            maxCount={1}
                            customRequest={({ onSuccess }) => {
                                setTimeout(() => {
                                    if (onSuccess) {
                                        // Kiểm tra xem onSuccess tồn tại trước khi gọi
                                        onSuccess("ok");
                                    }
                                }, 0);
                            }}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            <div className="UPLOAD">
                                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                            alt="example"
                            style={{
                                width: "100%",
                            }}
                            src={previewImage}
                        />
                    </Modal>

                    {/* BUTTON */}
                    <Form.Item>
                        <Button disabled={isLoadingBtn} type="primary">
                            {isLoadingBtn && <LoadingOutlined />}
                            <span>Thêm hình ảnh</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default CreateImagePage;
