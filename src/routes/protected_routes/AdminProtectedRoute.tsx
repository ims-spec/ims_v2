import { Navigate, Outlet } from "react-router-dom";
import { IProtectedProps } from "../types";

const AdminProtectedRoute = ({
  role,
  redirectPath = "/",
  children,
}: IProtectedProps) => {
  if (role !== "admin") return <Navigate to={redirectPath} replace />;
  return children ? children : <Outlet />;
};

export default AdminProtectedRoute;
