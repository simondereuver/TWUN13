import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import "./CreateAccount.css";

function CreateAccountForm () {

    const [errorPassword, setErrorPassword] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [userEmail, setEmail] = useState('');
    //Move to model and server logic once it needs to be implemented
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [errorUserName, setErrorUserName] = useState(false);
    const [userName, setUserName] = useState('');

    
    const handleSignUpClick = () => {

        //Put a fetch request here to the server-side once it has been implemented
        //Maybe return an array with true or false and index into the if-cases to set the error boxes instead.

        //We actually want to send this to the model via controller and handle the sign up logic there
        //move this to server side, just send the information over and do something similar like this
        if (password1 !== password2) {
            setErrorPassword(true);
            alert(`Password1 is: ${password1} and Password2 is: ${password2}, please make them the same`);
        } else {
            setErrorPassword(false);
        }
    
        if (!emailValidation.test(userEmail)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }

        //add check for username in users in server/model for now just set to false
        if(userName == ""){
            setErrorUserName(true);
        } else {
            setErrorUserName(false);
        }
       
    };
    
    

    const [showPassword1, setShowPassword1] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="create-account">
                <div>
                    <p>Please fill in information needed to create your account!</p>
                    <p id="required"> All fields with * needs to be filled in!</p>
                    
                    <TextField
                        required
                        id="user-name"
                        label="Username"
                        placeholder="Enter username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        error={errorEmail}
                        helperText={errorEmail ? "Invalid username." : ""}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="email-adress"
                        label="Email"
                        placeholder="Enter email"
                        value={userEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errorEmail} // set error state
                        helperText={errorEmail ? "Invalid email address." : ""} 
                    />
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword1 ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                            placeholder="Enter password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            error={errorPassword} // set error state
                            helperText={errorPassword ? "Passwords don't match." : ""}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword2 ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            required
                            label="Password"
                            placeholder="Confirm password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            error={errorPassword} // set error state
                            helperText={errorPassword ? "Passwords don't match." : ""}
                        />
                    </FormControl>
                </div>
                <div>
                    <Button onClick={handleSignUpClick} variant="outlined">
                        Sign up!
                    </Button>
                </div>
            </div>
        </Box>
    );
}

export default CreateAccountForm;