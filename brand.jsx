// Damarcus Taxi — brand tokens + shared primitives
// All screens use these. Bold & modern, warm-black + amber, Tallahassee local.

const DAM = {
  // Surfaces
  ink:      '#0E0E10',   // primary dark
  ink2:     '#1A1A1D',   // raised dark surface
  ink3:     '#26262A',   // borders on dark
  paper:    '#F5F1EA',   // warm off-white
  paper2:   '#EAE4D8',   // subtle warm gray
  line:     'rgba(14,14,16,0.10)',
  mute:     'rgba(14,14,16,0.55)',
  muteDark: 'rgba(245,241,234,0.55)',
  // Accents
  amber:    '#FFB400',   // signature — warmer than DOT yellow
  amberDk:  '#E29A00',
  garnet:   '#7A1F2B',   // Tallahassee nod (used sparingly)
  green:    '#3B7A57',   // route line / positive
  red:      '#D14B3C',   // cancel / SOS
  // Type
  display: '"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif',
  ui:      '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
  mono:    '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
};

// ── Icons (stroked, chunky) ─────────────────────────────────────────
const Icon = ({ d, size = 22, stroke = 'currentColor', fill = 'none', sw = 2, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

const Icons = {
  pin:      <><path d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
  dot:      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>,
  clock:    <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  arrow:    <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  back:     <><path d="M19 12H5M11 18l-6-6 6-6"/></>,
  chev:     <path d="M9 6l6 6-6 6"/>,
  chevDown: <path d="M6 9l6 6 6-6"/>,
  x:        <><path d="M6 6l12 12M18 6L6 18"/></>,
  plus:     <><path d="M12 5v14M5 12h14"/></>,
  minus:    <path d="M5 12h14"/>,
  phone:    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0122 16.9z"/>,
  msg:      <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>,
  home:     <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
  car:      <><path d="M5 17h14M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/></>,
  bag:      <><path d="M4 8h16v12H4z"/><path d="M9 8V5a3 3 0 016 0v3"/></>,
  clockAlt: <><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></>,
  user:     <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></>,
  users:    <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c1-3 3-5 6-5s5 2 6 5"/><path d="M15 20c0-2 1-4 3-4s3 2 3 4"/></>,
  wallet:   <><path d="M3 7h15a2 2 0 012 2v9a2 2 0 01-2 2H3z"/><path d="M3 7V5a2 2 0 012-2h11l2 4"/><circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none"/></>,
  star:     <path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z"/>,
  starF:    <path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z" fill="currentColor"/>,
  share:    <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></>,
  clip:     <><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 4V3h6v1"/></>,
  route:    <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 8v4a4 4 0 004 4h4a4 4 0 014 4"/></>,
  cal:      <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>,
  hist:     <><path d="M3 12a9 9 0 109-9"/><path d="M3 4v5h5"/><path d="M12 8v4l3 2"/></>,
  set:      <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.3l-.1.1A2 2 0 114 16.9l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1A2 2 0 117 4.2l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></>,
  bell:     <><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></>,
  shield:   <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/>,
  search:   <><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></>,
  mic:      <><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M6 11a6 6 0 0012 0M12 17v4"/></>,
  navi:     <><polygon points="12 3 20 21 12 17 4 21 12 3"/></>,
  power:    <><path d="M12 3v10"/><path d="M5.6 7.6a9 9 0 1012.8 0"/></>,
  dollar:   <><path d="M12 2v20"/><path d="M17 6H9.5A3.5 3.5 0 006 9.5v0A3.5 3.5 0 009.5 13h5a3.5 3.5 0 013.5 3.5v0A3.5 3.5 0 0114.5 20H7"/></>,
  filter:   <><path d="M3 5h18M6 12h12M10 19h4"/></>,
  check:    <path d="M4 12l5 5L20 6"/>,
  wifi:     <><path d="M5 12a10 10 0 0114 0"/><path d="M8.5 15.5a5 5 0 017 0"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></>,
  sos:      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/>,
};

// ── Amber "checker" corner detail — signature graphic ──────────────
function CheckerCorner({ size = 40, dark = false, style = {} }) {
  const c = dark ? DAM.amber : DAM.ink;
  const b = dark ? 'transparent' : 'transparent';
  const cells = [];
  const n = 4;
  const s = size / n;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    if ((x + y) % 2 === 0) cells.push(
      <rect key={`${x}-${y}`} x={x*s} y={y*s} width={s} height={s} fill={c}/>
    );
  }
  return <svg width={size} height={size} style={style}>{cells}</svg>;
}

// ── Map SVG (dark, muted, high-contrast amber route) ──────────────
function MapCanvas({ w = 390, h = 500, showRoute = true, driverAt = 0.35, style = {} }) {
  // dark map background with abstract street grid
  const streets = [];
  const rnd = (seed) => { let x = Math.sin(seed) * 10000; return x - Math.floor(x); };
  // main horizontal streets
  for (let i = 0; i < 8; i++) {
    const y = 50 + i * ((h - 80) / 8) + (rnd(i) - 0.5) * 20;
    streets.push(<line key={`h${i}`} x1={-20} y1={y} x2={w+20} y2={y+ (rnd(i+9)-0.5)*30}
      stroke="#2A2A2E" strokeWidth={i % 3 === 0 ? 2 : 1}/>);
  }
  for (let i = 0; i < 10; i++) {
    const x = 20 + i * ((w - 40) / 10) + (rnd(i+30) - 0.5) * 20;
    streets.push(<line key={`v${i}`} x1={x} y1={-20} x2={x+(rnd(i+40)-0.5)*30} y2={h+20}
      stroke="#2A2A2E" strokeWidth={i % 4 === 0 ? 2 : 1}/>);
  }
  // couple of diagonals for character
  streets.push(<line key="d1" x1={0} y1={h*0.7} x2={w} y2={h*0.3} stroke="#2A2A2E" strokeWidth={2}/>);
  streets.push(<line key="d2" x1={0} y1={h*0.2} x2={w*0.6} y2={h} stroke="#252528" strokeWidth={1.5}/>);

  // river / park blobs
  const water = `M-20 ${h*0.55} C ${w*0.2} ${h*0.5}, ${w*0.4} ${h*0.75}, ${w*0.7} ${h*0.65} S ${w+20} ${h*0.6}, ${w+20} ${h*0.7} L ${w+20} ${h+20} L -20 ${h+20} Z`;
  const park  = `M ${w*0.6} ${h*0.15} C ${w*0.75} ${h*0.1}, ${w*0.9} ${h*0.2}, ${w*0.85} ${h*0.32} S ${w*0.6} ${h*0.38}, ${w*0.55} ${h*0.28} Z`;

  // route path
  const rx1 = w*0.15, ry1 = h*0.85;
  const rx2 = w*0.78, ry2 = h*0.22;
  const routeD = `M ${rx1} ${ry1} C ${w*0.3} ${h*0.7}, ${w*0.35} ${h*0.55}, ${w*0.5} ${h*0.5} S ${w*0.75} ${h*0.35}, ${rx2} ${ry2}`;

  // driver marker interpolated along route (rough)
  const dt = driverAt;
  const dxm = rx1 + (rx2 - rx1) * dt;
  const dym = ry1 + (ry2 - ry1) * dt + Math.sin(dt * Math.PI) * -30;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ display: 'block', ...style }}>
      <rect width={w} height={h} fill="#141417"/>
      {/* park */}
      <path d={park} fill="#1B2A1E"/>
      {/* water */}
      <path d={water} fill="#0F1B26"/>
      {/* streets */}
      {streets}
      {/* highway */}
      <path d={`M ${w*0.05} ${h*0.9} Q ${w*0.4} ${h*0.6} ${w*0.95} ${h*0.15}`}
        stroke="#3A3A3F" strokeWidth={4} fill="none"/>
      {/* labels */}
      <text x={w*0.12} y={h*0.4} fill="#3F3F44" fontFamily={DAM.mono} fontSize={9}>MIDTOWN</text>
      <text x={w*0.62} y={h*0.55} fill="#3F3F44" fontFamily={DAM.mono} fontSize={9}>CASCADES</text>
      <text x={w*0.35} y={h*0.72} fill="#3F3F44" fontFamily={DAM.mono} fontSize={9}>FSU</text>
      <text x={w*0.7} y={h*0.85} fill="#294055" fontFamily={DAM.mono} fontSize={9}>ST. MARKS TRAIL</text>

      {showRoute && <>
        {/* route shadow */}
        <path d={routeD} stroke="rgba(0,0,0,0.5)" strokeWidth={7} fill="none" strokeLinecap="round"/>
        {/* route */}
        <path d={routeD} stroke={DAM.amber} strokeWidth={5} fill="none" strokeLinecap="round"/>
        {/* pickup */}
        <g transform={`translate(${rx1} ${ry1})`}>
          <circle r={10} fill="#fff"/>
          <circle r={5} fill={DAM.ink}/>
        </g>
        {/* destination */}
        <g transform={`translate(${rx2} ${ry2})`}>
          <rect x={-7} y={-7} width={14} height={14} fill={DAM.ink} stroke="#fff" strokeWidth={2}/>
          <rect x={-5} y={-5} width={5} height={5} fill={DAM.amber}/>
          <rect x={0}  y={0}  width={5} height={5} fill={DAM.amber}/>
        </g>
        {/* driver marker */}
        <g transform={`translate(${dxm} ${dym})`}>
          <circle r={18} fill={DAM.amber} opacity="0.25"/>
          <circle r={12} fill={DAM.amber}/>
          <path d="M -6 2 L 0 -6 L 6 2 Z" fill={DAM.ink}/>
        </g>
      </>}
    </svg>
  );
}

