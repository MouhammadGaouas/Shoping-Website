import { NextRequest } from "next/server";
import { validateAuthCookies , requireAuth } from "@/lib/auth";

export default function POST (request: NextRequest) {
    validateAuthCookies(request)
}