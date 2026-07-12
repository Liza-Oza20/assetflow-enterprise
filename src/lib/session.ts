import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, verifySessionToken, type SessionPayload } from "./auth";

export async function getCurrentSession(): Promise<SessionPayload | null> {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}
