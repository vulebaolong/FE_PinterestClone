import { I_userLogin } from "../../interfaces/userManagementInterface";

function Logged({ userLogin }: { userLogin: I_userLogin }) {
    console.log(userLogin);
    return (
        <div className="max-w-[200px]">
            <p className="text-base font-bold truncate text-text ">Name userName userName userName userName userName user</p>
            <p className="text-base font-normal truncate text-text">Name userName userName userName userName userName user</p>
        </div>
    );
}
export default Logged;
