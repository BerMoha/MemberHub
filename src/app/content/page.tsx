"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { IconFileText, IconPlus, IconLock, IconEye, IconCalendar } from "@tabler/icons-react";

const content = [
  { title: "Getting Started Guide", type: "Article", tier: "All", views: 1240, date: "Jun 15, 2026", gated: false },
  { title: "Advanced API Documentation", type: "Docs", tier: "Pro", views: 856, date: "Jun 10, 2026", gated: true },
  { title: "Onboarding Video Series", type: "Video", tier: "Pro", views: 2130, date: "May 28, 2026", gated: true },
  { title: "Monthly Newsletter — July", type: "Email", tier: "All", views: 3400, date: "Jul 1, 2026", gated: false },
  { title: "Enterprise Integration Playbook", type: "PDF", tier: "Enterprise", views: 320, date: "Jun 5, 2026", gated: true },
  { title: "Community Best Practices", type: "Article", tier: "Starter", views: 980, date: "May 20, 2026", gated: true },
  { title: "Product Roadmap Q3 2026", type: "Docs", tier: "Enterprise", views: 210, date: "Jul 8, 2026", gated: true },
  { title: "Welcome Email Template", type: "Email", tier: "All", views: 5600, date: "Jan 5, 2026", gated: false },
];

export default function ContentPage() {
  return (
    <ProtectedRoute>
      <section style={{ padding: "2rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800 }}>Content</h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Manage gated and public content</p>
          </div>
          <button className="btn-primary" style={{ padding: "8px 16px", fontSize: 12 }}>
            <IconPlus size={14} /> Create Content
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
          {content.map(c => (
            <div key={c.title} className="card" style={{ padding: "1.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{
                  padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                  background: c.type === "Video" ? "rgba(239,68,68,0.15)" : c.type === "PDF" ? "rgba(245,158,11,0.15)" : c.type === "Email" ? "rgba(13,148,136,0.15)" : "rgba(99,102,241,0.15)",
                  color: c.type === "Video" ? "#f87171" : c.type === "PDF" ? "#fbbf24" : c.type === "Email" ? "#14b8a6" : "#818cf8",
                }}>
                  {c.type}
                </span>
                {c.gated && <IconLock size={14} color="#f59e0b" />}
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: "var(--muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><IconEye size={13} /> {c.views.toLocaleString()}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><IconCalendar size={13} /> {c.date}</span>
                <span style={{
                  padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600,
                  background: c.tier === "Enterprise" ? "rgba(99,102,241,0.15)" : c.tier === "Pro" ? "rgba(13,148,136,0.15)" : "rgba(107,114,128,0.1)",
                  color: c.tier === "Enterprise" ? "#818cf8" : c.tier === "Pro" ? "#14b8a6" : "#9ca3af",
                }}>
                  {c.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProtectedRoute>
  );
}
