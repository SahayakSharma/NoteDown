import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name : String,
    notes:Array,
})

export const Notes=mongoose.models.user_notes||mongoose.model('user_notes',userSchema);


