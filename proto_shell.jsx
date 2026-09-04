// Damarcus Taxi — clickable prototype shell
// Router + phone frame + nav state + guide rail

// Use React.useState / React.useEffect etc directly — avoids top-level destructure
// that collides across babel-inline script tags.

// ── Router ─────────────────────────────────────────────────────────
const ROUTES = {}; // filled by screen files via registerRoute()
function registerRoute(name, Cmp) { ROUTES[name] = Cmp; }

const STORE_KEY = 'damarcus.proto.v1';

function useRouter(initial = 'welcome') {
  const [stack, setStack] = React.useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && Array.isArray(s.stack) && s.stack.length) return s.stack;
    } catch {}
    return [initial];
  });
  const [mode, setMode] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY))?.mode || 'passenger'; } catch { return 'passenger'; }
  });
  const [tab, setTab] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY))?.tab || 'ride'; } catch { return 'ride'; }
  });
  const [dir, setDir] = React.useState('fwd'); // for transitions

  React.useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify({ stack, mode, tab }));
  }, [stack, mode, tab]);

  const push = React.useCallback((name) => { setDir('fwd'); setStack(s => [...s, name]); }, []);
  const pop  = React.useCallback(() => { setDir('back'); setStack(s => s.length > 1 ? s.slice(0, -1) : s); }, []);
  const go   = React.useCallback((name) => { setDir('fwd'); setStack([name]); }, []);
  const reset= React.useCallback(() => {
    setDir('fwd'); setStack([mode === 'driver' ? 'driverHome' : 'welcome']);
  }, [mode]);
  const switchMode = React.useCallback((m) => {
    setMode(m); setDir('fwd');
    setStack([m === 'driver' ? 'driverHome' : 'home']);
    setTab(m === 'driver' ? 'drvhome' : 'ride');
  }, []);

  const current = stack[stack.length - 1];
  return { current, stack, mode, tab, dir, push, pop, go, reset, setTab, switchMode };
}

// ── Phone shell (chrome only — status bar + home indicator + island) ──
function PhoneFrame({ children, dark = false }) {
  return (
    <div style={{
      width: 390, height: 844, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.12), 0 0 0 8px #16161a, 0 0 0 9px #26262a',
      fontFamily: DAM.ui, WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 100,
      }} />
      {/* status bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 60 }}>
        <IOSStatusBar dark={dark} />
      </div>
      {/* content */}
      <div style={{ height: '100%', position: 'relative' }}>{children}</div>
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 90,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        paddingBottom: 8, pointerEvents: 'none',
      }}>
        <div style={{
          width: 139, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
        }} />
      </div>
    </div>
  );
}

// ── Tab bar (persistent inside the phone) ─────────────────────────
function TabBarProto({ tab, setTab, mode, nav }) {
  const paxItems = [
    { k: 'ride', label: 'Ride',    icon: Icons.home, target: 'home' },
    { k: 'plan', label: 'Plan',    icon: Icons.cal,  target: 'schedule' },
    { k: 'hist', label: 'Trips',   icon: Icons.hist, target: 'history' },
    { k: 'me',   label: 'Account', icon: Icons.user, target: 'profile' },
  ];
  const drvItems = [
    { k: 'drvhome', label: 'Drive',    icon: Icons.car,    target: 'driverHome' },
    { k: 'earn',    label: 'Earnings', icon: Icons.dollar, target: 'earnings' },
  ];
  const items = mode === 'driver' ? drvItems : paxItems;
  const dark = mode === 'driver';
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 26, height: 68,
      background: dark ? '#1A1A1D' : '#fff', borderRadius: 24,
      boxShadow: '0 12px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
      display: 'flex', alignItems: 'center', padding: '0 10px', zIndex: 40,
    }}>
      {items.map(it => {
        const on = it.k === tab;
        return (
          <button key={it.k}
            onClick={() => { setTab(it.k); nav.go(it.target); }}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 3, color: on ? (dark ? DAM.paper : DAM.ink) : DAM.mute,
              background: 'transparent', border: 'none', cursor: 'pointer', padding: 6,
              transition: 'transform 0.1s',
            }}
            onMouseDown={(e)=>e.currentTarget.style.transform='scale(0.95)'}
            onMouseUp={(e)=>e.currentTarget.style.transform='scale(1)'}
            onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}
          >
            <div style={{
              width: 44, height: 30, borderRadius: 999,
              background: on ? DAM.amber : 'transparent',
              display: 'grid', placeItems: 'center',
              transition: 'background 0.15s',
            }}>
              <Icon d={it.icon} size={20} stroke={on ? DAM.ink : DAM.mute} sw={2.2}/>
            </div>
            <div style={{
              fontFamily: DAM.ui, fontSize: 10, fontWeight: 600, letterSpacing: 0.3,
              textTransform: 'uppercase',
            }}>{it.label}</div>
          </button>
        );
      })}
    </div>
  );
}

