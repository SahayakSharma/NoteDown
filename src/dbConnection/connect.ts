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











// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sahayaksharma6:<password>@users.bhwskda.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
//  async function connecttoDB() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const db = client.db("users");
//     const coll = db.collection("first");
//     await coll.insertOne({ping:1})
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } 
//   catch(err){
//     console.log("error in connecting"+ err.message)
//   }