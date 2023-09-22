import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function CreateAccountForm () {

    
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    /*
    DO NOT REMOVE THIS COMMENT, WILL RESULT IN RE-RENDER BUG
    if (password1 !== password2)
    {
      setError(true);
    }
    else
    {
      setError(false);
    }
    */
    /*
    export default function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    };
    */
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
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
                    <TextField
                        required
                        id="user-name"
                        label="Required"
                        defaultValue="Enter username"
                    />
                    {error && (
                        <TextField
                            error
                            id="outlined-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Passwords don't match."
                        />
                    )}
                </div>
                <div>
                    <TextField
                        required
                        id="email-adress"
                        label="Required"
                        defaultValue="Enter email"
                    />
                    {error && (
                        <TextField
                            error
                            id="outlined-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Passwords don't match."
                        />
                    )}
                </div>
                <div>
                    <TextField
                        required
                        id="password-1"
                        label="Required"
                        defaultValue="Enter password"
                    />
                    {error && (
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Passwords don't match."
                    />
                    )}
                </div>
                <div>
                    <TextField
                        required
                        id="password-2"
                        label="Required"
                        defaultValue="Confirm password"
                    />
                    {error && (
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Passwords don't match."
                    />
                    )}
                </div>
                <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
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
                        }
                        label="Password"
                />
                </FormControl>
                </div>
            </div>
        </Box>
    );
}

export default CreateAccountForm;