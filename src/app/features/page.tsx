"use client";

import {
  IconUsers, IconCreditCard, IconLock, IconBrandOpenai,
  IconDeviceMobile, IconChartBar, IconMail, IconCalendar,
  IconCloudUpload, IconApi, IconShieldCheck, IconMessages,
  IconCheck,
} from "@tabler/icons-react";

const features = [
  { icon: IconUsers, title: "Member Management", desc: "Complete directory with profiles, tiers, tags, and custom fields. Import/export with CSV. Search, filter, and segment your members.", highlights: ["Unlimited custom fields", "Bulk import/export", "Advanced search & filters", "Member segmentation"] },
  { icon: IconCreditCard, title: "Subscription Billing", desc: "Recurring payments via Stripe & PayPal. Free trials, upgrades, downgrades, and cancellations — all automated.", highlights: ["Stripe + PayPal", "Free trials & coupons", "Auto-renewals", "Invoice generation"] },
  { icon: IconLock, title: "Content Gating", desc: "Gate pages, files, and resources by membership tier. Drip content on schedule to keep members engaged.", highlights: ["Gate by tier", "Drip scheduling", "File protection", "Preview snippets"] },
  { icon: IconBrandOpenai, title: "AI-Powered Insights", desc: "Smart member analytics, churn prediction, and automated engagement recommendations powered by OpenAI.", highlights: ["Churn prediction", "Engagement scoring", "Smart recommendations", "Automated reports"] },
  { icon: IconDeviceMobile, title: "PWA Ready", desc: "Install as a native app on any device. Offline-capable with push notifications for maximum engagement.", highlights: ["Installable on any device", "Offline support", "Push notifications", "App-like experience"] },
  { icon: IconMail, title: "Email Automation", desc: "Welcome sequences, renewal reminders, and targeted campaigns. Built-in templates for every occasion.", highlights: ["Welcome sequences", "Renewal reminders", "Targeted campaigns", "Built-in templates"] },
  { icon: IconCalendar, title: "Event Management", desc: "Members-only events, RSVP tracking, calendar sync, and automated reminders.", highlights: ["Members-only events", "RSVP tracking", "Calendar sync", "Automated reminders"] },
  { icon: IconMessages, title: "Community Forums", desc: "Discussion boards with moderation, member-only spaces, and real-time notifications.", highlights: ["Discussion boards", "Moderation tools", "Member-only spaces", "Real-time notifications"] },
  { icon: IconChartBar, title: "Analytics Dashboard", desc: "MRR, churn rate, LTV, engagement metrics — real-time dashboards for data-driven decisions.", highlights: ["MRR & revenue tracking", "Churn rate analysis", "Lifetime value (LTV)", "Engagement metrics"] },
  { icon: IconCloudUpload, title: "File & Media Library", desc: "Upload, organize, and gate digital assets. S3-backed storage with CDN delivery.", highlights: ["S3 cloud storage", "CDN delivery", "Gated downloads", "Organize by category"] },
  { icon: IconApi, title: "REST API & Webhooks", desc: "Full API access for integrations. Webhooks for Zapier, Make, and custom workflows.", highlights: ["Full REST API", "Webhook events", "Zapier / Make ready", "API key management"] },
  { icon: IconShieldCheck, title: "SSO & OAuth", desc: "Google, GitHub, and SAML SSO. Role-based access control with admin, staff, and member roles.", highlights: ["Google & GitHub OAuth", "SAML SSO", "Role-based access", "Admin / Staff / Member"] },
];

export default function FeaturesPage() {
  return (
    <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
          Platform <span className="gradient-text">Features</span>
        </h1>
        <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
          Everything you need to manage memberships, from sign-up to renewal.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {features.map(f => (
          <div key={f.title} className="card" style={{ padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center",
                background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)",
              }}>
                <f.icon size={22} color="#0d9488" />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14 }}>{f.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {f.highlights.map(h => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#d1d5db" }}>
                  <IconCheck size={13} color="#10b981" style={{ flexShrink: 0 }} /> {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
