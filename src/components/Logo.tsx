export default function Logo({ size = 40 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.46;
  const hex = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="hexGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      {/* Hexagon outline */}
      <polygon points={hex} fill="url(#hexGrad)" opacity="0.12" />
      <polygon points={hex} fill="none" stroke="url(#hexGrad)" strokeWidth={s * 0.04} strokeLinejoin="round" />
      {/* Center person */}
      <circle cx={cx} cy={cy * 0.72} r={s * 0.09} fill="url(#hexGrad2)" />
      <path d={`M${cx - s * 0.15},${cy * 1.22} Q${cx - s * 0.15},${cy * 0.92} ${cx},${cy * 0.92} Q${cx + s * 0.15},${cy * 0.92} ${cx + s * 0.15},${cy * 1.22}`} stroke="url(#hexGrad2)" strokeWidth={s * 0.045} strokeLinecap="round" fill="none" />
      {/* Left person */}
      <circle cx={cx - s * 0.22} cy={cy * 0.82} r={s * 0.065} fill="url(#hexGrad)" opacity="0.6" />
      <path d={`M${cx - s * 0.33},${cy * 1.12} Q${cx - s * 0.33},${cy * 0.92} ${cx - s * 0.22},${cy * 0.92}`} stroke="url(#hexGrad)" strokeWidth={s * 0.04} strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right person */}
      <circle cx={cx + s * 0.22} cy={cy * 0.82} r={s * 0.065} fill="url(#hexGrad)" opacity="0.6" />
      <path d={`M${cx + s * 0.33},${cy * 1.12} Q${cx + s * 0.33},${cy * 0.92} ${cx + s * 0.22},${cy * 0.92}`} stroke="url(#hexGrad)" strokeWidth={s * 0.04} strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Connection nodes */}
      <circle cx={cx - s * 0.1} cy={cy * 1.35} r={s * 0.03} fill="#0d9488" opacity="0.5" />
      <circle cx={cx} cy={cy * 1.42} r={s * 0.04} fill="url(#hexGrad2)" />
      <circle cx={cx + s * 0.1} cy={cy * 1.35} r={s * 0.03} fill="#6366f1" opacity="0.5" />
      <line x1={cx - s * 0.07} y1={cy * 1.35} x2={cx - s * 0.03} y2={cy * 1.4} stroke="url(#hexGrad)" strokeWidth={s * 0.02} opacity="0.4" />
      <line x1={cx + s * 0.03} y1={cy * 1.4} x2={cx + s * 0.07} y2={cy * 1.35} stroke="url(#hexGrad)" strokeWidth={s * 0.02} opacity="0.4" />
    </svg>
  );
}
