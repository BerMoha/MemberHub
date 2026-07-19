export async function login(email: string, _password: string) {
  const user = { email, name: email.split("@")[0], role: "member", plan: "Pro", joined: "Jul 19, 2026" };
  localStorage.setItem("memberhub_token", "demo_token_" + Date.now());
  localStorage.setItem("memberhub_user", JSON.stringify(user));
  return user;
}

export async function register(email: string, _password: string, name?: string) {
  const user = { email, name: name || email.split("@")[0], role: "member", plan: "Free Trial", joined: "Jul 19, 2026" };
  localStorage.setItem("memberhub_token", "demo_token_" + Date.now());
  localStorage.setItem("memberhub_user", JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem("memberhub_token");
  localStorage.removeItem("memberhub_user");
  window.location.href = "/";
}

export function getUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("memberhub_user");
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
