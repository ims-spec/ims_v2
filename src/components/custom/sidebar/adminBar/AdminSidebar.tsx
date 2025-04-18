import { AdminMenuSidebar } from "@/components/custom/sidebar/adminBar/AdminMenuSidebar.tsx";
import { useAuth } from "@/store/useAuth.ts";

export const AdminSidebar = () => {
  const { logout } = useAuth();

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body shadow-lg sticky-sm-top"
      style={{ position: "sticky", top: 85, height: "85vh" }}
    >
      <AdminMenuSidebar />
      <hr />
      <button className="btn btn-links" onClick={logout}>
        Sign out
      </button>
    </div>
  );
};
