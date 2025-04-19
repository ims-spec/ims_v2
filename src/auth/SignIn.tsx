import React, {useState} from "react";
import {ChildComponentProps} from "./Auth";
import {useAuth} from "../store/useAuth";
import {useNavigate} from "react-router-dom";
import {PasswordField} from '@/components/inputs/PasswordField.tsx'


import {
    Container,
    Box,
    Stack,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography
} from "@mui/material";


export const SignIn: React.FC<ChildComponentProps> = ({
                                                          isLogin,
                                                          setIsLogin,
                                                      }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const {signInAuth, error} = useAuth();
    const navigate = useNavigate();

    const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const submitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const handleLogin = async () => {
            await signInAuth({email, password});
            navigate("/admin");
        };
        handleLogin();
    };

    return (
        // <div className="d-flex align-items-center py-4 bg-body-tertiary">
        //     <main className="form-signin w-25 m-auto shadow-lg p-5">
        //         <form onSubmit={submitSignIn}>
        //             <h1 className="h3 mt-5 mb-3 fw-normal">Please sign in</h1>
        //             {error && <p>{error}</p>}
        //             <div className="form-floating">
        //                 <input
        //                     type="email"
        //                     className="form-control mt-4"
        //                     id="floatingInput"
        //                     placeholder="name@example.com"
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //                 <label htmlFor="floatingInput">Email address</label>
        //             </div>
        //             <div className="form-floating">
        //                 <input
        //                     type="password"
        //                     className="form-control mt-4"
        //                     id="floatingPassword"
        //                     placeholder="Password"
        //                     onChange={(e) => setPassword(e.target.value)}
        //                 />
        //                 <label htmlFor="floatingPassword">Password</label>
        //             </div>

        //             <div className="form-check text-start my-3">
        //                 <input
        //                     className="form-check-input"
        //                     type="checkbox"
        //                     value="remember-me"
        //                     id="flexCheckDefault"
        //                 />
        //                 <label className="form-check-label" htmlFor="flexCheckDefault">
        //                     Remember me
        //                 </label>
        //             </div>
        //             <button className="btn btn-primary w-100 py-2" type="submit">
        //                 Sign in
        //             </button>
        //             <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
        //         </form>
        //         <div className="mt-5">
        //             <span>Don't have an account?</span>
        //             <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
        //                 Sign Up Now
        //             </button>
        //         </div>
        //     </main>
        // </div>
        <Container maxWidth='sm' sx={{marginTop: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box
                component="form"
                sx={{"& .MuiTextField-root": {m: 1, width: "25ch"}}}
                noValidate
                autoComplete="off"
                onSubmit={submitSignIn}
            >
                <Stack spacing={2}>
                    <FormControl sx={{m: 1, width: '250px'}} variant="standard">
                        <InputLabel htmlFor="input-email">Email</InputLabel>
                        <Input type='email' id='input-email' onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <PasswordField
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                        setPassword={setPassword}
                    />
                    <Button type='submit'>Sign in</Button>
                </Stack>
            </Box>
            <Stack spacing={2} direction='row' alignItems="center" sx={{marginTop: '25px'}}>
                <Typography variant='caption'>Don't have an account?</Typography>
                <Button sx={{
                    textTransform: 'none',
                    color: 'blue',
                    padding: 0,
                    minWidth: 0,
                }}
                onClick={()=>setIsLogin(!isLogin)}
                >Sign up</Button>
            </Stack>

        </Container>
    );
};
