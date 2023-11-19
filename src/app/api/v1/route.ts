

import connecttoDB from "@/dbConnection/connect";
import user from "@/model/userinfo";
import { NextRequest, NextResponse } from "next/server";

connecttoDB();

export async function POST(request:NextRequest) {
    try{
        const reqbody=await request.json();
        const {name,phone}=reqbody;

        const newuser=new user({
            name:name,
            phone:phone
        })
        const saveduser=await newuser.save();
        // console.log(saveduser)

        

        
        console.log("new user saved as "+saveduser)

        return NextResponse.json(user.find());

    }
    catch(e){
        console.log("error in connecting");
        return NextResponse.json({error:"error"});

    }
    
}

