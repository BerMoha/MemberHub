const BASE = typeof window !== "undefined"
  ? (process.env.NEXT_PUBLIC_API_URL || "")
  : (process.env.NEXT_PUBLIC_API_URL || "");

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("memberhub_token") : null;
  const headers: Record<string, string> = { "Content-Type": "application/json", ...(init?.headers as Record<string, string> || {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, { ...init, headers, credentials: "include" });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || `API ${res.status}`);
  }
  return res.json();
}
