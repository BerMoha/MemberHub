"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { IconUsers, IconCreditCard, IconFileText, IconChartBar, IconPlus, IconSettings } from "@tabler/icons-react";

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string; role?: string; plan?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("memberhub_user");
    if (raw) { try { setUser(JSON.parse(raw)); } catch {} }
  }, []);

  const cards = [
    { icon: IconUsers, label: "Total Members", value: "1,247", change: "+12%", color: "#0d9488" },
    { icon: IconCreditCard, label: "Monthly Revenue", value: "$8,420", change: "+8.3%", color: "#6366f1" },
    { icon: IconFileText, label: "Gated Content", value: "34", change: "+3", color: "#f59e0b" },
    { icon: IconChartBar, label: "Engagement Rate", value: "78%", change: "+5.2%", color: "#10b981" },
  ];

  const actions = [
    { icon: IconPlus, label: "Add Member", href: "/memberhub/members/new" },
    { icon: IconFileText, label: "Create Content", href: "/memberhub/content/new" },
    { icon: IconCreditCard, label: "Manage Plans", href: "/memberhub/plans" },
    { icon: IconSettings, label: "Settings", href: "/memberhub/settings" },
  ];

  return (
    <ProtectedRoute>
      <section style={{ padding: "2rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Dashboard</h1>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>
            Welcome back, {user?.email || "Member"}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
          {cards.map(c => (
            <div key={c.label} className="card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center",
                  background: `${c.color}15`, border: `1px solid ${c.color}30`,
                }}>
                  <c.icon size={20} color={c.color} />
                </div>
                <span style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>{c.change}</span>
              </div>
              <div style={{ fontSize: 26, fontWeight: 800 }}>{c.value}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{c.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Quick Actions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 32 }}>
          {actions.map(a => (
            <Link key={a.label} href={a.href} className="card" style={{
              padding: "1.2rem", display: "flex", alignItems: "center", gap: 12, textDecoration: "none",
            }}>
              <a.icon size={20} color="#0d9488" />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{a.label}</span>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Recent Activity</h2>
        <div className="card" style={{ padding: "1.5rem" }}>
          {[
            { text: "New member joined — alex@example.com", time: "2 minutes ago", color: "#10b981" },
            { text: "Subscription renewed — Pro Plan", time: "1 hour ago", color: "#6366f1" },
            { text: "New content published — \"Getting Started Guide\"", time: "3 hours ago", color: "#f59e0b" },
            { text: "Member upgraded from Basic to Pro", time: "5 hours ago", color: "#0d9488" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 0", borderBottom: i < 3 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                <span style={{ fontSize: 13 }}>{item.text}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{item.time}</span>
            </div>
          ))}
        </div>

        {/* Plan info */}
        <div className="card" style={{ marginTop: 20, padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Current Plan: <span className="gradient-text">{user?.plan || "Free Trial"}</span></div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>14 days remaining in trial</div>
          </div>
          <Link href="/memberhub/pricing" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
            Upgrade Plan
          </Link>
        </div>
      </section>
    </ProtectedRoute>
  );
}
