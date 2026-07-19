"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; role?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("memberhub_user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
  }, []);

  const isAdmin = user?.role === "admin";
  const links = user
    ? [
        { href: "/dashboard", label: "Dashboard" },
        ...(isAdmin ? [
          { href: "/members", label: "Members" },
          { href: "/content", label: "Content" },
          { href: "/settings", label: "Settings" },
        ] : [
          { href: "/pricing", label: "Upgrade" },
        ]),
      ]
    : [
        { href: "/pricing", label: "Pricing" },
        { href: "/#features", label: "Features" },
      ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(3, 7, 18, 0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)", padding: "0 1.5rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 20 }}>
          <Logo size={42} />
          <span className="gradient-text">MemberHub</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#9ca3af", borderRadius: 8 }}
              className="nav-link">{l.label}</Link>
          ))}
          {user ? (
            <button onClick={() => { localStorage.removeItem("memberhub_token"); localStorage.removeItem("memberhub_user"); window.location.href = "/"; }}
              style={{ padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "#ef4444" }}>
              Sign Out
            </button>
          ) : (
            <Link href="/signin" className="btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
              Sign In
            </Link>
          )}
          <button onClick={() => setOpen(!open)} style={{ display: "none", padding: 8 }}>
            {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
