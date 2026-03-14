import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";



export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    try {

        const isDeleted = await prisma.product.delete({
            where: { id }
        })

        return NextResponse.json({ message: "Task  deleted succesfully." }, { status: 200 })

    } catch (err: any) {
        if (err.code === "P2025") {
            return NextResponse.json(
                { message: "Product not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "internall server error" }, { status: 500 })
    }

}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
}