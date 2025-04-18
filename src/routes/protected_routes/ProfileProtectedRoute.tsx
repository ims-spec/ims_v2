import { Navigate, Outlet } from "react-router-dom";
import { IProtectedProps } from "../types";

const ProfileProtectedRoute = ({
  role,
  redirectPath = "/",
  children,
}: IProtectedProps) => {
  if (role !== "profile") return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};

export default ProfileProtectedRoute;
