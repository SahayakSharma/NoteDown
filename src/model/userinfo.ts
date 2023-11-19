import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name : String,
    gmail : String,
    password : String,
})

export const user=mongoose.models.users||mongoose.model('user_creds',userSchema);


