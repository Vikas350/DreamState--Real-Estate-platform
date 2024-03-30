import mongoose from "mongoose";

//define schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true}) //add extra info to the data(creation and updation time) 

//create the model
const User = mongoose.model('User', userSchema);

export default User;