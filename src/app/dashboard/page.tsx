"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { IconUsers, IconCreditCard, IconFileText, IconChartBar, IconPlus, IconSettings, IconUser, IconLock, IconCalendar, IconMail, IconStar, IconArrowRight } from "@tabler/icons-react";

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string; name?: string; role?: string; plan?: string; joined?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("memberhub_user");
    if (raw) { try { setUser(JSON.parse(raw)); } catch {} }
  }, []);

  const isAdmin = user?.role === "admin";

  const myContent = [
    { title: "Getting Started Guide", type: "Article", unlocked: true },
    { title: "Onboarding Video Series", type: "Video", unlocked: true },
    { title: "Community Best Practices", type: "Article", unlocked: true },
    { title: "Advanced API Documentation", type: "Docs", unlocked: true },
    { title: "Enterprise Integration Playbook", type: "PDF", unlocked: false },
    { title: "Product Roadmap Q3 2026", type: "Docs", unlocked: false },
  ];

  if (isAdmin) {
    const cards = [
      { icon: IconUsers, label: "Total Members", value: "1,247", change: "+12%", color: "#0d9488" },
      { icon: IconCreditCard, label: "Monthly Revenue", value: "$8,420", change: "+8.3%", color: "#6366f1" },
      { icon: IconFileText, label: "Gated Content", value: "34", change: "+3", color: "#f59e0b" },
      { icon: IconChartBar, label: "Engagement Rate", value: "78%", change: "+5.2%", color: "#10b981" },
    ];

    return (
      <ProtectedRoute>
        <section style={{ padding: "2rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 24, fontWeight: 800 }}>Admin Dashboard</h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Welcome back, {user?.email || "Admin"}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
            {cards.map(c => (
              <div key={c.label} className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                    <c.icon size={20} color={c.color} />
                  </div>
                  <span style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>{c.change}</span>
                </div>
                <div style={{ fontSize: 26, fontWeight: 800 }}>{c.value}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{c.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { icon: IconPlus, label: "Members", href: "/members" },
              { icon: IconFileText, label: "Content", href: "/content" },
              { icon: IconCreditCard, label: "Pricing Plans", href: "/pricing" },
              { icon: IconSettings, label: "Settings", href: "/settings" },
            ].map(a => (
              <Link key={a.label} href={a.href} className="card" style={{ padding: "1.2rem", display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                <a.icon size={20} color="#0d9488" />
                <span style={{ fontSize: 14, fontWeight: 600 }}>{a.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <section style={{ padding: "2rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        {/* Profile header */}
        <div className="card" style={{ padding: "2rem", marginBottom: 20, display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 18, display: "grid", placeItems: "center",
            background: "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(99,102,241,0.2))",
            border: "2px solid rgba(13,148,136,0.3)", fontSize: 24, fontWeight: 800, color: "#0d9488",
          }}>
            {(user?.name || user?.email || "U").charAt(0).toUpperCase()}
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800 }}>{user?.name || "Member"}</h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{user?.email}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--muted)" }}>
                <IconCalendar size={13} /> Joined {user?.joined || "Jul 2026"}
              </span>
              <span style={{
                padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                background: "rgba(13,148,136,0.15)", color: "#14b8a6",
              }}>
                {user?.plan || "Free Trial"}
              </span>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="card" style={{ padding: "1.5rem", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <IconCreditCard size={20} color="#6366f1" />
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>My Subscription</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>Plan</div>
              <div style={{ fontSize: 16, fontWeight: 700 }} className="gradient-text">{user?.plan || "Free Trial"}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>Status</div>
              <div style={{ fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981" }} /> Active
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>Next billing</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Aug 19, 2026</div>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            <Link href="/pricing" className="btn-outline" style={{ padding: "8px 16px", fontSize: 12 }}>
              <IconStar size={14} /> Upgrade Plan
            </Link>
          </div>
        </div>

        {/* My Content */}
        <div className="card" style={{ padding: "1.5rem", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <IconFileText size={20} color="#f59e0b" />
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>My Content</h2>
          </div>
          {myContent.map((c, i) => (
            <div key={c.title} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 0", borderBottom: i < myContent.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {c.unlocked
                  ? <IconFileText size={16} color="#10b981" />
                  : <IconLock size={16} color="#6b7280" />
                }
                <span style={{ fontSize: 13, color: c.unlocked ? "var(--text)" : "var(--muted)" }}>{c.title}</span>
                <span style={{
                  padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600,
                  background: "rgba(99,102,241,0.1)", color: "#818cf8",
                }}>
                  {c.type}
                </span>
              </div>
              {c.unlocked ? (
                <span style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>Access</span>
              ) : (
                <span style={{ fontSize: 11, color: "var(--muted)" }}>Upgrade to unlock</span>
              )}
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <IconMail size={20} color="#0d9488" />
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Recent Activity</h2>
          </div>
          {[
            { text: "You accessed \"Getting Started Guide\"", time: "2 hours ago", color: "#10b981" },
            { text: "Subscription renewed — Pro Plan", time: "5 days ago", color: "#6366f1" },
            { text: "You joined MemberHub", time: user?.joined || "Jul 19, 2026", color: "#0d9488" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.color }} />
                <span style={{ fontSize: 13 }}>{item.text}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{item.time}</span>
            </div>
          ))}
        </div>
      </section>
    </ProtectedRoute>
  );
}
