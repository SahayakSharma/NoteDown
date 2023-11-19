import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    phone : String
})

const user=mongoose.models.users||mongoose.model('first',userSchema);
// export const founduser=user.find();

export default user;