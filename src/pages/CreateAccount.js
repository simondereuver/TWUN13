import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

/* 
First Name: To identify the user.
Last Name: To identify the user.
Email Address: To uniquely identify the user and for communication.
Password: To secure the user's account.

*/

function CreateAccountForm () {

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    /*
    if (password1 !== password2)
    {
      setError(true);
    }
    else
    {
      setError(false);
    }
    */

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
                </div>
                <div>
                <TextField
                    required
                    id="email-adress"
                    label="Required"
                    defaultValue="Enter email"
                />
                </div>
                <div>
                <TextField
                    required
                    id="password-1"
                    label="Required"
                    defaultValue="Enter password"
                />
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
            </div>
        </Box>
    );
}

export default CreateAccountForm;