import connecttoDB from "@/dbConnection/connect";
import {Notes} from "@/model/usernotes";
import { NextRequest, NextResponse } from "next/server";

connecttoDB();

export async function POST(request:NextRequest) {
    try{
        const reqbody=await request.json();
        const {username,notes}=reqbody;

        const newuser=new Notes({
            name:username,
            notes:notes,
        })
        const saveduser=await newuser.save();
        // console.log(saveduser)

        

        
        console.log("new user saved as "+saveduser)
        

        // mongoose.connection.close();
        return NextResponse.json({});

    }
    catch(e){
        console.log("error in connecting");
        return NextResponse.json({error:"error"});

    }
    
}

export async function GET(request:NextRequest) {
    try {
        // const users=await founduser;
        const notes=await Notes.find({});
        // console.log(users);
        return NextResponse.json(notes);
        
    } catch (error:any) {
        console.log(error.maessage);
        
    }
}