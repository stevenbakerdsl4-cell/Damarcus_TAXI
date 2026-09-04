// Driver routes — clickable 5 driver screens

// ═══════════════════════════════════════════════════════════════════
// DRIVER HOME
// ═══════════════════════════════════════════════════════════════════
function RouteDriverHome({ nav }) {
  return (
    <div style={{ height: '100%', background: DAM.ink, position: 'relative', color: DAM.paper, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
        <MapCanvas w={390} h={844} showRoute={false}/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent, ${DAM.ink} 55%)` }}/>

      <div style={{
        position: 'absolute', top: 62, left: 16, right: 16, zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, background: DAM.amber, color: DAM.ink,
          display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 18,
        }}>DJ</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: DAM.mono, fontSize: 9, letterSpacing: 1, color: DAM.amber }}>DRIVER · TALLAHASSEE</div>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 16 }}>Damarcus J.</div>
        </div>
        <div style={{
          padding: '10px 12px', background: DAM.ink2, borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Icon d={Icons.starF} size={14} stroke={DAM.amber} fill={DAM.amber}/>
          <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 14 }}>4.98</div>
        </div>
      </div>

      <Tap onClick={() => nav.push('driverReq')} style={{ position: 'absolute', top: 140, left: 20, right: 20, zIndex: 2 }}>
        <div style={{
          background: `linear-gradient(135deg, ${DAM.amber}, ${DAM.amberDk})`,
          borderRadius: 28, padding: '28px 24px', color: DAM.ink,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -30, right: -30, width: 200, height: 200, borderRadius: '50%',
            background: 'rgba(0,0,0,0.06)',
          }}/>
          <div style={{ fontFamily: DAM.mono, fontSize: 11, letterSpacing: 2 }}>STATUS · ONLINE</div>
          <div style={{
            fontFamily: DAM.display, fontWeight: 900, fontSize: 42, letterSpacing: -1.5, lineHeight: 1, marginTop: 4,
          }}>Accepting rides</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <div style={{ fontFamily: DAM.ui, fontSize: 13, maxWidth: 200 }}>
              Nearby demand: <b>Steady</b> — tap to simulate an incoming request.
            </div>
            <div style={{
              width: 68, height: 68, borderRadius: 999, background: DAM.ink, color: DAM.amber,
              display: 'grid', placeItems: 'center',
            }}>
              <Icon d={Icons.power} size={30} sw={2.5}/>
            </div>
          </div>
        </div>
      </Tap>

      <div style={{
        position: 'absolute', top: 400, left: 20, right: 20, background: DAM.ink2,
        borderRadius: 22, padding: 20, zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1.2 }}>TODAY · THU</div>
            <div style={{
              fontFamily: DAM.display, fontWeight: 900, fontSize: 52, letterSpacing: -2, lineHeight: 1,
            }}>$247<span style={{ color: DAM.mute, fontSize: 24 }}>.50</span></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.muteDark, letterSpacing: 1 }}>ONLINE</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 18 }}>6h 22m</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.muteDark, letterSpacing: 1 }}>TRIPS</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>14</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.muteDark, letterSpacing: 1 }}>TIPS</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>$34</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.muteDark, letterSpacing: 1 }}>MILES</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>62</div>
          </div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
          {[12,18,28,44,52,68,60,72,58,80,72,42,28].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, background: i === 9 ? DAM.amber : DAM.ink3, borderRadius: 2,
            }}/>
          ))}
        </div>
      </div>

      <Tap onClick={() => nav.push('earnings')} style={{
        position: 'absolute', bottom: 110, left: 12, right: 12, zIndex: 2,
      }}>
        <div style={{
          background: '#fff', color: DAM.ink, borderRadius: 22, padding: 16,
          display: 'flex', alignItems: 'center', gap: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        }}>
          <div style={{
            width: 46, height: 46, borderRadius: 12, background: DAM.ink, color: DAM.amber,
            display: 'grid', placeItems: 'center',
          }}><Icon d={Icons.cal} size={22} sw={2}/></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>NEXT SCHEDULED · SAT 6:30 AM</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 15, marginTop: 2 }}>Kayla J. → TLH Airport</div>
          </div>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20 }}>$28</div>
        </div>
      </Tap>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// REQUEST (with live countdown)
// ═══════════════════════════════════════════════════════════════════
function RouteRequest({ nav }) {
  const [sec, setSec] = React.useState(12);
  React.useEffect(() => {
    if (sec <= 0) { nav.pop(); return; }
    const t = setTimeout(() => setSec(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [sec]);

  const pct = (sec / 12) * 100;

  return (
    <div style={{ height: '100%', background: DAM.ink, position: 'relative', color: DAM.paper }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <MapCanvas w={390} h={844} driverAt={0.15}/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,14,16,0.55)' }}/>

      <div style={{
        position: 'absolute', top: 68, left: 0, right: 0, zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: `conic-gradient(${DAM.amber} ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
          display: 'grid', placeItems: 'center',
          transition: 'background 0.5s linear',
        }}>
          <div style={{
            width: 78, height: 78, borderRadius: '50%', background: DAM.ink,
            display: 'grid', placeItems: 'center',
            fontFamily: DAM.display, fontWeight: 900, fontSize: 36, color: DAM.paper,
          }}>{sec}<span style={{ fontSize: 12, color: DAM.mute, marginLeft: 2 }}>s</span></div>
        </div>
        <div style={{ marginTop: 12, fontFamily: DAM.mono, fontSize: 11, letterSpacing: 2, color: DAM.amber }}>
          NEW REQUEST
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 24, left: 12, right: 12, zIndex: 3,
        background: '#fff', color: DAM.ink, borderRadius: 26, padding: 22,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1.2 }}>ESTIMATED FARE</div>
            <div style={{
              fontFamily: DAM.display, fontWeight: 900, fontSize: 64, letterSpacing: -2.5, lineHeight: 0.95,
            }}>$28<span style={{ color: DAM.mute, fontSize: 26 }}>.00</span></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
            <Pill style={{ background: DAM.amber, color: DAM.ink }}>AIRPORT · FLAT</Pill>
            <Pill style={{ background: DAM.ink, color: DAM.paper }}>SCHEDULED 6:30</Pill>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: DAM.ink }}/>
            <div style={{ width: 2, height: 36, background: DAM.paper2, margin: '2px 0' }}/>
            <div style={{ width: 10, height: 10, background: DAM.amber }}/>
          </div>
          <div style={{ flex: 1 }}>
            <div>
              <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>PICKUP · 4 MIN · 1.2 MI</div>
              <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 16 }}>1121 E Park Ave</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>DROP · TLH AIRPORT</div>
              <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 16 }}>3300 Capital Cir SW</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>TRIP</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>22 min</div>
            <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 6 }}>9.4 mi</div>
          </div>
        </div>

        <div style={{
          marginTop: 16, padding: '12px 14px', background: DAM.paper, borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999, background: DAM.ink, color: DAM.amber,
            display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 13,
          }}>KJ</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 14 }}>
              Kayla J. · <span style={{ color: DAM.mute, fontWeight: 500 }}>3rd ride with you</span>
            </div>
            <div style={{ fontFamily: DAM.ui, fontSize: 11, color: DAM.mute }}>
              <Icon d={Icons.starF} size={11} stroke={DAM.amber} fill={DAM.amber} style={{ verticalAlign: 'middle' }}/> 4.94 rider · 1 checked bag
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <Tap onClick={() => nav.pop()} style={{ width: 84 }}>
            <button style={{
              width: '100%', height: 60, borderRadius: 16, background: DAM.paper2, border: 'none',
              fontFamily: DAM.display, fontWeight: 800, fontSize: 14, color: DAM.ink, cursor: 'pointer',
            }}>DECLINE</button>
          </Tap>
          <Tap onClick={() => nav.go('driverNav')} style={{ flex: 1 }}>
            <button style={{
              width: '100%', height: 60, borderRadius: 16, background: DAM.ink, color: DAM.amber,
              border: 'none', fontFamily: DAM.display, fontWeight: 900, fontSize: 18, letterSpacing: 0.4,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer',
            }}>ACCEPT
              <Icon d={Icons.arrow} size={20} stroke={DAM.amber} sw={2.5}/>
            </button>
          </Tap>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DRIVER NAV to pickup
