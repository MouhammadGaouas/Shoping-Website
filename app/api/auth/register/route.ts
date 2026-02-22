import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { firstName, lastName, phoneNumber, email, password } =
    await request.json();


  if (!firstName || !lastName || !phoneNumber || !email || !password)
    return NextResponse.json({ message: "Invalide input" }, { status: 500 });

  try {
    const isExist = await prisma.user.findUnique({
      where: { email },
    });


    if (isExist)
      return NextResponse.json(
        { message: "Account already in use" },
        { status: 409 },
      );

    console.log(1);
    const SALT_ROUND = 10;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: hashedPassword,
      },
    });

    console.log(user);

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
