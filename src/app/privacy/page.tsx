export default function PrivacyPage() {
  return (
    <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Privacy Policy</h1>
      <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Last updated: July 19, 2026</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>1. Information We Collect</h2>
        <p style={{ marginBottom: 20 }}>
          We collect information you provide when creating an account (name, email, payment details) and usage data to improve our services. We do not sell your personal information to third parties.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>2. How We Use Your Data</h2>
        <p style={{ marginBottom: 20 }}>
          Your data is used to provide and improve MemberHub services, process payments, send transactional emails, and provide customer support. Analytics data is aggregated and anonymized.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>3. Data Security</h2>
        <p style={{ marginBottom: 20 }}>
          We use industry-standard encryption (TLS/SSL) for data in transit and AES-256 for data at rest. All payment processing is handled through PCI-compliant providers (Stripe, PayPal).
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>4. Your Rights</h2>
        <p style={{ marginBottom: 20 }}>
          You can access, update, or delete your personal data at any time from your profile settings. You may also request a full data export or account deletion by contacting us.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>5. Cookies</h2>
        <p style={{ marginBottom: 20 }}>
          We use essential cookies for authentication and session management. Analytics cookies are optional and can be disabled in your browser settings.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>6. Contact</h2>
        <p>
          For privacy-related inquiries, contact us at <a href="mailto:support@solvatex.com" style={{ color: "#0d9488", fontWeight: 600 }}>support@solvatex.com</a>.
        </p>
      </div>
    </section>
  );
}
