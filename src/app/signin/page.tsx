"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { login, register } from "@/lib/auth";
import { IconBrandGoogle, IconBrandGithub } from "@tabler/icons-react";
import Logo from "@/components/Logo";

function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [tab, setTab] = useState<"login" | "register">(params.get("tab") === "register" ? "register" : "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (tab === "login") await login(email, password);
      else await register(email, password, name);
      window.location.href = "/profile";
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: string) => {
    setLoading(true);
    const demoEmail = provider === "google" ? "demo@gmail.com" : "demo@github.com";
    await login(demoEmail, "demo");
    window.location.href = "/profile";
  };

  return (
    <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: 420, padding: "2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
            <Logo size={48} />
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800 }}>
            {tab === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>
            {tab === "login" ? "Sign in to your MemberHub account" : "Start managing your memberships"}
          </p>
        </div>

        {/* OAuth */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          <button onClick={() => handleOAuth("google")} className="btn-outline" style={{ padding: "11px 16px", fontSize: 13, justifyContent: "center", width: "100%" }}>
            <IconBrandGoogle size={18} /> Continue with Google
          </button>
          <button onClick={() => handleOAuth("github")} className="btn-outline" style={{ padding: "11px 16px", fontSize: 13, justifyContent: "center", width: "100%" }}>
            <IconBrandGithub size={18} /> Continue with GitHub
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{ fontSize: 11, color: "var(--muted)" }}>or</span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", marginBottom: 20, borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)" }}>
          {(["login", "register"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "10px", fontSize: 13, fontWeight: 600,
              background: tab === t ? "rgba(13, 148, 136, 0.15)" : "transparent",
              color: tab === t ? "#0d9488" : "var(--muted)",
            }}>
              {t === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {error && (
          <div style={{ padding: "10px 14px", borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", fontSize: 13, color: "#f87171", marginBottom: 16 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {tab === "register" && (
            <input className="input" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          )}
          <input className="input" type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="btn-primary" disabled={loading} style={{ padding: 14, fontSize: 14, width: "100%", opacity: loading ? 0.7 : 1 }}>
            {loading ? "Please wait..." : tab === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted)", marginTop: 20 }}>
          {tab === "login" ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setTab(tab === "login" ? "register" : "login")} style={{ color: "#0d9488", fontWeight: 600, fontSize: 12 }}>
            {tab === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default function SignInPage() {
  return <Suspense><SignInForm /></Suspense>;
}
