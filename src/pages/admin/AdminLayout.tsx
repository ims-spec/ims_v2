import {Outlet} from "react-router-dom";
import {Button} from '@mui/material'
import {useAuth} from '@/store/useAuth.ts'
import {Box} from '@mui/material'
import {AdminSidebar} from "@/components/custom/sidebar/adminBar/AdminSidebar.tsx";
import {Header} from '@/components/header/Header'


export const AdminLayout = ({role}: { role: string }) => {
    const {logout} = useAuth();
    return (
        <>
            <Box component='div' sx={{display: 'flex',justifyContent: 'space-between'}}>
                <AdminSidebar/>
                <Box>
                    <Header/>
                    <Outlet/>
                </Box>
            </Box>
            <h1>Admin</h1>
            {role}
            <Button onClick={logout}>Logout</Button>

        </>
    );
};
