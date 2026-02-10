import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { NextRequestHint } from "next/dist/server/web/adapter";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 400 },
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }


    const token = jwt.sign({ user_id: user.id  }, process.env.JWT_SECRET!, {
      expiresIn: "15min",
    });

    const res = NextResponse.json({ message: "Login successfuly" });

    res.cookies.set("token", token, {
      httpOnly: true ,
      maxAge: 60 * 60  ,
      path: "/" ,
      secure: process.env.NODE_ENV === "production",
    });

    console.log(res)

    return res ;

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
