import React, {useState} from "react";
import { TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

function LoginWindow() {

    //Function defines, handle actions by user
    const handleLoginClick = () => {
        //Reset for each click
        setErrorPassword(false);
        setErrorEmail(false);
        if(email === "admin" && password === "admin")
        {
            setLoggedIn(true);
        }
        else if (email !== "admin") {
            setErrorEmail(true);
        }
        else if (password !== "admin") {
            setErrorPassword(true);
        }
        else {
            setErrorPassword(true);
            setErrorEmail(true);
        }
    }

    const handleLogoutClick = () => {
        setErrorPassword(false);
        setErrorEmail(false);
        setLoggedIn(false);
        setEmail('');
        setPassword('');
    }

    const [loginClicked, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/CreateAccount');
    }
    const [errorEmail, setErrorEmail] = useState(false);
    const [email, setEmail] = useState('');

    const [errorPassword, setErrorPassword] = useState(false);
    const [password, setPassword] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-window">
            {loginClicked ? (
                <div>
                    <ul className="logged-in-window-list">
                        <p>Logged in as: {email} </p>
                        <Button onClick={handleLogoutClick} endIcon={<LoginIcon />}>
                            Logout
                        </Button>
                    </ul>
                </div>
            ) : (
                <ul className="login-window-list">
                <TextField
                    className="input-field"
                    id="email"
                    label="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errorEmail}
                    helperText={errorEmail ? "Wrong email entered." : ""}
                    variant="outlined" 
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <PersonOutlineIcon >
                            </PersonOutlineIcon>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    className="input-field"
                    required
                    id="outlined-adornment-password1"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errorPassword}
                    helperText={errorPassword ? "Wrong password entered." : ""}
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
                <div className="button-div">
                    <Button onClick={handleLoginClick} endIcon={<LoginIcon />}>
                        Login
                    </Button>
                </div>
                <div className="button-div">
                    <p>
                        Don't have an account?
                        <Button onClick={handleCreateAccount}>
                            Create Account
                        </Button>
                    </p>
                </div>
                </ul>
            )}
        </div>
    )
}

export default LoginWindow;