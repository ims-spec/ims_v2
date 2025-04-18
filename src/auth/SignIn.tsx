import React, { useState } from "react";
import { ChildComponentProps } from "./Auth";
import { useAuth } from "../store/useAuth";
import { useNavigate } from "react-router-dom";

import { Container, Box, TextField, Stack } from "@mui/material";

export const SignIn: React.FC<ChildComponentProps> = ({
  isLogin,
  setIsLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInAuth, error } = useAuth();
  const navigate = useNavigate();

  const submitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const handleLogin = async () => {
      await signInAuth({ email, password });
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
    <Container>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField id="filled-basic" label="Password" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
      </Box>
    </Container>
  );
};
