import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";


export const PasswordField = ({
                                  showPassword,
                                  label,
                                  handleClickShowPassword,
                                  handleMouseDownPassword,
                                  handleMouseUpPassword,
                                  setPassword,
                              }: {
    label: string;
    showPassword?: boolean;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: () => void;
    handleMouseUpPassword: () => void;
    setPassword: (newPassword: string) => void;
}) => {
    return (
        <FormControl sx={{m: 1, width: '250px'}} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
            <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>
    );
};

