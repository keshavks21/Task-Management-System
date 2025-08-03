const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required: true,
        trim: true
    },
    lastName :{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error(value + " is not a strong password");
            }
        }
    },
},
{
    timestamps: true
})

userSchema.methods.getJWT =async function(){
    const user = this;
    const token =  await jwt.sign({_id: user._id}, process.env.JWT_SECRET,
    {expiresIn: "1d"}
    )
    return token;
}
 
userSchema.methods.validatePassword = async function(passwordEnterByUser){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid=  await bcrypt.compare(passwordEnterByUser,passwordHash)
return isPasswordValid;
}

const User = mongoose.model("User",userSchema);

module.exports = User;