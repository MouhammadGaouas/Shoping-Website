import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function validateAuthUser(request: NextRequest) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not mising");
  }

  try {
    const token = request.cookies.get("token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    return decoded;
  } catch (err) {
    console.error("Invalide token : ", err);
    return null;
  }
}
