import React, {useEffect, useState} from "react";
import {ChildComponentProps} from "./Auth";
import {ConditionsBlock} from "@/components/custom/forAuth/ConditionsBlock";
import {useAuth} from "../store/useAuth";
import {Box, Button, Container, FormControl, Input, InputLabel, Stack, Typography} from "@mui/material";
import {PasswordField} from "@/components/inputs/PasswordField.tsx";

export const SignUp: React.FC<ChildComponentProps> = ({
                                                          isLogin,
                                                          setIsLogin,
                                                      }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setconfirmPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLength, setIsLength] = useState<boolean>(false);
    const [hasUppercase, setHasUppercase] = useState<boolean>(false);
    const [hasNumber, setHasNumber] = useState<boolean>(false);
    const {signUpAuth} = useAuth();

    useEffect(() => {
        checkForUppercase(password);
        checkForNumber(password);

        if (isError) {
            setErrorMessage("Пароли не совпадают!");
        }
    }, [isError, password, confirmPassword, hasUppercase, hasNumber]);

    const signUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setIsError(true);
        } else {
            setIsError(false);
        }

        if (password.length >= 8) {
            setIsLength(true);
        } else setIsLength(false);

        if (isError) {
            return setErrorMessage("Пароли не совпадают!");
        }

        signUpAuth({email: email, password: password}).then();
    };

    const checkForUppercase = (value: string) => {
        const uppercaseRegex = /[A-Z]/; // Регулярное выражение для поиска заглавных букв
        setHasUppercase(uppercaseRegex.test(value)); // Проверяем и обновляем состояние
    };

    const checkForNumber = (value: string) => {
        const numberRegex = /[0-9]/; // Регулярное выражение для поиска цифр
        setHasNumber(numberRegex.test(value)); // Обновляем состояние
    };

    const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        // <div className="d-flex align-items-center py-4 bg-body-tertiary">
        //   <main className="form-signin w-25 m-auto shadow-lg p-4">
        //     <form onSubmit={handler}>
        //       <h1 className="h3 mt-2 mb-3 fw-normal">Please sign up</h1>
        //       {isError && errorMessage}
        //       <div className="form-floating">
        //         <input
        //           type="email"
        //           className="form-control mt-4"
        //           id="floatingInput"
        //           placeholder="name@example.com"
        //           autoComplete="new-email"
        //           onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <label htmlFor="floatingInput">Email address</label>
        //       </div>
        //       <div className="form-floating">
        //         <input
        //           type="password"
        //           className="form-control mt-4"
        //           id="floatingPassword"
        //           placeholder="Password"
        //           autoComplete="new-password"
        //           onChange={(e) => setInpPassword(e.target.value)}
        //         />
        //         <label htmlFor="floatingPassword">Password</label>
        //       </div>
        //
        //       <div className="form-floating">
        //         <input
        //           type="password"
        //           className="form-control mt-4"
        //           id="floatingPassword2"
        //           placeholder="Password"
        //           autoComplete="new-password"
        //           onChange={(e) => setInpPassword2(e.target.value)}
        //         />
        //         <label htmlFor="floatingPassword2">Repeat password</label>
        //       </div>
        //       <div className="mt-2">
        //         <ConditionsBlock
        //           isLength={isLength}
        //           hasUppercase={hasUppercase}
        //           hasNumber={hasNumber}
        //         />
        //       </div>
        //
        //       <button className="btn btn-primary w-100 py-2 mt-5" type="submit">
        //         Sign up
        //       </button>
        //       <p className="mt-3 mb-3 text-body-secondary">© 2025</p>
        //     </form>
        //     <div className="mt-2">
        //       <span>Have an account?</span>
        //       <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
        //         Sign In Now
        //       </button>
        //     </div>
        //   </main>
        // </div>

        <Container maxWidth='sm' sx={{marginTop: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box
                component="form"
                sx={{"& .MuiTextField-root": {m: 1, width: "25ch"}}}
                noValidate
                autoComplete="off"
                onSubmit={signUpHandler}
            >

                <Stack spacing={2}>
                    {isError && errorMessage}
                    <FormControl sx={{m: 1, width: '250px'}} variant="standard" fullWidth error={true}>
                        <InputLabel htmlFor="input-email">Email</InputLabel>
                        <Input type='email' id='input-email' onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <PasswordField
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                        setPassword={setPassword}
                        label='Password'
                    />
                    <PasswordField
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                        setPassword={setconfirmPassword}
                        label='Confirm password'
                    />

                    <ConditionsBlock
                        isLength={isLength}
                        hasUppercase={hasUppercase}
                        hasNumber={hasNumber}
                    />
                    <Button type='submit'>Sign up</Button>
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
                        onClick={() => setIsLogin(!isLogin)}
                >Sign in</Button>
            </Stack>
        </Container>
    );
};
