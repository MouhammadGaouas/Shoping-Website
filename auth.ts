import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";

interface AuthenticatedRequest extends NextRequest {
  user?: any; // أو يمكنك تحديد النوع الحقيقي للـ user
}

export function authMiddleware(req: AuthenticatedRequest) {
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.split(" ")[1];

  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; 
    return NextResponse.next();

  } catch (err) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 401 },
    );
  }
}
