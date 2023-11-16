import { Form, Input } from "antd";
import Button from "../../components/Button/Button";
import { navigate } from "../../helpers/navigate";
import IconArowRight from "../../icon/IconArowRight";
import { I_userUpdate } from "../../interfaces/userManagementInterface";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { LoadingOutlined } from "@ant-design/icons";
import { updateUserMid } from "../../redux/slices/userManagementSlice";

function UpdateUserPage() {
    const [form] = Form.useForm();
    const dispatch: DispatchType = useDispatch();

    const { isLoadingBtn } = useSelector((state: RootState) => state.loadingSlice);

    const handleClickBack = () => {
        navigate(-1);
    };

    const onFinish = (values: I_userUpdate) => {
        console.log(values);
        dispatch(updateUserMid(values));
    };

    return (
        <div className="container pt-16">
            <div className="fixed left-5">
                <Button onClick={handleClickBack} type="circle_secondary">
                    <IconArowRight />
                </Button>
            </div>
            <div className="max-w-lg mx-auto">
                <h2 className="mb-5 text-3xl font-black">Hồ sơ công khai</h2>
                <p className="mb-20">Người truy cập hồ sơ của bạn sẽ thấy thông tin sau</p>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    {/* fullName */}
                    <Form.Item<I_userUpdate> label={<span className="text-base font-bold">Họ và tên</span>} name="fullName">
                        <Input size="large" placeholder="Họ và tên" autoComplete="off" />
                    </Form.Item>
                    {/* userName */}
                    <Form.Item<I_userUpdate> label={<span className="text-base font-bold">Tài khoản</span>} name="userName">
                        <Input size="large" placeholder="Tài khoản" autoComplete="off" />
                    </Form.Item>
                    {/* email */}
                    <Form.Item<I_userUpdate> label={<span className="text-base font-bold">email</span>} name="email">
                        <Input size="large" placeholder="email" autoComplete="off" />
                    </Form.Item>
                    {/* phoneNumber */}
                    <Form.Item<I_userUpdate> label={<span className="text-base font-bold">Số điện thoại</span>} name="phoneNumber">
                        <Input size="large" placeholder="Số điện thoại" autoComplete="off" />
                    </Form.Item>

                    {/* BUTTON */}
                    <Form.Item>
                        <Button disabled={isLoadingBtn} type="primary">
                            {isLoadingBtn && <LoadingOutlined />}
                            <span>Chỉnh sửa thông tin</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default UpdateUserPage;
