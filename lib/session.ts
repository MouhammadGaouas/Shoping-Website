import { auth } from "./auth";
import { NextRequest } from "next/server";

export async function getSession(request: NextRequest) {
  return auth.api.getSession({ headers: request.headers });
}

export async function requireAuth(request: NextRequest) {
  const session = await getSession(request);
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function requireRole(
  request: NextRequest,
  allowedRoles: string | string[],
) {
  const session = await requireAuth(request);
  const userRole = session.user?.role;
  if (!userRole) throw new Error("Forbidden");
  const normalized = Array.isArray(allowedRoles)
    ? allowedRoles
    : [allowedRoles];

  if (!normalized.includes(userRole)) throw new Response("Forbidden" ,  {status: 403});
  return session;
}
