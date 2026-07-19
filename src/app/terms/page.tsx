export default function TermsPage() {
  return (
    <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Terms of Service</h1>
      <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
        <p style={{ marginBottom: 20 }}>Last updated: July 19, 2026</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: 20 }}>
          By accessing or using MemberHub, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>2. Account Responsibilities</h2>
        <p style={{ marginBottom: 20 }}>
          You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorized access. You must be at least 18 years old to create an account.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>3. Subscription & Billing</h2>
        <p style={{ marginBottom: 20 }}>
          Subscriptions are billed on a recurring basis (monthly or annually). You may cancel at any time; access continues until the end of the billing period. Refunds are handled on a case-by-case basis.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>4. Content & Intellectual Property</h2>
        <p style={{ marginBottom: 20 }}>
          You retain ownership of all content you upload. By using MemberHub, you grant us a limited license to host and display your content within the platform. We do not claim ownership of your data.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>5. Prohibited Use</h2>
        <p style={{ marginBottom: 20 }}>
          You may not use MemberHub for illegal activities, spam, harassment, or distributing malware. We reserve the right to suspend accounts that violate these terms.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>6. Limitation of Liability</h2>
        <p style={{ marginBottom: 20 }}>
          MemberHub is provided &quot;as is&quot; without warranties. We are not liable for indirect, incidental, or consequential damages arising from your use of the platform.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>7. Contact</h2>
        <p>
          For questions about these terms, contact us at <a href="mailto:legal@solvatex.com" style={{ color: "#0d9488", fontWeight: 600 }}>legal@solvatex.com</a>.
        </p>
      </div>
    </section>
  );
}
