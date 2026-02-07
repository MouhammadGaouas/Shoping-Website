import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { unauthorized } from "next/navigation";

export function validateAuthCookies(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) return NextResponse.json({ message: "Unathorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    return decoded;
  } catch (err) {
    console.error("Invalide token : ", err);
    return null;
  }
}
