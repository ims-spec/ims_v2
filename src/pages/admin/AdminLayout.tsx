import { Outlet } from "react-router-dom";
import {Button} from '@mui/material'
import {useAuth} from '@/store/useAuth.ts'


export const AdminLayout = ({role}) => {
    const {logout} = useAuth();

  return (
    <>
        <h1>Admin</h1>
        {role}
        <Button onClick={logout}>Logout</Button>
      <Outlet />
    </>
  );
};
