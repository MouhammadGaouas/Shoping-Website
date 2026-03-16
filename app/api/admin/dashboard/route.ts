import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const productCount = await prisma.product.count()
        return NextResponse.json({ count: productCount }, { status: 200 })

    } catch (err) {
        return NextResponse.json({ message: "internal server error" }, { status: 400 })
    }
}