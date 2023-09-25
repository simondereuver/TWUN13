import React from 'react';
import { TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
function LoginWindow() {

    //Function defines, handle actions by user
    const handleLoginClick = () => {
        //Add some functionality to check if correct credentials is entered
        alert("Login clicked");
        setErrorPassword(false);
    }

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/CreateAccount');
    }

    const [errorPassword, setErrorPassword] = useState(false);
    const [password, setPassword] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = React.useState(false);



    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    

    return (
        <div className="login-window">
            <ul className="login-window-list">
                <TextField id="email" label="Enter email" variant="outlined" />
                <TextField
                        required
                        id="outlined-adornment-password1"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errorPassword}
                        helperText={errorPassword ? "Passwords don't match." : ""}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        ),
                        }}
                    />
                <div>
                    <Button onClick={handleLoginClick} endIcon={<LoginIcon />}>
                        Login
                    </Button>
                </div>
                <div>
                    {/*Add css styling for text size and button size*/}
                    <p>
                        Don't have an account?
                            <Button onClick={handleCreateAccount}>
                                Create Account
                            </Button>
                    </p>
                </div>
                </ul>
        </div>
    )
}

export default LoginWindow;