// ═══════════════════════════════════════════════════════════════════
function RouteDriverNav({ nav }) {
  return (
    <div style={{ height: '100%', background: '#141417', position: 'relative', color: DAM.paper }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 200,
        background: DAM.ink, padding: '58px 20px 0', zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 18,
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: 22, background: DAM.amber,
          display: 'grid', placeItems: 'center', color: DAM.ink,
        }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={DAM.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3L3 9l6 6"/><path d="M3 9h12a6 6 0 016 6v6"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 46, lineHeight: 1, letterSpacing: -2 }}>
            0.3<span style={{ fontSize: 20, color: DAM.mute, marginLeft: 4 }}>mi</span>
          </div>
          <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 18, marginTop: 6, color: DAM.paper }}>
            Turn left onto <span style={{ color: DAM.amber }}>N Monroe</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 200, left: 0, right: 0, bottom: 240 }}>
        <MapCanvas w={390} h={844 - 200 - 240} driverAt={0.45}/>
      </div>

      <div style={{
        position: 'absolute', left: 12, right: 12, bottom: 24,
        background: '#fff', color: DAM.ink, borderRadius: 22, padding: 18,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 14, background: DAM.ink, color: DAM.amber,
            display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 20,
          }}>KJ</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>PICKING UP</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20 }}>Kayla Johnson</div>
            <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 2 }}>1121 E Park Ave · Apt 2B</div>
          </div>
          <div style={{
            padding: '8px 12px', background: DAM.amber, color: DAM.ink, borderRadius: 10,
            fontFamily: DAM.display, fontWeight: 900, fontSize: 14,
          }}>4 MIN</div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Tap onClick={() => alert('Text opens')} style={{ flex: 1 }}>
            <div style={{
              height: 48, borderRadius: 12, background: DAM.paper2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              fontFamily: DAM.display, fontWeight: 800, fontSize: 14,
            }}>
              <Icon d={Icons.msg} size={18} sw={2}/> TEXT
            </div>
          </Tap>
          <Tap onClick={() => alert('Calling rider…')} style={{ flex: 1 }}>
            <div style={{
              height: 48, borderRadius: 12, background: DAM.paper2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              fontFamily: DAM.display, fontWeight: 800, fontSize: 14,
            }}>
              <Icon d={Icons.phone} size={18} sw={2}/> CALL
            </div>
          </Tap>
          <Tap onClick={() => nav.go('driverTrip')} style={{ flex: 1.6 }}>
            <div style={{
              height: 48, borderRadius: 12, background: DAM.ink, color: DAM.amber,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              fontFamily: DAM.display, fontWeight: 900, fontSize: 14, letterSpacing: 0.3,
            }}>
              <Icon d={Icons.check} size={18} stroke={DAM.amber} sw={2.5}/> ARRIVED
            </div>
          </Tap>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DRIVER TRIP
