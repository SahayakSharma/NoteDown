

import connecttoDB from "@/dbConnection/connect";
import {User} from "@/model/userinfo";
import { NextRequest, NextResponse } from "next/server";

connecttoDB();

export async function POST(request:NextRequest) {
    try{
        const reqbody=await request.json();
        const {username,gmail,password}=reqbody;

        const newuser=new User({
            name:username,
            gmail:gmail,
            password:password,
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
        const users=await User.find({});
        // console.log(users);
        return NextResponse.json(users);
        
    } catch (error:any) {
        console.log(error.maessage);
        
    }
}

