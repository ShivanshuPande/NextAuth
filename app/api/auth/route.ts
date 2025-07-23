import { NextRequest, NextResponse } from "next/server";

export function GET(req :NextRequest , {params : { authRoutes}} : {
    params : {
        authRoutes : string[]
    }
} ){
    const routes = authRoutes

    console.log(routes)
    return NextResponse.json({

        message : "Why are you so cold"
    })
}