"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheck, IconStar, IconRocket, IconCrown, IconDiamond, IconArrowRight } from "@tabler/icons-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small communities",
    icon: IconRocket,
    price: "$49",
    period: "/month",
    features: [
      { text: "Up to 500 members", star: false },
      { text: "Member directory & profiles", star: false },
      { text: "2 membership tiers", star: false },
      { text: "Stripe payments", star: false },
      { text: "Basic content gating", star: false },
      { text: "Email notifications", star: false },
      { text: "Community support", star: false },
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    tagline: "For growing organizations",
    icon: IconCrown,
    price: "$149",
    period: "/month",
    features: [
      { text: "Up to 5,000 members", star: false },
      { text: "Everything in Starter", star: false },
      { text: "Unlimited membership tiers", star: false },
      { text: "Stripe + PayPal", star: false },
      { text: "Advanced content gating & drip", star: false },
      { text: "Email automation sequences", star: true },
      { text: "Community forums", star: true },
      { text: "Analytics dashboard", star: false },
      { text: "API access", star: false },
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For large-scale platforms",
    icon: IconDiamond,
    price: "$399",
    period: "/month",
    features: [
      { text: "Unlimited members", star: false },
      { text: "Everything in Professional", star: false },
      { text: "SSO / SAML authentication", star: true },
      { text: "AI-powered insights", star: true },
      { text: "Custom integrations & webhooks", star: false },
      { text: "White-label branding", star: true },
      { text: "Dedicated account manager", star: true },
      { text: "99.9% uptime SLA", star: false },
      { text: "Priority support", star: false },
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>
          Simple, transparent <span className="gradient-text">pricing</span>
        </h1>
        <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
          Start free for 14 days. No credit card required. Upgrade as you grow.
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 20, alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: !annual ? "#0d9488" : "var(--muted)", fontWeight: 600 }}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} style={{
            width: 48, height: 26, borderRadius: 13, padding: 3,
            background: annual ? "linear-gradient(135deg, #0d9488, #6366f1)" : "rgba(31,41,55,0.7)",
            display: "flex", alignItems: "center", transition: "background 0.2s",
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%", background: "#fff",
              transform: annual ? "translateX(22px)" : "translateX(0)", transition: "transform 0.2s",
            }} />
          </button>
          <span style={{ fontSize: 13, color: annual ? "#0d9488" : "var(--muted)", fontWeight: 600 }}>
            Annual <span style={{ fontSize: 11, color: "#10b981" }}>(Save 20%)</span>
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {plans.map(plan => {
          const priceNum = parseInt(plan.price.replace("$", ""));
          const displayPrice = annual ? `$${Math.round(priceNum * 0.8)}` : plan.price;

          return (
            <div key={plan.name} className="card" style={{
              padding: "2rem",
              border: plan.highlighted ? "2px solid #0d9488" : undefined,
              boxShadow: plan.highlighted ? "0 4px 28px rgba(13, 148, 136, 0.18)" : undefined,
              position: "relative", display: "flex", flexDirection: "column",
            }}>
              {plan.highlighted && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  padding: "4px 18px", background: "linear-gradient(135deg, #0d9488, #6366f1)",
                  borderRadius: 20, fontSize: 11, fontWeight: 700, color: "#fff",
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center",
                  background: "rgba(13, 148, 136, 0.1)", border: "1px solid rgba(13, 148, 136, 0.2)",
                }}>
                  <plan.icon size={20} color={plan.highlighted ? "#0d9488" : plan.name === "Enterprise" ? "#f59e0b" : "#6366f1"} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>{plan.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{plan.tagline}</div>
                </div>
              </div>

              <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: 38, fontWeight: 800 }}>{displayPrice}</span>
                <span style={{ fontSize: 14, color: "var(--muted)" }}>{plan.period}</span>
                {annual && <div style={{ fontSize: 11, color: "#10b981", marginTop: 4 }}>Billed annually</div>}
              </div>

              <div style={{ flex: 1 }}>
                {plan.features.map(f => (
                  <div key={f.text} style={{ fontSize: 13, color: "#d1d5db", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 9, lineHeight: 1.5 }}>
                    {f.star ? <IconStar size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} /> : <IconCheck size={14} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />}
                    {f.text}
                  </div>
                ))}
              </div>

              <Link href="/memberhub/signin?tab=register" style={{
                marginTop: 20, padding: 14, borderRadius: 11, fontSize: 13, fontWeight: 700,
                textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: plan.highlighted ? "linear-gradient(135deg, #0d9488, #6366f1)" : "transparent",
                color: plan.highlighted ? "#fff" : "#0d9488",
                border: plan.highlighted ? "none" : "1.5px solid rgba(13, 148, 136, 0.4)",
              }}>
                Start Free Trial <IconArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "var(--muted)" }}>
        All plans include a 14-day free trial. Cancel anytime.
      </div>
    </section>
  );
}
