const validator = require("validator");

const validationSignUpData = (req)=>{
    const {firstName,lastName, emailId, password} = req.body;

    if(!firstName){
        throw new Error("First Name is not valid")
    }
    else if(!lastName){
        throw new Error("Last Name is not valid")
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email id Not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password");
    }
}

module.exports = {validationSignUpData,validateEditProfile};