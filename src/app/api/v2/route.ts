import connecttoDB from "@/dbConnection/connect";
import { NextRequest,NextResponse } from "next/server";
import {user} from "@/model/userinfo";
// import { founduser } from "@/model/userinfo";
connecttoDB();
export async function GET(request:NextRequest) {
    try {
        // const users=await founduser;
        const users=await user.find();
        console.log(users);
        return NextResponse.json(users);
        
    } catch (error:any) {
        console.log("error in connecting");
        return NextResponse.json({error:"error"});
        
    }
}