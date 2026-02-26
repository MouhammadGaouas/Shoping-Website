import { NextRequest, NextResponse } from "next/server";
import { validateAuthUser, requireRole } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        const user = validateAuthUser(request)

        if (!user)
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

        try {
            requireRole(user as {
                role: string
            }, "SELLER")
        } catch {
            return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
        }

        const { name, description, price, quantity } = await request.json();

        if(!name || !description || !price || !quantity)


    } catch {

    }
}