// ── Reusable UI ────────────────────────────────────────────────────
function Pill({ children, dark = false, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 999,
      fontFamily: DAM.mono, fontSize: 10, letterSpacing: 0.5, textTransform: 'uppercase',
      background: dark ? 'rgba(255,180,0,0.15)' : DAM.ink, color: dark ? DAM.amber : DAM.paper,
      ...style,
    }}>{children}</span>
  );
}

function PrimaryButton({ children, dark = false, style = {}, dense = false }) {
  return (
    <button style={{
      appearance: 'none', border: 'none', cursor: 'pointer', width: '100%',
      height: dense ? 52 : 60, borderRadius: 16,
      background: DAM.amber, color: DAM.ink,
      fontFamily: DAM.display, fontWeight: 800, fontSize: 18, letterSpacing: 0.2,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      boxShadow: '0 6px 0 rgba(226,154,0,0.9), 0 12px 30px rgba(255,180,0,0.35)',
      ...style,
    }}>{children}</button>
  );
}

// Signature "Damarcus" wordmark
function Wordmark({ size = 22, dark = false }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: DAM.display, fontWeight: 900, fontSize: size, letterSpacing: -0.5,
      color: dark ? DAM.paper : DAM.ink,
    }}>
      <div style={{
        width: size, height: size, borderRadius: 6, background: DAM.amber,
        display: 'grid', placeItems: 'center', color: DAM.ink, fontSize: size * 0.62,
      }}>D</div>
      DAMARCUS
    </div>
  );
}

Object.assign(window, { DAM, Icon, Icons, CheckerCorner, MapCanvas, Pill, PrimaryButton, Wordmark });
