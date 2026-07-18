export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      {/* Rounded shield shape */}
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#logoGrad)" opacity="0.12" />
      <rect x="4" y="4" width="56" height="56" rx="16" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
      {/* Center person */}
      <circle cx="32" cy="22" r="6" fill="url(#logoGrad2)" />
      <path d="M22 40c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="url(#logoGrad2)" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left person (smaller) */}
      <circle cx="18" cy="26" r="4" fill="url(#logoGrad)" opacity="0.6" />
      <path d="M11 38c0-3.866 3.134-7 7-7" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right person (smaller) */}
      <circle cx="46" cy="26" r="4" fill="url(#logoGrad)" opacity="0.6" />
      <path d="M53 38c0-3.866-3.134-7-7-7" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Connection dots */}
      <circle cx="25" cy="45" r="2" fill="#0d9488" opacity="0.5" />
      <circle cx="32" cy="48" r="2.5" fill="url(#logoGrad2)" />
      <circle cx="39" cy="45" r="2" fill="#6366f1" opacity="0.5" />
      {/* Lines connecting dots */}
      <line x1="27" y1="45" x2="30" y2="47" stroke="url(#logoGrad)" strokeWidth="1.5" opacity="0.4" />
      <line x1="34" y1="47" x2="37" y2="45" stroke="url(#logoGrad)" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}
