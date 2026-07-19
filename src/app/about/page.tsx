"use client";

import { IconShieldCheck, IconUsers, IconCreditCard, IconBrandOpenai, IconHeart } from "@tabler/icons-react";
import Logo from "@/components/Logo";

export default function AboutPage() {
  return (
    <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <Logo size={64} />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>About <span className="gradient-text">MemberHub</span></h1>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
          MemberHub is an all-in-one membership management platform built for modern organizations.
          We help you manage members, subscriptions, gated content, and community — all in one place.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
        {[
          { icon: IconUsers, title: "Built for Communities", desc: "From small clubs to large associations, MemberHub scales with your organization." },
          { icon: IconCreditCard, title: "Zero Platform Fees", desc: "Unlike other platforms, we don't take a cut of your revenue. You keep 100%." },
          { icon: IconBrandOpenai, title: "AI-Powered", desc: "Smart insights help you reduce churn, increase engagement, and grow faster." },
          { icon: IconHeart, title: "By SolvateX", desc: "Built by a team passionate about empowering organizations with great software." },
        ].map(item => (
          <div key={item.title} className="card" style={{ padding: "1.5rem" }}>
            <item.icon size={24} color="#0d9488" style={{ marginBottom: 12 }} />
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: "2rem", textAlign: "center", background: "linear-gradient(135deg, rgba(13,148,136,0.06), rgba(99,102,241,0.06))" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Contact Us</h2>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          Have questions? Reach out at <a href="mailto:contact@solvatex.com" style={{ color: "#0d9488", fontWeight: 600 }}>contact@solvatex.com</a>
        </p>
      </div>
    </section>
  );
}
