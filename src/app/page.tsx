"use client";

import Link from "next/link";
import {
  IconUsers, IconCreditCard, IconLock, IconBrandOpenai,
  IconDeviceMobile, IconChartBar, IconMail, IconCalendar,
  IconShieldCheck, IconCloudUpload, IconApi, IconDatabase,
  IconBrandReact, IconBrandPython, IconArrowRight, IconCheck,
  IconUserPlus, IconKey, IconLayoutDashboard, IconMessages,
} from "@tabler/icons-react";

const features = [
  { icon: IconUsers, title: "Member Management", desc: "Complete directory with profiles, tiers, tags, and custom fields. Import/export with CSV." },
  { icon: IconCreditCard, title: "Subscription Billing", desc: "Recurring payments via Stripe & PayPal. Free trials, upgrades, cancellations — all automated." },
  { icon: IconLock, title: "Content Gating", desc: "Gate pages, files, and resources by membership tier. Drip content on schedule." },
  { icon: IconBrandOpenai, title: "AI-Powered Insights", desc: "Smart member analytics, churn prediction, and automated engagement recommendations." },
  { icon: IconDeviceMobile, title: "PWA Ready", desc: "Install as a native app on any device. Offline-capable with push notifications." },
  { icon: IconMail, title: "Email Automation", desc: "Welcome sequences, renewal reminders, and targeted campaigns. Built-in templates." },
  { icon: IconCalendar, title: "Event Management", desc: "Members-only events, RSVP tracking, calendar sync, and automated reminders." },
  { icon: IconMessages, title: "Community Forums", desc: "Discussion boards with moderation, member-only spaces, and real-time notifications." },
  { icon: IconChartBar, title: "Analytics Dashboard", desc: "MRR, churn rate, LTV, engagement metrics — real-time dashboards for data-driven decisions." },
  { icon: IconCloudUpload, title: "File & Media Library", desc: "Upload, organize, and gate digital assets. S3-backed storage with CDN delivery." },
  { icon: IconApi, title: "REST API & Webhooks", desc: "Full API access for integrations. Webhooks for Zapier, Make, and custom workflows." },
  { icon: IconShieldCheck, title: "SSO & OAuth", desc: "Google, GitHub, and SAML SSO. Role-based access control with admin, staff, and member roles." },
];

const stats = [
  { value: "50K+", label: "Members Managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 200ms", label: "API Response" },
  { value: "SOC 2", label: "Compliant" },
];

const techStack = [
  { icon: IconBrandPython, label: "FastAPI" },
  { icon: IconBrandReact, label: "Next.js" },
  { icon: IconDatabase, label: "PostgreSQL" },
  { icon: IconShieldCheck, label: "OAuth 2.0" },
];

const steps = [
  { icon: IconUserPlus, title: "1. Sign Up", desc: "Create your organization account in seconds" },
  { icon: IconLayoutDashboard, title: "2. Configure", desc: "Set up membership tiers, pricing, and content" },
  { icon: IconKey, title: "3. Invite Members", desc: "Import existing members or share your signup link" },
  { icon: IconChartBar, title: "4. Grow", desc: "Track engagement, reduce churn, increase revenue" },
];

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      {/* Hero */}
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
          <Link href="/#features" className="btn-outline" style={{ padding: "14px 32px", fontSize: 15 }}>
            See Features
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "2rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {stats.map(s => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
              <div style={{ fontSize: 28, fontWeight: 800 }} className="gradient-text">{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "4rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
            Everything you need to <span className="gradient-text">run memberships</span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 500, margin: "0 auto" }}>
            From sign-up to renewal, MemberHub handles the entire member lifecycle.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {features.map(f => (
            <div key={f.title} className="card" style={{ padding: "1.5rem" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center",
                background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)", marginBottom: 14,
              }}>
                <f.icon size={22} color="#0d9488" />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
            Get started in <span className="gradient-text">minutes</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {steps.map(s => (
            <div key={s.title} className="card" style={{ textAlign: "center", padding: "2rem 1.2rem" }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, display: "grid", placeItems: "center",
                background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.2)",
                margin: "0 auto 14px",
              }}>
                <s.icon size={24} color="#6366f1" />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: "4rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
            Built for <span className="gradient-text">every organization</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { title: "Professional Associations", items: ["Member directories", "Certification tracking", "Annual dues management", "Event registration"] },
            { title: "Online Communities", items: ["Tiered memberships", "Gated content library", "Discussion forums", "Drip content delivery"] },
            { title: "SaaS & Digital Products", items: ["Subscription management", "Usage-based billing", "API key provisioning", "Customer portals"] },
          ].map(u => (
            <div key={u.title} className="card" style={{ padding: "1.8rem" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>{u.title}</h3>
              {u.items.map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontSize: 13, color: "var(--muted)" }}>
                  <IconCheck size={15} color="#10b981" style={{ flexShrink: 0 }} /> {i}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: "3rem 1.5rem", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
          Powered by <span className="gradient-text">modern tech</span>
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {techStack.map(t => (
            <div key={t.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 10,
              background: "rgba(17, 24, 39, 0.6)", border: "1px solid var(--border)",
              fontSize: 13, fontWeight: 600, color: "var(--muted)",
            }}>
              <t.icon size={18} color="#0d9488" /> {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="card" style={{
          maxWidth: 700, margin: "0 auto", padding: "3rem 2rem",
          background: "linear-gradient(135deg, rgba(13, 148, 136, 0.08), rgba(99, 102, 241, 0.08))",
          border: "1px solid rgba(13, 148, 136, 0.2)",
        }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12 }}>
            Ready to <span className="gradient-text">transform</span> your memberships?
          </h2>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24, maxWidth: 450, margin: "0 auto 24px" }}>
            Join organizations already using MemberHub to grow and engage their communities.
          </p>
          <Link href="/signin?tab=register" className="btn-primary" style={{ padding: "14px 36px", fontSize: 15 }}>
            Start Your Free Trial <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
