"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  IconUsers, IconCreditCard, IconLock, IconBrandOpenai,
  IconDeviceMobile, IconChartBar, IconMail, IconCalendar,
  IconCloudUpload, IconApi, IconShieldCheck, IconMessages,
  IconArrowRight, IconTrendingUp, IconUserPlus,
  IconSearch, IconFilter, IconDotsVertical,
} from "@tabler/icons-react";

const members = [
  { name: "Sarah Johnson", email: "sarah@company.com", tier: "Pro", status: "Active", joined: "Jan 12, 2026", avatar: "SJ", color: "#0d9488" },
  { name: "Alex Chen", email: "alex@startup.io", tier: "Enterprise", status: "Active", joined: "Feb 3, 2026", avatar: "AC", color: "#6366f1" },
  { name: "Maria Garcia", email: "maria@design.co", tier: "Starter", status: "Active", joined: "Mar 18, 2026", avatar: "MG", color: "#f59e0b" },
  { name: "James Wilson", email: "james@dev.org", tier: "Pro", status: "Trial", joined: "Jun 5, 2026", avatar: "JW", color: "#10b981" },
  { name: "Emily Davis", email: "emily@media.com", tier: "Enterprise", status: "Active", joined: "Apr 22, 2026", avatar: "ED", color: "#ec4899" },
  { name: "David Kim", email: "david@tech.io", tier: "Pro", status: "Active", joined: "May 14, 2026", avatar: "DK", color: "#8b5cf6" },
];

const stats = [
  { icon: IconUsers, label: "Total Members", value: "2,847", change: "+12.5%", color: "#0d9488" },
  { icon: IconCreditCard, label: "Monthly Revenue", value: "$24,580", change: "+8.3%", color: "#6366f1" },
  { icon: IconTrendingUp, label: "Growth Rate", value: "23%", change: "+4.1%", color: "#10b981" },
  { icon: IconChartBar, label: "Engagement", value: "78%", change: "+5.2%", color: "#f59e0b" },
];

const activity = [
  { text: "Sarah Johnson upgraded to Pro Plan", time: "2 min ago", color: "#6366f1" },
  { text: "New member: alex@startup.io", time: "15 min ago", color: "#10b981" },
  { text: "Payment received — $149.00", time: "1 hour ago", color: "#0d9488" },
  { text: "Content published: \"API Documentation\"", time: "2 hours ago", color: "#f59e0b" },
  { text: "Member renewed: Enterprise Plan", time: "3 hours ago", color: "#8b5cf6" },
];

const features = [
  { icon: IconUsers, title: "Member Management", desc: "Profiles, tiers, tags, custom fields, CSV import/export" },
  { icon: IconCreditCard, title: "Subscription Billing", desc: "Stripe & PayPal, trials, auto-renewals, invoices" },
  { icon: IconLock, title: "Content Gating", desc: "Gate by tier, drip scheduling, file protection" },
  { icon: IconBrandOpenai, title: "AI Insights", desc: "Churn prediction, engagement scoring, recommendations" },
  { icon: IconDeviceMobile, title: "PWA Ready", desc: "Installable, offline-capable, push notifications" },
  { icon: IconMail, title: "Email Automation", desc: "Welcome sequences, renewals, targeted campaigns" },
  { icon: IconCalendar, title: "Events", desc: "Members-only events, RSVP, calendar sync" },
  { icon: IconMessages, title: "Community", desc: "Forums, discussions, member-only spaces" },
  { icon: IconChartBar, title: "Analytics", desc: "MRR, churn, LTV, real-time dashboards" },
  { icon: IconCloudUpload, title: "Media Library", desc: "S3 storage, CDN delivery, gated downloads" },
  { icon: IconApi, title: "API & Webhooks", desc: "REST API, Zapier/Make integrations" },
  { icon: IconShieldCheck, title: "SSO & OAuth", desc: "Google, GitHub, SAML, role-based access" },
];

