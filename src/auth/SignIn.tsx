import  {useState} from "react";
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
    const [showPassword, setShowPassword] = useState(false);
    const {signInAuth, error} = useAuth();
    const navigate = useNavigate();

    const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const handleLogin = async () => {
            await signInAuth({email, password});
            navigate("/admin");
        };
        handleLogin();
    };

    return (
        <Container maxWidth='sm' sx={{marginTop: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box
                component="form"
                sx={{"& .MuiTextField-root": {m: 1, width: "25ch"}}}
                noValidate
                autoComplete="off"
                onSubmit={signInHandler}
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
                        label='Password'
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
                        onClick={() => setIsLogin(!isLogin)}
                >Sign up</Button>
            </Stack>
        </Container>
    );
};
