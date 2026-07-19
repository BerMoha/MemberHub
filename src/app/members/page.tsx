"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { IconUsers, IconPlus, IconSearch, IconFilter, IconDotsVertical, IconMail } from "@tabler/icons-react";

const members = [
  { name: "Sarah Johnson", email: "sarah@company.com", tier: "Pro", status: "Active", joined: "Jan 12, 2026", avatar: "SJ", color: "#0d9488" },
  { name: "Alex Chen", email: "alex@startup.io", tier: "Enterprise", status: "Active", joined: "Feb 3, 2026", avatar: "AC", color: "#6366f1" },
  { name: "Maria Garcia", email: "maria@design.co", tier: "Starter", status: "Active", joined: "Mar 18, 2026", avatar: "MG", color: "#f59e0b" },
  { name: "James Wilson", email: "james@dev.org", tier: "Pro", status: "Trial", joined: "Jun 5, 2026", avatar: "JW", color: "#10b981" },
  { name: "Emily Davis", email: "emily@media.com", tier: "Enterprise", status: "Active", joined: "Apr 22, 2026", avatar: "ED", color: "#ec4899" },
  { name: "David Kim", email: "david@tech.io", tier: "Pro", status: "Active", joined: "May 14, 2026", avatar: "DK", color: "#8b5cf6" },
  { name: "Lisa Park", email: "lisa@agency.com", tier: "Starter", status: "Active", joined: "Jun 1, 2026", avatar: "LP", color: "#0d9488" },
  { name: "Tom Brown", email: "tom@consulting.co", tier: "Pro", status: "Expired", joined: "Dec 8, 2025", avatar: "TB", color: "#ef4444" },
  { name: "Nina Patel", email: "nina@nonprofit.org", tier: "Enterprise", status: "Active", joined: "Mar 28, 2026", avatar: "NP", color: "#6366f1" },
  { name: "Ryan Moore", email: "ryan@studio.io", tier: "Starter", status: "Trial", joined: "Jul 10, 2026", avatar: "RM", color: "#f59e0b" },
];

export default function MembersPage() {
  return (
    <ProtectedRoute>
      <section style={{ padding: "2rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800 }}>Members</h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>2,847 total members</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-outline" style={{ padding: "8px 16px", fontSize: 12 }}>
              <IconMail size={14} /> Email All
            </button>
            <button className="btn-primary" style={{ padding: "8px 16px", fontSize: 12 }}>
              <IconPlus size={14} /> Add Member
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "1rem 1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, background: "rgba(17,24,39,0.6)", border: "1px solid var(--border)", fontSize: 13, color: "var(--muted)", minWidth: 220 }}>
                <IconSearch size={14} /> Search members...
              </div>
              <button style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid var(--border)", background: "rgba(17,24,39,0.6)", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--muted)" }}>
                <IconFilter size={14} /> Filter
              </button>
            </div>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>Showing 10 of 2,847</span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Member", "Tier", "Status", "Joined", ""].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {members.map(m => (
                  <tr key={m.email} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, display: "grid", placeItems: "center", background: `${m.color}20`, color: m.color, fontSize: 12, fontWeight: 700 }}>
                          {m.avatar}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{m.name}</div>
                          <div style={{ fontSize: 11, color: "var(--muted)" }}>{m.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{
                        padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                        background: m.tier === "Enterprise" ? "rgba(99,102,241,0.15)" : m.tier === "Pro" ? "rgba(13,148,136,0.15)" : "rgba(107,114,128,0.15)",
                        color: m.tier === "Enterprise" ? "#818cf8" : m.tier === "Pro" ? "#14b8a6" : "#9ca3af",
                      }}>
                        {m.tier}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: m.status === "Active" ? "#10b981" : m.status === "Trial" ? "#f59e0b" : "#ef4444" }} />
                        {m.status}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: "var(--muted)" }}>{m.joined}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <IconDotsVertical size={16} color="#6b7280" style={{ cursor: "pointer" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
