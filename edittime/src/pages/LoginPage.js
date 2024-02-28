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
import axios from 'axios';
import "../components/Background/background.css"

function LoginPage() {

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

    const loginData = {
        email: email,
        password: password,
    };

    //Function defines, handle actions by user
    const handleLoginClick = async () => {
        //Reset for each click
        setErrorPassword(false);
        setErrorEmail(false);
        try {
            const response = await axios.post('http://process.env.GATEWAY_IP/login', loginData)
                setErrorEmail(false);
                setErrorPassword(false);
                localStorage.setItem('token',response.data.token)
            } catch(error) {
                
                const serverError = error.response.data.error;
                //set error states on input fields
                if (serverError === "Email") {
                    setErrorEmail(true);
                    setErrorPassword(false);
                } else if (serverError === "Password") {
                    setErrorPassword(true);
                    setErrorEmail(false);
                }else {
                    console.log("Error from axios post", error.response.data);
                    setErrorEmail(false);
                    setErrorPassword(false);
                }
            };
    }

    return (
        <div className="center">
            <div className="login-window">
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
            </div>
        </div>
    )
}

export default LoginPage;