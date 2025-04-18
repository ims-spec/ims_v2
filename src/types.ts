import {User, Session} from "@supabase/supabase-js";

//useAuth
interface IAuth {
    email: string;
    password: string;
}

export interface IAuthState {
    session: Session | null;
    user: User | null;
    role: string | null;
    loading: boolean;
    error: string | null;
    signInAuth: ({email, password}: IAuth) => Promise<void>;
    signUpAuth: ({email, password}: IAuth) => Promise<void>;
    getSession: () => Promise<void>;
    getAllUsers: () => Promise<void>;
    logout: () => Promise<void>;
}

//routes

//protected routes
export interface IProtectedProps {
    role?: string;
    redirectPath?: string;
    children?: React.ReactNode;
}

//Sidebar

export interface IAdminMenuItem {
    id: string;
    liClassName: string;
    link: {
        to: string;
        className: string;
    };
    inLink: {
        iconClassName: string;
        spanClassName: string;
        spanText: string;
    };
}