// ── Tappable wrapper: adds cursor + press animation ───────────────
function Tap({ children, onClick, style = {}, disabled = false, ...rest }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div
      onClick={disabled ? undefined : onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        cursor: disabled ? 'default' : 'pointer',
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform 0.08s ease-out',
        ...style,
      }}
      {...rest}
    >{children}</div>
  );
}

// ── Guide rail: outside the phone, gently hints at what to try ────
function GuideRail({ hint, onReset, mode, onSwitchMode }) {
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, top: 24, zIndex: 50,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      pointerEvents: 'none',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'rgba(20,20,22,0.85)', backdropFilter: 'blur(20px)',
        color: DAM.paper, borderRadius: 999, padding: '8px 8px 8px 16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
        pointerEvents: 'auto',
        fontFamily: DAM.ui, fontSize: 13,
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: 999, background: DAM.amber,
          animation: 'p 1.6s infinite',
        }}/>
        <div style={{ opacity: 0.9 }}>{hint}</div>
        <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.15)', margin: '0 4px' }}/>
        {/* Mode toggle */}
        <div style={{
          display: 'flex', background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: 3,
        }}>
          {['passenger', 'driver'].map(m => (
            <button key={m} onClick={() => onSwitchMode(m)}
              style={{
                padding: '5px 12px', borderRadius: 999, border: 'none', cursor: 'pointer',
                background: mode === m ? DAM.amber : 'transparent',
                color: mode === m ? DAM.ink : DAM.paper,
                fontFamily: DAM.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1,
                textTransform: 'uppercase',
              }}>{m === 'passenger' ? 'Rider' : 'Driver'}</button>
          ))}
        </div>
        <button onClick={onReset}
          style={{
            padding: '6px 12px', borderRadius: 999, border: 'none', cursor: 'pointer',
            background: 'rgba(255,255,255,0.08)', color: DAM.paper,
            fontFamily: DAM.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
          }}>Reset</button>
      </div>
    </div>
  );
}

// ── Route transition wrapper ──────────────────────────────────────
function RouteView({ nav }) {
  const Cmp = ROUTES[nav.current] || ROUTES.welcome;
  const [prev, setPrev] = React.useState(null);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(k => k + 1);
  }, [nav.current]);

  return (
    <div key={key} style={{
      position: 'absolute', inset: 0,
      animation: nav.dir === 'back' ? 'slideBack 0.28s ease-out' : 'slideFwd 0.28s ease-out',
    }}>
      <Cmp nav={nav}/>
    </div>
  );
}

// Hints per screen — 1-line guidance
const HINTS = {
  welcome:      'Tap "Get Started" to begin.',
  home:         'Try: tap "Enter destination" or a saved place.',
  whereto:      'Tap any suggestion to see fare options.',
  rideoptions:  'Pick a ride, then tap the amber Book button.',
  booked:       'Your driver\'s on the way. Tap the driver card to track.',
  tracking:     'Tap the driver card again to hop into the trip view.',
  intrip:       'Tap the fare card to complete the trip.',
  complete:     'Rate & tip, then Submit.',
  schedule:     'Pick a day + time, then schedule.',
  history:      'Tap any past trip for a receipt.',
  profile:      'Your account, payments, and saved places.',
  driverHome:   'You\'re online. Tap "Simulate request" or press the giant toggle.',
  driverReq:    'Accept or decline the ride.',
  driverNav:    'Follow directions to pickup, then tap "Arrived".',
  driverTrip:   'Swipe to complete when you drop off.',
  earnings:     'This week at a glance.',
};

Object.assign(window, {
  registerRoute, useRouter, PhoneFrame, TabBarProto, Tap, GuideRail, RouteView, HINTS, ROUTES,
});
