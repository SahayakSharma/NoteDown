

import connecttoDB from "@/dbConnection/connect";
import user from "@/model/userinfo";
import { NextRequest, NextResponse } from "next/server";

connecttoDB();

export async function POST(request:NextRequest) {
    try{
        const reqbody=await request.json();
        const {username,gmail,password}=reqbody;

        const newuser=new user({
            name:username,
            gmail:gmail,
            password:password,
        })
        const saveduser=await newuser.save();
        // console.log(saveduser)

        

        
        console.log("new user saved as "+saveduser)
        

        return NextResponse.json({});

    }
    catch(e){
        console.log("error in connecting");
        return NextResponse.json({error:"error"});

    }
    
}

