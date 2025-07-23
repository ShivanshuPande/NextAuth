import { NextResponse } from "next/server";

export function GET(){
   return NextResponse.json({
        message : "You have visited the auth route"
    })
}

//global catch