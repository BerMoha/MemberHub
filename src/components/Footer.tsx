import Link from "next/link";
import { IconShieldCheck } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)", padding: "2.5rem 1.5rem",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <IconShieldCheck size={22} color="#0d9488" />
        <span style={{ fontWeight: 700, fontSize: 16 }} className="gradient-text">MemberHub</span>
      </div>
      <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#6b7280" }}>
        <Link href="/memberhub/about" style={{ color: "#6b7280" }}>About</Link>
        <Link href="/memberhub/privacy" style={{ color: "#6b7280" }}>Privacy</Link>
        <Link href="/memberhub/terms" style={{ color: "#6b7280" }}>Terms</Link>
      </div>
      <p style={{ fontSize: 12, color: "#4b5563" }}>
        &copy; {new Date().getFullYear()} MemberHub by SolvateX. All rights reserved.
      </p>
    </footer>
  );
}