function AdminDashboard() {
  return (
    <main style={{ overflow: "hidden" }}>
      <section style={{ padding: "2rem 1.5rem 1rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800 }}>Dashboard</h1>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Welcome back, Admin</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-outline" style={{ padding: "8px 16px", fontSize: 12 }}>
              <IconCalendar size={14} /> Last 30 days
            </button>
            <Link href="/members" className="btn-primary" style={{ padding: "8px 16px", fontSize: 12 }}>
              <IconUserPlus size={14} /> Add Member
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
          {stats.map(s => (
            <div key={s.label} className="card" style={{ padding: "1.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, display: "grid", placeItems: "center", background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                  <s.icon size={18} color={s.color} />
                </div>
                <span style={{ fontSize: 11, color: "#10b981", fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
                  <IconTrendingUp size={12} /> {s.change}
                </span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 800 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, marginBottom: 20 }}>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.2rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700 }}>Members</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: "rgba(17,24,39,0.6)", border: "1px solid var(--border)", fontSize: 12, color: "var(--muted)" }}>
                  <IconSearch size={13} /> Search members...
                </div>
                <button style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid var(--border)", background: "rgba(17,24,39,0.6)" }}>
                  <IconFilter size={14} color="#6b7280" />
                </button>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["Member", "Tier", "Status", "Joined", ""].map(h => (
                      <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {members.map(m => (
                    <tr key={m.email} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "10px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, display: "grid", placeItems: "center", background: `${m.color}20`, color: m.color, fontSize: 11, fontWeight: 700 }}>{m.avatar}</div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{m.name}</div>
                            <div style={{ fontSize: 11, color: "var(--muted)" }}>{m.email}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, background: m.tier === "Enterprise" ? "rgba(99,102,241,0.15)" : m.tier === "Pro" ? "rgba(13,148,136,0.15)" : "rgba(107,114,128,0.15)", color: m.tier === "Enterprise" ? "#818cf8" : m.tier === "Pro" ? "#14b8a6" : "#9ca3af" }}>{m.tier}</span>
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.status === "Active" ? "#10b981" : "#f59e0b" }} />{m.status}
                        </span>
                      </td>
                      <td style={{ padding: "10px 16px", fontSize: 12, color: "var(--muted)" }}>{m.joined}</td>
                      <td style={{ padding: "10px 16px" }}><IconDotsVertical size={16} color="#6b7280" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.2rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700 }}>Recent Activity</h2>
            </div>
            <div style={{ padding: "0.5rem 0" }}>
              {activity.map((a, i) => (
                <div key={i} style={{ padding: "10px 1.2rem", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.color, marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.5 }}>{a.text}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1rem 1.2rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Revenue (6 months)</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80 }}>
                {[45, 52, 48, 65, 72, 84].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "4px 4px 0 0", background: i === 5 ? "linear-gradient(180deg, #0d9488, #6366f1)" : "rgba(13,148,136,0.2)" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 10, color: "var(--muted)" }}>
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 1.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Platform Capabilities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {features.map(f => (
            <div key={f.title} className="card" style={{ padding: "1.2rem", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: "grid", placeItems: "center", background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", flexShrink: 0 }}>
                <f.icon size={18} color="#0d9488" />
              </div>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{f.title}</h3>
                <p style={{ fontSize: 11.5, color: "var(--muted)", lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function GuestLanding() {
  return (
    <main style={{ overflow: "hidden" }}>
      <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "6px 18px", borderRadius: 20,
          background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.25)",
          fontSize: 12, fontWeight: 600, color: "#0d9488", marginBottom: 20,
        }}>
          Membership Management, Reimagined
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
          The <span className="gradient-text">all-in-one platform</span> to manage
          <br />members, subscriptions & content
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
          MemberHub combines member management, subscription billing, content gating,
          AI-powered insights, and community tools — so you can focus on growing your organization.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signin?tab=register" className="btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
            Start Free Trial <IconArrowRight size={18} />
          </Link>
          <Link href="/pricing" className="btn-outline" style={{ padding: "14px 32px", fontSize: 15 }}>
            See Pricing
          </Link>
        </div>
      </section>

      <section style={{ padding: "2rem 1.5rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>
            Everything you need to <span className="gradient-text">run memberships</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
          {features.map(f => (
            <div key={f.title} className="card" style={{ padding: "1.4rem", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", flexShrink: 0 }}>
                <f.icon size={20} color="#0d9488" />
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "2rem 1.5rem 4rem", textAlign: "center" }}>
        <div className="card" style={{
          maxWidth: 600, margin: "0 auto", padding: "2.5rem 2rem",
          background: "linear-gradient(135deg, rgba(13, 148, 136, 0.08), rgba(99, 102, 241, 0.08))",
          border: "1px solid rgba(13, 148, 136, 0.2)",
        }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Ready to get started?</h2>
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20 }}>14-day free trial. No credit card required.</p>
          <Link href="/signin?tab=register" className="btn-primary" style={{ padding: "12px 28px", fontSize: 14 }}>
            Start Free Trial <IconArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return <AdminDashboard />;
}
