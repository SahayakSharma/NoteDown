import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name : String,
    gmail : String,
    password : String,
})

export const User=mongoose.models.user_creds||mongoose.model('user_creds',userSchema);


