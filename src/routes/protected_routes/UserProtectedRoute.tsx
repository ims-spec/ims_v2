import { Navigate } from "react-router";
import { IProtectedProps } from "../../types";

export const UserProtectedRoute = ({
  role,
  redirectPath = "/",
  children,
}: IProtectedProps) => {
  if (role !== "user") <Navigate to={redirectPath} />;
  return children;
};
