import { apiFetch } from "./api";

interface AuthResponse { access_token: string; user: { email: string; role?: string } }

export async function login(email: string, password: string) {
  const data = await apiFetch<AuthResponse>("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem("memberhub_token", data.access_token);
  localStorage.setItem("memberhub_user", JSON.stringify(data.user));
  return data.user;
}

export async function register(email: string, password: string, name?: string) {
  const data = await apiFetch<AuthResponse>("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
  });
  localStorage.setItem("memberhub_token", data.access_token);
  localStorage.setItem("memberhub_user", JSON.stringify(data.user));
  return data.user;
}

export function logout() {
  localStorage.removeItem("memberhub_token");
  localStorage.removeItem("memberhub_user");
  window.location.href = "/memberhub";
}

export function getUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("memberhub_user");
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
