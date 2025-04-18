import {useEffect, useState} from "react";
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";

export interface ChildComponentProps {
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
}

export const Auth = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        setIsLogin(false);
    }, []);

    return isLogin ? (
        <SignIn isLogin={isLogin} setIsLogin={setIsLogin}/>
    ) : (
        <SignUp isLogin={isLogin} setIsLogin={setIsLogin}/>
    );
};
