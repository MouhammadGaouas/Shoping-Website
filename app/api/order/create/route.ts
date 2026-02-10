import { NextRequest, NextResponse } from "next/server";
import { validateAuthUser} from "@/lib/auth";

export function POST (req : NextRequest) {
    const user =  validateAuthUser(req)

    if(!user)
        return NextResponse.json({massage: "Unathorized"})

    


    return NextResponse.json({message: "Authorized" , user: user})
}