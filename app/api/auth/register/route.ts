
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";




export async function POST(request: NextRequest) {
  const { firstName , lastName , email, password } = await request.json();

  if (!firstName || !lastName || !email || !password)
    return NextResponse.json({ message: "Invalide input" });

  try {
    const isExist = await prisma.user.findUnique({
      where: { email },
    });

    if (isExist)
      return NextResponse.json(
        { message: "Account already in use" },
        { status: 400 },
      );

    const SALT_ROUND = 10;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

    const user = await prisma.user.create({
      data: {
        firstName ,
        lastName ,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { messge: "Account created successfully." },
      { status: 201 },
    );


  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
}
