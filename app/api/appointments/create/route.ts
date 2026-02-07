import { NextRequest, NextResponse } from "next/server";
import { validateAuthCookies} from "@/lib/auth";

export function POST (req : NextRequest) {
    const user = validateAuthCookies(req)

    if(!user)
        return NextResponse.json({massage: "Unathorized"})

    return NextResponse.json({message: "Authorized" , user: user})
}