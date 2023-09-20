import React, { useState } from 'react';
import { TextField } from '@mui/material';

// dont work 
import LoginIcon from '@mui/icons-material/Login';
// dont work 
import CloseIcon from '@mui/icons-material/Close';

//I think we can just implement the logic in the navbar as done below
//By implementing something similar to this on the correct button 
//"Button onClick={handleLoginClick} endIcon={<LoginIcon />}>" but instead use LoginWindow as it is the component we are exporting

import Button from '@mui/material/Button';
//import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
function LoginWindow() {

    //Function defines, handle actions by user
    const handleLoginClick = () => {
        //Add some functionality to check if correct credentials is entered
        alert("Login clicked");
    }
    const handleCancelClick = () => {
        //Close the window
        alert("Close window clicked");
    }

    const handleCreateAccount = () => {
        alert("Create account clicked");
    }
    
    //We return what we want to display?
    return (
        <div className="login-window">
            <ul className="login-window-list">
                <TextField id="email" label="Enter email" variant="outlined" />
                <TextField id="password" label="Enter password" variant="outlined" />
                <div>
                    <Button onClick={handleLoginClick} endIcon={<LoginIcon />}>
                        Login
                    </Button>
                    <Button onClick= {handleCancelClick} endIcon={<CloseIcon />}>
                        Close
                    </Button>
                </div>
                <div>
                    {/*Add css styling for text size and button size*/}
                    <p>
                        Don't have an account?
                        <Button onClick={handleCreateAccount} >
                            Create Account
                        </Button>
                    </p>
                </div>
                </ul>
        </div>
    )
}

export default LoginWindow;