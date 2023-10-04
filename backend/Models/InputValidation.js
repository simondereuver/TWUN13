function validateFirstname(firstname) {
    // Custom validation logic here
    return (firstname !== "");
  }

function validateLastname(lastname) {
    // Custom validation logic here
    return (lastname !== "");
}
  
function validateEmail(email) {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //returns true if success or false if not
    return (emailValidation.test(userEmail));
}

function validatePassword(password1, password2) {
    /*
    if (password1 !== password2) {
       return true;
    } 
    else {
        return false;
    }
    */
    return (password1 === password2);
}
  
  module.exports = {
    validateFirstname,
    validateLastname,
    validateEmail,
    validatePassword,
    // Add more validation functions as needed
  };