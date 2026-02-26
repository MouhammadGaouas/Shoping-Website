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

    return decoded as {
      id: string,
      role: string
    }
    
  } catch (err) {
    console.error("Invalide token : ", err);
    return null;
  }
}

export function requireRole(user: { role: string }, role: 'USER' | 'SELLER') {

  if (!user.role || user.role !== role) {
    throw new Error("Forbidden")
  }
}