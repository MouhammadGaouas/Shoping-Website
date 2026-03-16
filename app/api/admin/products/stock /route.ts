import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET () {
    try {
        const products = await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                stock: true,
                description: true,
            }
        })

        return NextResponse.json({ products: products }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Internal server error" ,} , {status: 500})
    }
}