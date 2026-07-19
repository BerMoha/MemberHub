"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { IconSettings, IconBell, IconPalette, IconShieldCheck, IconCreditCard, IconMail } from "@tabler/icons-react";

export default function SettingsPage() {
  const [orgName, setOrgName] = useState("MemberHub Demo");
  const [saved, setSaved] = useState(false);

  return (
    <ProtectedRoute>
      <section style={{ padding: "2rem 1.5rem", maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24 }}>Settings</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* General */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <IconSettings size={20} color="#0d9488" />
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>General</h2>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, display: "block" }}>Organization Name</label>
              <input className="input" value={orgName} onChange={e => { setOrgName(e.target.value); setSaved(false); }} />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, display: "block" }}>Domain</label>
              <input className="input" value="memberhub.solvatex.com" readOnly style={{ opacity: 0.6 }} />
            </div>
            <button className="btn-primary" onClick={() => setSaved(true)} style={{ padding: "10px 20px", fontSize: 13 }}>
              {saved ? "Saved!" : "Save Changes"}
            </button>
          </div>

          {/* Notifications */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <IconBell size={20} color="#6366f1" />
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>Notifications</h2>
            </div>
            {["New member signups", "Subscription renewals", "Failed payments", "Content engagement alerts"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontSize: 13 }}>{item}</span>
                <div style={{ width: 40, height: 22, borderRadius: 11, background: "linear-gradient(135deg, #0d9488, #6366f1)", padding: 2, cursor: "pointer" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", transform: "translateX(18px)" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <IconCreditCard size={20} color="#f59e0b" />
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>Integrations</h2>
            </div>
            {[
              { name: "Stripe", status: "Connected", color: "#10b981" },
              { name: "PayPal", status: "Connected", color: "#10b981" },
              { name: "OpenAI", status: "Connected", color: "#10b981" },
              { name: "Zapier", status: "Not connected", color: "#6b7280" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{item.name}</span>
                <span style={{ fontSize: 12, color: item.color, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.color }} />
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
