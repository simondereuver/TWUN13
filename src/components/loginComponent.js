import React from 'react';
import { TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        alert("Create account clicked");
        navigate('/CreateAccount');
    }
    

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