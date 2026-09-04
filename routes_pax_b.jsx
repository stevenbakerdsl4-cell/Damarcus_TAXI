// Passenger routes B: tracking, in-trip, complete, schedule, history, profile

// ═══════════════════════════════════════════════════════════════════
// TRACKING
// ═══════════════════════════════════════════════════════════════════
function RouteTracking({ nav }) {
  return (
    <div style={{ height: '100%', position: 'relative', background: '#141417' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <MapCanvas w={390} h={844} driverAt={0.28}/>
      </div>

      <div style={{ position: 'absolute', top: 62, left: 16, right: 16, zIndex: 3, display: 'flex', gap: 10 }}>
        <Tap onClick={() => nav.pop()}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, background: '#fff',
            display: 'grid', placeItems: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
          }}><Icon d={Icons.back} size={20} sw={2.2}/></div>
        </Tap>
        <div style={{
          flex: 1, background: '#fff', borderRadius: 12,
          padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: 999, background: DAM.amber,
            display: 'grid', placeItems: 'center', color: DAM.ink,
            fontFamily: DAM.display, fontWeight: 900, fontSize: 12,
          }}>D</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>DAMARCUS IS</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 14, color: DAM.ink }}>4 min away · 0.8 mi</div>
          </div>
          <div style={{
            padding: '6px 10px', background: DAM.ink, color: DAM.amber, borderRadius: 8,
            fontFamily: DAM.mono, fontSize: 10, fontWeight: 700,
          }}>LIVE</div>
        </div>
      </div>

      <Tap onClick={() => nav.push('intrip')} style={{
        position: 'absolute', left: 12, right: 12, bottom: 24, zIndex: 3,
      }}>
        <div style={{
          background: '#fff', borderRadius: 22, padding: 18,
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 58, height: 58, borderRadius: 16, background: DAM.ink,
              color: DAM.amber, display: 'grid', placeItems: 'center',
              fontFamily: DAM.display, fontWeight: 900, fontSize: 22,
            }}>DJ</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20, letterSpacing: -0.3 }}>Damarcus J.</div>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 2 }}>
                Silver Camry · <span style={{ fontFamily: DAM.mono, color: DAM.ink, fontWeight: 700 }}>DMC-421</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <Tap onClick={(e) => { e.stopPropagation(); alert('Chat opens here'); }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: DAM.paper2, display: 'grid', placeItems: 'center' }}>
                  <Icon d={Icons.msg} size={18} sw={2}/>
                </div>
              </Tap>
              <Tap onClick={(e) => { e.stopPropagation(); alert('Calling driver…'); }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: DAM.ink, display: 'grid', placeItems: 'center' }}>
                  <Icon d={Icons.phone} size={18} stroke={DAM.amber} sw={2}/>
                </div>
              </Tap>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ height: 6, background: DAM.paper2, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', background: DAM.amber, borderRadius: 3 }}/>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginTop: 8,
              fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1,
            }}>
              <span>ACCEPTED · 8:14</span>
              <span style={{ color: DAM.ink, fontWeight: 700 }}>EN ROUTE</span>
              <span>ARRIVING 8:18</span>
            </div>
          </div>
          <div style={{
            marginTop: 14, background: DAM.paper, borderRadius: 12, padding: 12,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <Icon d={Icons.share} size={18} sw={2}/>
            <div style={{ flex: 1, fontFamily: DAM.ui, fontSize: 12, fontWeight: 600 }}>
              Share ride with <b>Mom</b> and <b>Sam</b>
            </div>
            <div style={{
              padding: '6px 10px', background: DAM.ink, color: DAM.amber, borderRadius: 8,
              fontFamily: DAM.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1,
            }}>SEND</div>
          </div>
          <div style={{
            marginTop: 12, padding: '8px 12px', background: 'rgba(255,180,0,0.15)', borderRadius: 8,
            fontFamily: DAM.mono, fontSize: 10, color: DAM.amberDk, letterSpacing: 1, textAlign: 'center',
          }}>
            TAP CARD TO SIMULATE PICKUP →
          </div>
        </div>
      </Tap>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// IN-TRIP
// ═══════════════════════════════════════════════════════════════════
function RouteInTrip({ nav }) {
  return (
    <div style={{ height: '100%', background: DAM.ink, position: 'relative', color: DAM.paper }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 380 }}>
        <MapCanvas w={390} h={380} driverAt={0.62}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, transparent 55%, ${DAM.ink} 100%)`,
        }}/>
      </div>

      <div style={{
        position: 'absolute', top: 62, left: 16, right: 16, zIndex: 2,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <div style={{
          padding: '10px 14px', background: DAM.ink, color: DAM.paper, borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: DAM.amber, animation: 'p 1.6s infinite' }}/>
          <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1 }}>IN TRIP</div>
        </div>
        <div style={{ flex: 1 }}/>
        <Tap onClick={() => alert('Share this trip live')}>
          <div style={{
            padding: '10px 14px', background: '#fff', color: DAM.ink, borderRadius: 12,
            display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
          }}>
            <Icon d={Icons.share} size={16} sw={2.2}/>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 12 }}>SHARE</div>
          </div>
        </Tap>
      </div>

      <div style={{ position: 'absolute', top: 360, left: 24, right: 24 }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1.5 }}>ARRIVING AT</div>
        <div style={{
          fontFamily: DAM.display, fontWeight: 900, fontSize: 34, letterSpacing: -1, lineHeight: 1.05, marginTop: 4,
        }}>Doak Campbell<br/>Stadium</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 16 }}>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 56, letterSpacing: -2, color: DAM.amber }}>
            8:34
          </div>
          <div style={{ fontFamily: DAM.ui, fontSize: 13, color: DAM.muteDark }}>
            ETA · 12 min<br/>Trip #4821
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 12, right: 12, bottom: 24 }}>
        <Tap onClick={() => alert('Full chat opens here')}>
          <div style={{
            background: DAM.ink2, borderRadius: 16, padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10, background: DAM.amber,
              display: 'grid', placeItems: 'center', color: DAM.ink,
              fontFamily: DAM.display, fontWeight: 900, fontSize: 14,
            }}>D</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.amber, letterSpacing: 1 }}>DAMARCUS · JUST NOW</div>
              <div style={{
                fontFamily: DAM.ui, fontSize: 13, color: DAM.paper, marginTop: 2,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>"Taking Gaines to skip the game traffic 👍"</div>
            </div>
            <div style={{
              width: 34, height: 34, borderRadius: 10, background: DAM.ink3,
              display: 'grid', placeItems: 'center',
            }}><Icon d={Icons.chev} size={16} stroke={DAM.paper}/></div>
          </div>
        </Tap>

        <Tap onClick={() => nav.push('complete')}>
          <div style={{
            background: DAM.ink2, borderRadius: 16, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: DAM.paper }}/>
              <div style={{ width: 2, height: 24, background: DAM.ink3, margin: '2px 0' }}/>
              <div style={{ width: 10, height: 10, background: DAM.amber }}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.muteDark }}>From <b style={{ color: DAM.paper }}>1121 E Park Ave</b></div>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.muteDark, marginTop: 6 }}>To <b style={{ color: DAM.paper }}>Doak Campbell Stadium</b></div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1 }}>FARE</div>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22, letterSpacing: -0.5 }}>
                $12<span style={{ color: DAM.mute, fontSize: 14 }}>.00</span>
              </div>
            </div>
          </div>
        </Tap>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPLETE (rate + tip)
// ═══════════════════════════════════════════════════════════════════
function RouteComplete({ nav }) {
  const [rating, setRating] = React.useState(5);
  const [tip, setTip] = React.useState(2);
  const tipsRaw = [0, 2, 3, 5, 'Other'];
  const tipAmount = typeof tipsRaw[tip] === 'number' ? tipsRaw[tip] : 0;
  const [tags, setTags] = React.useState(new Set(['Great convo', 'On time']));
  const toggleTag = (t) => setTags(s => {
    const n = new Set(s); n.has(t) ? n.delete(t) : n.add(t); return n;
  });

  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative', overflow: 'auto' }}>
      <div style={{
        background: DAM.amber, color: DAM.ink, padding: '80px 24px 30px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 14,
          background: `repeating-linear-gradient(90deg, ${DAM.ink} 0 14px, ${DAM.amber} 14px 28px)`,
        }}/>
        <div style={{ fontFamily: DAM.mono, fontSize: 11, letterSpacing: 2 }}>TRIP #4821 · COMPLETE</div>
        <div style={{
          fontFamily: DAM.display, fontWeight: 900, fontSize: 56, lineHeight: 0.95, letterSpacing: -2, marginTop: 12,
        }}>You made it.<br/>Nice one.</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 20 }}>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1, opacity: 0.7 }}>TOTAL</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 42, letterSpacing: -1.5 }}>
              ${(12 + tipAmount).toFixed(2)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1, opacity: 0.7 }}>DURATION</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 20 }}>18 min</div>
          </div>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, letterSpacing: 1, opacity: 0.7 }}>DIST</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 20 }}>2.4 mi</div>
          </div>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 14, background: DAM.ink, color: DAM.amber,
              display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 20,
            }}>DJ</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20 }}>How was Damarcus?</div>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 2 }}>Your 3rd ride with him</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', marginBottom: 16 }}>
            {[1,2,3,4,5].map(i => (
              <Tap key={i} onClick={() => setRating(i)}>
                <div style={{
                  width: 54, height: 54, borderRadius: 14,
                  background: i <= rating ? DAM.amber : DAM.paper2,
                  display: 'grid', placeItems: 'center', transition: 'background 0.15s',
                }}>
                  <Icon d={Icons.starF} size={26} stroke={DAM.ink} fill={i <= rating ? DAM.ink : 'transparent'}/>
                </div>
              </Tap>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Great convo', 'Clean car', 'Knew shortcuts', 'On time'].map(t => (
              <Tap key={t} onClick={() => toggleTag(t)}>
                <span style={{
                  display: 'inline-block',
                  padding: '8px 12px', borderRadius: 999,
                  background: tags.has(t) ? DAM.ink : DAM.paper2,
                  color: tags.has(t) ? DAM.paper : DAM.ink,
                  fontFamily: DAM.ui, fontSize: 12, fontWeight: 600,
                  transition: 'background 0.15s, color 0.15s',
                }}>{t}</span>
              </Tap>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, background: DAM.ink, borderRadius: 20, padding: 20, color: DAM.paper }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20 }}>Add a tip</div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1 }}>100% TO DRIVER</div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
            {tipsRaw.map((t, i) => {
              const on = i === tip;
              const label = typeof t === 'number' ? `$${t}` : t;
              return (
                <Tap key={i} onClick={() => setTip(i)} style={{ flex: 1 }}>
                  <div style={{
                    height: 54, borderRadius: 12,
                    background: on ? DAM.amber : DAM.ink2,
                    color: on ? DAM.ink : DAM.paper,
                    display: 'grid', placeItems: 'center',
                    fontFamily: DAM.display, fontWeight: 900, fontSize: 16,
                    transition: 'background 0.15s',
                  }}>{label}</div>
                </Tap>
              );
            })}
          </div>
        </div>

        <Tap onClick={() => nav.go('home')} style={{ marginTop: 20, marginBottom: 24 }}>
          <PrimaryButton>SUBMIT · ${(12 + tipAmount).toFixed(2)} TOTAL</PrimaryButton>
        </Tap>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SCHEDULE
// ═══════════════════════════════════════════════════════════════════
function RouteSchedule({ nav }) {
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  const times = ['5:30','6:00','6:15','6:30','6:45','7:00','7:15','7:30'];
  const [dIdx, setDIdx] = React.useState(5);
  const [tIdx, setTIdx] = React.useState(3);

  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative', overflow: 'auto' }}>
      <div style={{ padding: '58px 20px 12px', background: DAM.paper }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Tap onClick={() => nav.pop()}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, background: '#fff',
              display: 'grid', placeItems: 'center', boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
            }}><Icon d={Icons.back} size={20} sw={2.2}/></div>
          </Tap>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22, letterSpacing: -0.5 }}>Book ahead</div>
        </div>
        <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 48, letterSpacing: -2, lineHeight: 1, marginTop: 18 }}>
          Airport,<br/>{days[dIdx] === 'SAT' ? 'Saturday' : days[dIdx]}.
        </div>
      </div>

      <div style={{ padding: '10px 20px' }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1.2, marginBottom: 10 }}>
          PICK A DAY · NOV 8–14
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {days.map((d, i) => {
            const on = i === dIdx;
            return (
              <Tap key={d} onClick={() => setDIdx(i)} style={{ flex: 1 }}>
                <div style={{
                  height: 72, borderRadius: 12,
                  background: on ? DAM.ink : '#fff',
                  color: on ? DAM.paper : DAM.ink,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  boxShadow: on ? '0 6px 18px rgba(0,0,0,0.2)' : '0 0 0 1px rgba(0,0,0,0.06)',
                  transition: 'background 0.15s',
                }}>
                  <div style={{ fontFamily: DAM.mono, fontSize: 9, letterSpacing: 1, opacity: on ? 0.8 : 0.5 }}>{d}</div>
                  <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 20, marginTop: 2 }}>{8+i}</div>
                  {on && <div style={{ width: 5, height: 5, borderRadius: 999, background: DAM.amber, marginTop: 4 }}/>}
                </div>
              </Tap>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '18px 20px' }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1.2, marginBottom: 10 }}>PICKUP TIME</div>
        <div style={{
          background: '#fff', borderRadius: 20, padding: '20px 0', overflow: 'hidden',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
        }}>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '0 20px', overflow: 'auto' }}>
            {times.map((t, i) => {
              const on = i === tIdx;
              return (
                <Tap key={t} onClick={() => setTIdx(i)}>
                  <div style={{
                    padding: '10px 14px', borderRadius: 10,
                    fontFamily: DAM.display, fontWeight: on ? 900 : 700, fontSize: on ? 26 : 18,
                    color: on ? DAM.ink : DAM.mute,
                    background: on ? DAM.amber : 'transparent',
                    letterSpacing: -0.5, whiteSpace: 'nowrap',
                    transition: 'all 0.15s',
                  }}>{t}</div>
                </Tap>
              );
            })}
          </div>
          <div style={{
            margin: '18px 20px 0', padding: '14px 16px', background: DAM.paper,
            borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <Icon d={Icons.clock} size={18} sw={2}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute }}>Nov {8+dIdx}</div>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 18 }}>{times[tIdx]} AM pickup</div>
            </div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1, fontWeight: 700 }}>LOCKED IN</div>
          </div>
        </div>
      </div>

      <div style={{
        margin: '0 20px', marginTop: 8, background: DAM.ink, color: DAM.paper,
        borderRadius: 20, padding: 18, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: DAM.paper }}/>
          <div style={{ width: 2, height: 18, background: DAM.ink3, margin: '2px 0' }}/>
          <div style={{ width: 8, height: 8, background: DAM.amber }}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.muteDark }}>1121 E Park Ave</div>
          <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.paper, fontWeight: 600, marginTop: 6 }}>TLH Airport · Flat $28</div>
        </div>
      </div>

      <div style={{ padding: '18px 20px 120px' }}>
        <Tap onClick={() => { alert(`Scheduled ${days[dIdx]} at ${times[tIdx]} AM. See you then.`); nav.go('home'); }}>
          <PrimaryButton>SCHEDULE FOR {days[dIdx]}</PrimaryButton>
        </Tap>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════════════════════
function RouteHistory({ nav }) {
  const trips = [
    { d: 'YESTERDAY', t: 'Doak Campbell Stadium', from: 'Home', p: '$12.00', driver: 'Damarcus', on: true, tag: null },
    { d: 'NOV 4',     t: 'TLH Airport',            from: 'Home', p: '$28.00', driver: 'Damarcus', on: false, tag: 'FLAT' },
    { d: 'OCT 28',    t: 'The Moon',               from: 'Midtown', p: '$14.50', driver: 'Marcus C.', on: false, tag: null },
    { d: 'OCT 24',    t: 'Publix Betton Place',    from: 'Home', p: '$8.00',  driver: 'Damarcus', on: false, tag: null },
    { d: 'OCT 18',    t: 'Governor\u2019s Square', from: 'Work', p: '$11.75', driver: 'Alicia T.', on: false, tag: null },
  ];
  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative' }}>
      <div style={{ padding: '58px 20px 16px' }}>
        <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.mute, letterSpacing: 1 }}>PAST 30 DAYS</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
          <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 34, letterSpacing: -1 }}>Your trips</div>
          <Tap onClick={() => alert('Filters coming soon')}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'grid', placeItems: 'center',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
            }}>
              <Icon d={Icons.filter} size={18} sw={2}/>
            </div>
          </Tap>
        </div>
        <div style={{
          marginTop: 16, background: DAM.ink, color: DAM.paper, borderRadius: 20, padding: 18,
          display: 'flex', alignItems: 'baseline', gap: 20,
        }}>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1 }}>SPENT</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 32, letterSpacing: -1 }}>$142</div>
          </div>
          <div>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1 }}>RIDES</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 32, letterSpacing: -1 }}>11</div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.amber, letterSpacing: 1 }}>FAV DRIVER</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 18 }}>Damarcus · 8×</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px 120px', overflow: 'auto', height: 'calc(100% - 300px)' }}>
        {trips.map((r, i) => (
          <Tap key={i} onClick={() => nav.push('complete')}>
            <div style={{
              padding: '14px 0', borderBottom: `1px solid ${DAM.line}`,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: r.on ? DAM.amber : '#fff',
                display: 'grid', placeItems: 'center',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
              }}>
                <Icon d={Icons.car} size={22} sw={2}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.mute, letterSpacing: 1 }}>{r.d}</span>
                  {r.tag && <Pill style={{ background: DAM.amber, color: DAM.ink, padding: '2px 6px', fontSize: 8 }}>{r.tag}</Pill>}
                </div>
                <div style={{ fontFamily: DAM.display, fontWeight: 800, fontSize: 16, marginTop: 2 }}>{r.t}</div>
                <div style={{ fontFamily: DAM.ui, fontSize: 12, color: DAM.mute, marginTop: 1 }}>from {r.from} · {r.driver}</div>
              </div>
              <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 18 }}>{r.p}</div>
            </div>
          </Tap>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PROFILE
// ═══════════════════════════════════════════════════════════════════
function RouteProfile({ nav }) {
  return (
    <div style={{ height: '100%', background: DAM.paper, position: 'relative', overflow: 'auto' }}>
      <div style={{
        background: DAM.ink, color: DAM.paper, padding: '58px 20px 30px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 24, right: -30, width: 160, height: 160, borderRadius: 20,
          background: DAM.amber, transform: 'rotate(20deg)', opacity: 0.15,
        }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20, background: DAM.amber, color: DAM.ink,
            display: 'grid', placeItems: 'center', fontFamily: DAM.display, fontWeight: 900, fontSize: 26,
          }}>KJ</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 24, letterSpacing: -0.5 }}>Kayla Johnson</div>
            <div style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.amber, letterSpacing: 1, marginTop: 3 }}>MEMBER · SINCE 2023</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <div style={{ flex: 1, background: DAM.ink2, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.muteDark, letterSpacing: 1 }}>RIDES</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>47</div>
          </div>
          <div style={{ flex: 1, background: DAM.ink2, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, color: DAM.muteDark, letterSpacing: 1 }}>RATING</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 22 }}>4.9 <span style={{ color: DAM.amber, fontSize: 16 }}>★</span></div>
          </div>
          <div style={{ flex: 1.4, background: DAM.amber, color: DAM.ink, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontFamily: DAM.mono, fontSize: 9, letterSpacing: 1 }}>REFERRAL</div>
            <div style={{ fontFamily: DAM.display, fontWeight: 900, fontSize: 16 }}>Give $5, get $5</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 120 }}>
        <ProfileList title="PAYMENT" rows={[
          { l: 'Visa · 4821', s: 'Default', ic: '💳', on: true },
          { l: 'Cash to driver', s: 'Available', ic: '💵' },
          { l: 'Venmo · @kayla-j', s: 'Linked', ic: 'V' },
        ]}/>
        <ProfileList title="SAVED PLACES" rows={[
          { l: 'Home', s: '1121 E Park Ave', icon: Icons.home },
          { l: 'Work', s: 'Capital Circle SE', icon: Icons.bag },
          { l: 'Mom\u2019s', s: 'Killearn Estates', icon: Icons.star },
        ]}/>
        <ProfileList title="ACCOUNT" rows={[
          { l: 'Notifications', icon: Icons.bell },
          { l: 'Safety toolkit', icon: Icons.shield },
          { l: 'Call Damarcus', icon: Icons.phone, tag: '850·727·4142' },
        ]}/>
      </div>
    </div>
  );
}

function ProfileList({ title, rows }) {
  return (
    <div>
      <div style={{ fontFamily: DAM.mono, fontSize: 10, color: DAM.mute, letterSpacing: 1.2, marginBottom: 8 }}>{title}</div>
      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)' }}>
        {rows.map((p, i, arr) => (
          <Tap key={i} onClick={() => alert(`${p.l} — details in prod`)}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: i === arr.length - 1 ? 'none' : `1px solid ${DAM.line}`,
            }}>
              {p.ic ? (
                <div style={{
                  width: 40, height: 30, borderRadius: 6, background: DAM.ink,
                  display: 'grid', placeItems: 'center', color: DAM.amber,
                  fontFamily: DAM.display, fontWeight: 900, fontSize: 14,
                }}>{p.ic}</div>
              ) : (
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: DAM.paper2,
                  display: 'grid', placeItems: 'center',
                }}><Icon d={p.icon} size={18} sw={2}/></div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: DAM.display, fontWeight: 700, fontSize: 15 }}>{p.l}</div>
                {p.s && <div style={{ fontFamily: DAM.ui, fontSize: 11, color: DAM.mute }}>{p.s}</div>}
              </div>
              {p.tag && <span style={{ fontFamily: DAM.mono, fontSize: 11, color: DAM.mute }}>{p.tag}</span>}
              {p.on && <Pill style={{ background: DAM.amber, color: DAM.ink }}>DEFAULT</Pill>}
              <Icon d={Icons.chev} size={16} stroke={DAM.mute}/>
            </div>
          </Tap>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { RouteTracking, RouteInTrip, RouteComplete, RouteSchedule, RouteHistory, RouteProfile, ProfileList });

registerRoute('tracking', RouteTracking);
registerRoute('intrip',   RouteInTrip);
registerRoute('complete', RouteComplete);
registerRoute('schedule', RouteSchedule);
registerRoute('history',  RouteHistory);
registerRoute('profile',  RouteProfile);
