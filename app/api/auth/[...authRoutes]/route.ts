import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest, 
    { params }: {
        params: Promise<{
            authRoutes: string[]
        }>
    }
) {
    const { authRoutes } = await params;
    
    console.log(authRoutes);
    
    return NextResponse.json({
        message: "You have visited the auth route", 
        root: authRoutes
    });
}