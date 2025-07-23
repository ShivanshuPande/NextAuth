import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message : "Why are you so cold"
    })
}