import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { error } from "console";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  console.log(email, password);
  if (!email || !password) return NextResponse.json({ message: "Invalide Ts" });

  try {
    console.log(0);

    const isExist = await prisma.user.findUnique({
      where: { email },
    });

    console.log(1);
    if (isExist)
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 409 },
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return NextResponse.json({ message: "internal server error" });
  }
  return NextResponse.json({ message: "Account created succefully." });
}
