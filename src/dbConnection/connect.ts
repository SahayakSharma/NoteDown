import mongoose from "mongoose";
import { MongoClient,ServerApiVersion } from "mongodb";

const connecttoDB=async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log('Database connected successfully');
        })
    }
    catch(e){
        console.log("Error in connecting to database");
    }
    
}


export default connecttoDB;






