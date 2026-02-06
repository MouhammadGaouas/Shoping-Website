import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();


  if (!email || !password) return NextResponse.json({ message: "Invalide input" });

  try {

  } catch (err) {

  }
}
