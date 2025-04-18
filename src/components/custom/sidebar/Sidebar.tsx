import {AdminSidebar} from "@/components/custom/sidebar/adminBar/AdminSidebar.tsx";

export const Sidebar = ({userRole}: { userRole: string }) => {
    if (userRole === "admin") return <AdminSidebar/>;
    // if (userRole === "user") return <AdminSidebar/>;
    // if (userRole === "profile") return <AdminSidebar/>;
};