// ═══════════════════════════════════════════════════════════════════
function RouteDriverTrip({ nav }) {
  const [swipe, setSwipe] = React.useState(0); // 0-100
  const dragRef = React.useRef({ dragging: false, x0: 0 });

  return (
    <div style={{ height: '100%', background: DAM.ink, position: 'relative', color: DAM.paper }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 220 }}>
        <MapCanvas w={390} h={844 - 220} driverAt={0.7}/>
      </div>

      <div style={{
        position: 'absolute', top: 62, left: 16, right: 16, zIndex: 2, display: 'flex', gap: 10,
      }}>
        <div style={{
          padding: '12px 16px', background: DAM.ink, color: DAM.paper, borderRadius: 14,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
        }}>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 32, lineHeight: 1, letterSpacing: -1 }}>34</div>
          <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.amber, letterSpacing: 1 }}>MPH</div>
        </div>
        <div style={{
          flex: 1, padding: '12px 16px', background: DAM.amber, color: DAM.ink, borderRadius: 14,
          display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={DAM.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3L3 9l6 6"/><path d="M3 9h12a6 6 0 016 6v6"/>
          </svg>
          <div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>0.8 mi</div>
            <div style={{ fontFamily: DAM.ui, fontSize: 11 }}>Left on Gaines St</div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 12, right: 12, bottom: 24,
        background: DAM.ink2, borderRadius: 22, padding: 18, color: DAM.paper,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{
            padding: '6px 10px', background: DAM.amber, color: DAM.ink, borderRadius: 8,
            fontFamily: DAM.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1,
          }}>DROP</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 16 }}>Doak Campbell Stadium</div>
            <div style={{ fontFamily: DAM.ui, fontSize: 11, color: DAM.muteDark }}>Kayla J. · Trip #4821</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.amber, letterSpacing: 1 }}>ETA</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 28, letterSpacing: -0.5 }}>8:34</div>
          </div>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.amber, letterSpacing: 1 }}>LEFT</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 28, letterSpacing: -0.5 }}>12 min</div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.amber, letterSpacing: 1 }}>FARE</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 28, letterSpacing: -0.5 }}>$12</div>
          </div>
        </div>

        {/* Swipe to complete */}
        <div
          style={{
            width: '100%', height: 52, marginTop: 14,
            background: DAM.ink3, color: DAM.paper, borderRadius: 14,
            position: 'relative', overflow: 'hidden', cursor: 'grab',
            userSelect: 'none',
          }}
          onMouseDown={(e) => { dragRef.current = { dragging: true, x0: e.clientX - swipe }; }}
          onMouseMove={(e) => {
            if (!dragRef.current.dragging) return;
            const p = Math.max(0, Math.min(100, ((e.clientX - dragRef.current.x0) / (e.currentTarget.offsetWidth - 60)) * 100));
            setSwipe(p);
          }}
          onMouseUp={() => {
            dragRef.current.dragging = false;
            if (swipe > 80) { setSwipe(100); setTimeout(() => nav.go('driverHome'), 300); }
            else setSwipe(0);
          }}
          onMouseLeave={() => {
            if (dragRef.current.dragging) {
              dragRef.current.dragging = false;
              if (swipe > 80) { setSwipe(100); setTimeout(() => nav.go('driverHome'), 300); }
              else setSwipe(0);
            }
          }}
        >
          {/* Fill */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: `${swipe}%`,
            background: DAM.amber, transition: dragRef.current.dragging ? 'none' : 'width 0.2s',
          }}/>
          {/* Label */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: DAM.display, fontWeight: 900, fontSize: 15, letterSpacing: 0.4,
            color: swipe > 50 ? DAM.ink : DAM.paper,
            transition: 'color 0.2s',
          }}>SWIPE TO COMPLETE →</div>
          {/* Knob */}
          <div style={{
            position: 'absolute', top: 4, height: 44, width: 52, borderRadius: 10,
            background: DAM.paper, display: 'grid', placeItems: 'center',
            left: `calc(${swipe}% - ${swipe / 100 * 52}px + 4px)`,
            transition: dragRef.current.dragging ? 'none' : 'left 0.2s',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}>
            <Icon d={Icons.arrow} size={22} stroke={DAM.ink} sw={2.5}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// EARNINGS
// ═══════════════════════════════════════════════════════════════════
function RouteEarnings({ nav }) {
  const days = [
    { d: 'Mon', v: 180 }, { d: 'Tue', v: 214 }, { d: 'Wed', v: 165 },
    { d: 'Thu', v: 247, on: true }, { d: 'Fri', v: 0 }, { d: 'Sat', v: 0 }, { d: 'Sun', v: 0 },
  ];
  const max = 300;
  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative', overflow: 'auto' }}>
      <div style={{
        background: DAM.ink, color: DAM.paper, padding: '58px 20px 30px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 12,
          background: `repeating-linear-gradient(90deg, ${DAM.amber} 0 12px, ${DAM.ink} 12px 24px)`,
        }}/>
        <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.amber, letterSpacing: 1.5 }}>WEEK · NOV 4–10</div>
        <div style={{
          fontFamily: DAM.display, fontWeight: 900, fontSize: 72, letterSpacing: -3, lineHeight: 0.95, marginTop: 6,
        }}>$806<span style={{ color: DAM.amber, fontSize: 36 }}>.50</span></div>
        <div style={{ fontFamily: DAM.ui, fontSize: 14, color: DAM.muteDark, marginTop: 6 }}>
          Payout Tuesday · Chase ···4821
        </div>

        <div style={{ marginTop: 22, display: 'flex', alignItems: 'flex-end', gap: 10, height: 110 }}>
          {days.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: '100%', height: `${(d.v/max)*100}%`,
                background: d.on ? DAM.amber : (d.v ? DAM.ink3 : 'transparent'),
                border: d.v ? 'none' : `1.5px dashed ${DAM.ink3}`,
                borderRadius: 6,
              }}/>
              <div style={{
                fontFamily: DAM.mono, fontSize: 10, color: d.on ? DAM.amber : DAM.muteDark, letterSpacing: 0.5,
              }}>{d.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: 20, paddingBottom: 120 }}>
        <div style={{
          background: '#fff', borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
        }}>
          {[
            { l: 'Ride fares',    v: '$672.00', s: '38 trips' },
            { l: 'Tips',          v: '$104.50', s: 'From 27 riders', hi: true },
            { l: 'Airport flat',  v: '$56.00',  s: '2 trips' },
            { l: 'Fees',          v: '\u2212 $26.00', s: 'Platform + payment' },
          ].map((r, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', padding: '16px 18px',
              borderBottom: i === arr.length - 1 ? 'none' : `1px solid ${DAM.line}`,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 15 }}>{r.l}</div>
                <div style={{ fontFamily: DAM.ui, fontSize: 11, color: DAM.mute, marginTop: 2 }}>{r.s}</div>
              </div>
              <div style={{
                fontFamily: DAM.display, fontWeight: 900, fontSize: 20,
                color: r.hi ? DAM.amberDk : DAM.ink,
              }}>{r.v}</div>
            </div>
          ))}
        </div>

        <Tap onClick={() => alert('Cashing out $412.50 to Chase ···4821')}>
          <div style={{
            marginTop: 16, background: DAM.amber, borderRadius: 20, padding: 20,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: DAM.ink, color: DAM.amber,
              display: 'grid', placeItems: 'center',
            }}><Icon d={Icons.dollar} size={22} stroke={DAM.amber} sw={2.2}/></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1 }}>AVAILABLE NOW</div>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22, letterSpacing: -0.5 }}>Cash out $412.50</div>
            </div>
            <Icon d={Icons.chev} size={22} sw={2.5}/>
          </div>
        </Tap>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1.2, marginBottom: 8 }}>YOUR REGULARS</div>
          <div style={{ display: 'flex', gap: 8, overflow: 'auto' }}>
            {[
              { n: 'Kayla J.', c: 8 }, { n: 'Marcus R.', c: 6 },
              { n: 'Alicia H.', c: 5 }, { n: 'Tom P.', c: 4 },
            ].map((r, i) => (
              <div key={i} style={{
                minWidth: 110, background: '#fff', borderRadius: 14, padding: 12,
                boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 999, background: DAM.ink, color: DAM.amber,
                  display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 13, marginBottom: 8,
                }}>{r.n.split(' ').map(x=>x[0]).join('')}</div>
                <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 13 }}>{r.n}</div>
                <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amberDk, letterSpacing: 0.5 }}>{r.c} RIDES</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { RouteDriverHome, RouteRequest, RouteDriverNav, RouteDriverTrip, RouteEarnings });

registerRoute('driverHome', RouteDriverHome);
registerRoute('driverReq',  RouteRequest);
registerRoute('driverNav',  RouteDriverNav);
registerRoute('driverTrip', RouteDriverTrip);
registerRoute('earnings',   RouteEarnings);
