// Passenger routes — clickable versions of the 11 passenger screens
// Each is registered by name. Root of each returns a plain div (no phone frame).

// ═══════════════════════════════════════════════════════════════════
// WELCOME
// ═══════════════════════════════════════════════════════════════════
function RouteWelcome({ nav }) {
  return (
    <div style={{ height: '100%', position: 'relative', overflow: 'hidden', background: DAM.ink }}>
      <div style={{
        position: 'absolute', top: -80, right: -100, width: 400, height: 400,
        background: DAM.amber, transform: 'rotate(28deg)',
      }}/>
      <div style={{
        position: 'absolute', top: 80, left: 0, right: 0, height: 22,
        background: `repeating-linear-gradient(90deg, ${DAM.ink} 0 22px, ${DAM.amber} 22px 44px)`,
      }}/>
      <div style={{ position: 'absolute', top: 62, left: 24, right: 24, zIndex: 2 }}>
        <Wordmark dark size={20}/>
      </div>
      <div style={{ position: 'absolute', left: 24, right: 24, top: 220, zIndex: 2 }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.amber, letterSpacing: 2, marginBottom: 14 }}>
          TALLAHASSEE · SINCE 2019
        </div>
        <div style={{
          fontFamily: DAM.display, fontWeight: 900, fontSize: 64, lineHeight: 0.9,
          color: DAM.paper, letterSpacing: -2,
        }}>
          YOUR<br/>RIDE.<br/>YOUR<br/><span style={{ color: DAM.amber }}>DRIVER.</span>
        </div>
        <div style={{
          marginTop: 20, fontFamily: DAM.ui, fontSize: 15, lineHeight: 1.45,
          color: 'rgba(245,241,234,0.7)', maxWidth: 300,
        }}>
          Not an algorithm. Damarcus and a handful of Tallahassee drivers you'll actually recognize.
        </div>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 60, zIndex: 2 }}>
        <Tap onClick={() => nav.go('home')}>
          <PrimaryButton>GET STARTED <Icon d={Icons.arrow} size={20} sw={2.5}/></PrimaryButton>
        </Tap>
        <div style={{
          marginTop: 16, textAlign: 'center', color: DAM.paper, fontFamily: DAM.ui, fontSize: 14,
        }}>
          Have an account?{' '}
          <Tap onClick={() => nav.go('home')} style={{ display: 'inline' }}>
            <b style={{ color: DAM.amber, textDecoration: 'underline' }}>Sign in</b>
          </Tap>
        </div>
        <div style={{
          marginTop: 20, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
          color: 'rgba(245,241,234,0.5)', fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1,
        }}>
          <Icon d={Icons.phone} size={12} sw={2}/> BOOK BY PHONE  850·727·4142
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════════════
function RouteHome({ nav }) {
  const openWhereTo = () => nav.push('whereto');
  return (
    <div style={{ height: '100%', position: 'relative', background: DAM.paper, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}>
        <MapCanvas w={390} h={340} showRoute={false}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, transparent 40%, ${DAM.paper} 95%)`,
        }}/>
        <div style={{
          position: 'absolute', top: 200, left: 180,
          width: 20, height: 20, borderRadius: 999, background: DAM.amber,
          boxShadow: '0 0 0 6px rgba(255,180,0,0.25), 0 0 0 12px rgba(255,180,0,0.12)',
        }}/>
      </div>

      <div style={{
        position: 'absolute', top: 58, left: 20, right: 20, zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Tap onClick={() => nav.push('profile')}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, background: DAM.ink,
            display: 'grid', placeItems: 'center', color: DAM.paper,
            fontFamily: DAM.display, fontWeight: 800, fontSize: 16,
          }}>KJ</div>
        </Tap>
        <div style={{
          padding: '8px 14px', background: DAM.ink, color: DAM.paper, borderRadius: 999,
          fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1.2, display: 'flex', gap: 6, alignItems: 'center',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: 999, background: DAM.green }}/>
          3 CARS NEAR YOU
        </div>
        <Tap onClick={() => alert('Notifications coming soon in this prototype.')}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, background: '#fff',
            border: `1px solid ${DAM.line}`, display: 'grid', placeItems: 'center',
          }}>
            <Icon d={Icons.bell} size={20} sw={2}/>
          </div>
        </Tap>
      </div>

      <div style={{
        position: 'absolute', top: 300, left: 0, right: 0, bottom: 0,
        padding: '0 20px 120px', zIndex: 2, overflow: 'auto',
      }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.mute, letterSpacing: 1 }}>THURSDAY · 8:14 PM</div>
          <div style={{
            fontFamily: DAM.display, fontWeight: 900, fontSize: 38, letterSpacing: -1.5,
            color: DAM.ink, lineHeight: 1.05, marginTop: 4,
          }}>Evening, Kayla.<br/>Where to?</div>
        </div>

        <Tap onClick={openWhereTo}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: '#fff', borderRadius: 18, padding: '18px 18px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.05)',
            marginBottom: 12,
          }}>
            <Icon d={Icons.search} size={22} sw={2.2}/>
            <div style={{ flex: 1, fontFamily: DAM.display, fontSize: 20, fontWeight: 600, color: DAM.mute }}>Enter destination</div>
            <div style={{
              width: 34, height: 34, borderRadius: 10, background: DAM.paper2,
              display: 'grid', placeItems: 'center',
            }}><Icon d={Icons.mic} size={18} sw={2}/></div>
          </div>
        </Tap>

        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          {[
            { i: Icons.home, l: 'Home',  s: '1121 E Park Ave' },
            { i: Icons.bag,  l: 'Work',  s: 'Capital Circle' },
            { i: Icons.star, l: 'Mom\u2019s', s: 'Killearn' },
          ].map((s, i) => (
            <Tap key={i} onClick={openWhereTo} style={{ flex: 1 }}>
              <div style={{
                background: '#fff', borderRadius: 14, padding: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 8, background: DAM.paper2,
                  display: 'grid', placeItems: 'center', marginBottom: 8,
                }}><Icon d={s.i} size={16} sw={2}/></div>
                <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 14, color: DAM.ink }}>{s.l}</div>
                <div style={{ fontFamily: DAM.ui, fontSize: 11, color: DAM.mute, marginTop: 2 }}>{s.s}</div>
              </div>
            </Tap>
          ))}
        </div>

        <Tap onClick={() => nav.push('schedule')}>
          <div style={{
            background: DAM.ink, borderRadius: 20, padding: 20, color: DAM.paper,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 14, height: 100,
              background: `repeating-linear-gradient(0deg, ${DAM.amber} 0 14px, ${DAM.ink} 14px 28px)`,
            }}/>
            <Pill dark>UPCOMING · SAT 6:30 AM</Pill>
            <div style={{ marginTop: 10, fontFamily: DAM.display, fontWeight: 900, fontSize: 24, letterSpacing: -0.5 }}>TLH Airport</div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginTop: 10,
              fontFamily: DAM.ui, fontSize: 13, color: DAM.muteDark,
            }}>
              <div style={{ width: 30, height: 30, borderRadius: 999, background: '#333',
                display:'grid', placeItems:'center', color: DAM.amber, fontFamily: DAM.display, fontWeight: 800, fontSize: 12 }}>D</div>
              Damarcus · Silver Camry · <span style={{ color: DAM.amber }}>$28 flat</span>
            </div>
          </div>
        </Tap>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// WHERE TO
// ═══════════════════════════════════════════════════════════════════
function RouteWhereTo({ nav }) {
  const [text, setText] = React.useState('Doak Camp');
  const results = [
    { t: 'Tallahassee Intl Airport',   s: '3300 Capital Cir SW · 12 min · $28 flat', tag: 'AIRPORT' },
    { t: 'Doak Campbell Stadium',       s: 'FSU · 8 min · from $12',                  tag: null },
    { t: 'Governor\u2019s Square Mall', s: '1500 Apalachee Pkwy · 14 min',            tag: null },
    { t: 'Cascades Park',               s: '1001 S Gadsden St · 6 min',               tag: null },
    { t: 'The Moon',                    s: '1105 E Lafayette · 10 min',               tag: 'EVENT' },
  ];
  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative' }}>
      <div style={{ padding: '58px 20px 16px 20px', background: DAM.ink, color: DAM.paper }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <Tap onClick={() => nav.pop()}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, background: DAM.ink2,
              display: 'grid', placeItems: 'center',
            }}><Icon d={Icons.back} size={20} stroke={DAM.paper} sw={2.2}/></div>
          </Tap>
          <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 20 }}>Route</div>
          <div style={{ marginLeft: 'auto', fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1, cursor: 'pointer' }}>ADD STOP +</div>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: DAM.paper }}/>
            <div style={{ width: 2, height: 44, background: 'rgba(255,255,255,0.3)', margin: '4px 0' }}/>
            <div style={{ width: 12, height: 12, background: DAM.amber }}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              background: DAM.ink2, borderRadius: 12, padding: '14px 16px', marginBottom: 8,
              fontFamily: DAM.ui, fontSize: 15, color: DAM.paper,
            }}>
              <div style={{ fontSize: 10, color: DAM.amber, letterSpacing: 1, fontFamily: DAM.mono }}>PICKUP</div>
              <div style={{ marginTop: 3 }}>Current location · Midtown</div>
            </div>
            <div style={{
              background: DAM.amber, borderRadius: 12, padding: '14px 16px',
              fontFamily: DAM.ui, fontSize: 15, color: DAM.ink,
            }}>
              <div style={{ fontSize: 10, color: DAM.ink, letterSpacing: 1, fontFamily: DAM.mono, opacity: 0.7 }}>DESTINATION</div>
              <input value={text} onChange={e => setText(e.target.value)}
                style={{
                  marginTop: 3, background: 'transparent', border: 'none', outline: 'none',
                  fontFamily: DAM.ui, fontSize: 15, fontWeight: 700, color: DAM.ink, width: '100%',
                }}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 20px', overflow: 'auto', height: 'calc(100% - 240px)' }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1.2, color: DAM.mute, marginBottom: 10 }}>
          SUGGESTED IN TALLAHASSEE
        </div>
        {results.map((r, i) => (
          <Tap key={i} onClick={() => nav.push('rideoptions')}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 4px',
              borderBottom: `1px solid ${DAM.line}`,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, background: '#fff',
                display: 'grid', placeItems: 'center', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
              }}>
                <Icon d={Icons.pin} size={20} sw={2}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 16, color: DAM.ink }}>{r.t}</span>
                  {r.tag && <Pill style={{ background: DAM.amber, color: DAM.ink }}>{r.tag}</Pill>}
                </div>
                <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 3 }}>{r.s}</div>
              </div>
            </div>
          </Tap>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// RIDE OPTIONS
// ═══════════════════════════════════════════════════════════════════
function RouteRideOptions({ nav }) {
  const opts = [
    { k: 'std', t: 'Standard',  s: 'Sedan · 1–4 riders', eta: '4 min', p: '$12' },
    { k: 'xl',  t: 'XL',        s: 'SUV/Van · up to 6',  eta: '9 min', p: '$18' },
    { k: 'apt', t: 'Airport',   s: 'Flat rate to TLH',   eta: '4 min', p: '$28' },
    { k: 'evt', t: 'Event',     s: 'Wedding/prom, wait', eta: '12 min',p: '$65' },
  ];
  const [pick, setPick] = React.useState('std');
  const [forOther, setForOther] = React.useState(false);
  const [multiStop, setMultiStop] = React.useState(true);
  const picked = opts.find(o => o.k === pick);

  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <MapCanvas w={390} h={520}/>
      </div>

      <div style={{ position: 'absolute', top: 62, left: 16, right: 16, display: 'flex', gap: 10, zIndex: 2 }}>
        <Tap onClick={() => nav.pop()}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, background: '#fff',
            display: 'grid', placeItems: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
          }}><Icon d={Icons.back} size={20} sw={2.2}/></div>
        </Tap>
        <div style={{
          flex: 1, background: '#fff', borderRadius: 12, padding: '8px 14px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 8, height: 8, background: DAM.amber }}/>
          <div style={{ flex: 1, fontFamily: DAM.ui, fontSize: 14, fontWeight: 600, color: DAM.ink }}>Doak Campbell Stadium</div>
          <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.mute }}>2.4 mi</div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, background: DAM.paper,
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '18px 20px 30px', zIndex: 3,
        boxShadow: '0 -20px 60px rgba(0,0,0,0.15)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <div style={{ width: 40, height: 4, background: DAM.line, borderRadius: 2 }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22, letterSpacing: -0.5 }}>Choose your ride</div>
          <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1 }}>FARE ESTIMATE</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {opts.map(o => {
            const on = o.k === pick;
            return (
              <Tap key={o.k} onClick={() => setPick(o.k)}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: on ? DAM.ink : '#fff',
                  color: on ? DAM.paper : DAM.ink,
                  borderRadius: 16, padding: '14px 16px',
                  boxShadow: on ? '0 8px 24px rgba(0,0,0,0.2)' : '0 0 0 1px rgba(0,0,0,0.06)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'background 0.15s, color 0.15s',
                }}>
                  {on && <div style={{
                    position: 'absolute', top: 0, right: 0, bottom: 0, width: 6, background: DAM.amber,
                  }}/>}
                  <div style={{
                    width: 54, height: 44, borderRadius: 10,
                    background: on ? DAM.ink2 : DAM.paper2,
                    display: 'grid', placeItems: 'center',
                  }}>
                    <Icon d={Icons.car} size={26} stroke={on ? DAM.amber : DAM.ink} sw={2}/>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontFamily: DAM.display, fontWeight: 800, fontSize: 17,
                    }}>
                      {o.t}
                      {on && <Pill style={{ background: DAM.amber, color: DAM.ink, padding: '2px 7px', fontSize: 9 }}>PICKED</Pill>}
                    </div>
                    <div style={{ fontFamily: DAM.ui, fontSize: 12, marginTop: 2, color: on ? DAM.muteDark : DAM.mute }}>
                      {o.s} · {o.eta} away
                    </div>
                  </div>
                  <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 24, letterSpacing: -0.5 }}>{o.p}</div>
                </div>
              </Tap>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Tap onClick={() => setForOther(v => !v)} style={{ flex: 1 }}>
            <div style={{
              background: forOther ? DAM.ink : '#fff',
              color: forOther ? DAM.paper : DAM.ink,
              border: forOther ? 'none' : `1px solid ${DAM.line}`,
              borderRadius: 12, padding: '10px 12px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon d={Icons.users} size={18} stroke={forOther ? DAM.amber : DAM.ink} sw={2}/>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, fontWeight: 600, flex: 1 }}>For someone else</div>
              <Toggle on={forOther}/>
            </div>
          </Tap>
          <Tap onClick={() => setMultiStop(v => !v)} style={{ flex: 1 }}>
            <div style={{
              background: multiStop ? DAM.ink : '#fff',
              color: multiStop ? DAM.paper : DAM.ink,
              border: multiStop ? 'none' : `1px solid ${DAM.line}`,
              borderRadius: 12, padding: '10px 12px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon d={Icons.route} size={18} stroke={multiStop ? DAM.amber : DAM.ink} sw={2}/>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, fontWeight: 600, flex: 1 }}>Multi-stop</div>
              <Toggle on={multiStop}/>
            </div>
          </Tap>
        </div>

        <Tap onClick={() => nav.push('booked')} style={{ marginTop: 14 }}>
          <PrimaryButton>BOOK {picked.t.toUpperCase()} · {picked.p}</PrimaryButton>
        </Tap>
      </div>
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div style={{
      width: 32, height: 20, borderRadius: 999,
      background: on ? DAM.amber : DAM.paper2, position: 'relative', transition: 'background 0.15s',
    }}>
      <div style={{
        position: 'absolute', top: 2, width: 16, height: 16, borderRadius: 999, background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        left: on ? 14 : 2, transition: 'left 0.15s',
      }}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// BOOKED (driver assigned)
// ═══════════════════════════════════════════════════════════════════
function RouteBooked({ nav }) {
  return (
    <div style={{ height: '100%', background: DAM.ink, position: 'relative', color: DAM.paper }}>
      <div style={{ padding: '80px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: DAM.green, animation: 'p 1.6s infinite' }}/>
          <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.amber, letterSpacing: 1.5 }}>DRIVER ASSIGNED</div>
        </div>
        <div style={{
          fontFamily: DAM.display, fontWeight: 900, fontSize: 130, lineHeight: 0.85, letterSpacing: -5,
          color: DAM.paper,
        }}>
          4<span style={{ color: DAM.amber }}>·</span>
        </div>
        <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 40, lineHeight: 1, letterSpacing: -1.5, marginTop: 4 }}>
          MINUTES AWAY
        </div>
        <div style={{ fontFamily: DAM.ui, fontSize: 14, color: DAM.muteDark, marginTop: 10, maxWidth: 300 }}>
          Damarcus is heading to <b style={{ color: DAM.paper }}>1121 E Park Ave</b>. Look for a silver Camry.
        </div>
      </div>

      <Tap onClick={() => nav.push('tracking')} style={{ margin: '30px 20px 0' }}>
        <div style={{
          background: DAM.ink2, borderRadius: 22, padding: 18,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 100, height: 6,
            background: `repeating-linear-gradient(90deg, ${DAM.amber} 0 12px, ${DAM.ink2} 12px 24px)`,
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16, background: DAM.amber,
              display: 'grid', placeItems: 'center', color: DAM.ink,
              fontFamily: DAM.display, fontWeight: 900, fontSize: 28,
            }}>DJ</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>Damarcus J.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                <Icon d={Icons.starF} size={13} stroke={DAM.amber} fill={DAM.amber}/>
                <span style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.muteDark }}>4.98 · 2,847 rides · Owner</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
            <div style={{
              width: 120, height: 70, borderRadius: 12, background: DAM.ink3, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `repeating-linear-gradient(135deg, transparent 0 8px, rgba(255,255,255,0.03) 8px 16px)`,
              }}/>
              <Icon d={Icons.car} size={44} stroke={DAM.amber} sw={1.8}
                style={{ position: 'absolute', left: 38, top: 12 }}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 16 }}>Silver Toyota Camry</div>
              <div style={{ fontFamily: DAM.mono, fontSize: 22, color: DAM.amber, letterSpacing: 2, marginTop: 4 }}>
                DMC · 421
              </div>
            </div>
          </div>
          <div style={{
            marginTop: 14, padding: '10px 12px', background: 'rgba(255,180,0,0.1)', borderRadius: 10,
            fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1, textAlign: 'center',
          }}>
            TAP TO TRACK LIVE →
          </div>
        </div>
      </Tap>

      <div style={{ position: 'absolute', bottom: 40, left: 20, right: 20 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          {[
            { i: Icons.phone, l: 'Call' },
            { i: Icons.msg,   l: 'Text' },
            { i: Icons.share, l: 'Share ride' },
            { i: Icons.shield,l: 'Safety' },
          ].map((a, i) => (
            <Tap key={i} style={{ flex: 1 }} onClick={() => alert(`${a.l} — wired in real build`)}>
              <div style={{
                height: 72, borderRadius: 16, background: DAM.ink2,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>
                <Icon d={a.i} size={20} stroke={DAM.amber} sw={2}/>
                <div style={{ fontFamily: DAM.ui, fontSize: 10, fontWeight: 600, color: DAM.paper, letterSpacing: 0.3 }}>{a.l}</div>
              </div>
            </Tap>
          ))}
        </div>
        <Tap onClick={() => nav.go('home')}>
          <button style={{
            width: '100%', height: 54, background: 'transparent',
            border: `1.5px solid ${DAM.ink3}`, color: DAM.paper,
            borderRadius: 16, fontFamily: DAM.display, fontWeight: 800, fontSize: 15, letterSpacing: 0.3, cursor: 'pointer',
          }}>CANCEL RIDE</button>
        </Tap>
      </div>
    </div>
  );
}

Object.assign(window, { RouteWelcome, RouteHome, RouteWhereTo, RouteRideOptions, RouteBooked, Toggle });

registerRoute('welcome',     RouteWelcome);
registerRoute('home',        RouteHome);
registerRoute('whereto',     RouteWhereTo);
registerRoute('rideoptions', RouteRideOptions);
registerRoute('booked',      RouteBooked);
