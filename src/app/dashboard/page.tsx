"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { IconUsers, IconCreditCard, IconFileText, IconChartBar, IconPlus, IconSettings } from "@tabler/icons-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; name?: string; role?: string; plan?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("memberhub_user");
    if (raw) {
      try {
        const u = JSON.parse(raw);
        if (u.role !== "admin") { window.location.href = "/profile"; return; }
        setUser(u);
      } catch {}
    }
  }, [router]);

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

        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Quick Actions</h2>
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
