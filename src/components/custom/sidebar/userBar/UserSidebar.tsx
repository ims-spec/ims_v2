import {useAuth} from "@/store/useAuth.ts";
import {AdminMenuSidebar} from "@/components/custom/sidebar/adminBar/AdminMenuSidebar.tsx";


const UserSidebar = () => {
    const {logout} = useAuth();
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-body shadow-lg"
            // className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
            style={{maxWidth: "20vw", height: "100vh"}}
        >
            <AdminMenuSidebar/>
            <hr/>
            <button className="btn btn-links" onClick={logout}>
                Sign out
            </button>
        </div>
    );
};

export default UserSidebar;