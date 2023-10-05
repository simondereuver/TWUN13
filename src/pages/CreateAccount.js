import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import "./CreateAccount.css";
import countryList from '../data/countriesData';
import axios from 'axios';

function CreateAccountForm () {

    //For email
    const [errorEmail, setErrorEmail] = useState(false);
    const [userEmail, setEmail] = useState('');

    //For firstname
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [userFirstName, setFirstName] = useState('');

    //For lastname
    const [errorLastName, setErrorLastName] = useState(false);
    const [userLastName, setLastName] = useState('');

    //for password
    const [errorPassword, setErrorPassword] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [showPassword1, setShowPassword1] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //For selecting country
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const userData = {
        //finish implementaion once database schema for user is updated.
        //firstname: userFirstName,
        //lastname: userLastName,
        //country: selectedCountry,
        email: userEmail,
        passwordOne: password1,
        passwordTwo: password2,
    };

    const handleSignUpClick = async () => {

        try {
        await axios.post('http://localhost:3001/api/users', userData)
        .then((res) => {
            console.log("Succesfully created user, cool stuff. Here is the user:\n");
            console.log(res);
            setErrorEmail(false);
            setErrorPassword(false);
        })
        } catch(error) {
            
            const serverError = error.response.data.error;
            //set error states on input fields
            if (serverError === "Email") {
                setErrorEmail(true);
            } else if (serverError === "Password") {
                setErrorPassword(true);
            } else {
                console.log("Error from axios post", error.response.data);
                setErrorEmail(false);
                setErrorPassword(false);
            }
        };
        
        //once database schema for users has been updated create more error messages similar to password and email
        if(userFirstName === ""){
            setErrorFirstName(true);
        } else {
            setErrorFirstName(false);
        }
        if(userLastName === ""){
            setErrorLastName(true);
        }
        else {
            setErrorLastName(false);
        }
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
                </div>
                <div>
                <TextField
                        required
                        id="first-name"
                        label="Firstname"
                        placeholder="Enter firstname"
                        value={userFirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        error={errorFirstName}
                        helperText={errorFirstName ? "First name can't be empty." : ""}
                    />
                </div>
                <div>
                <TextField
                        required
                        id="last-name"
                        label="Lastname"
                        placeholder="Enter lastname"
                        value={userLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        error={errorLastName}
                        helperText={errorLastName ? "Lastname can't be empty." : ""}
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
                <FormControl variant="outlined" sx={{ minWidth: 215 }}>
                    <InputLabel>Select Country</InputLabel>
                    <Select
                        value={selectedCountry}
                        onChange={handleChange}
                        label="Select Country"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {countryList.map((country, index) => (
                    <MenuItem key={index} value={country}>
                        {country}
                    </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-adornment-password1"
                        label="Password"
                        type={showPassword1 ? "text" : "password"}
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                        error={errorPassword}
                        helperText={errorPassword ? "Passwords don't match." : ""}
                        InputProps={{
                        endAdornment: (
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
                        ),
                        }}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-adornment-password2"
                        label="Password"
                        type={showPassword2 ? "text" : "password"}
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        error={errorPassword}
                        helperText={errorPassword ? "Passwords don't match." : ""}
                        InputProps={{
                        endAdornment: (
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
                        ),
                        }}
                    />
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