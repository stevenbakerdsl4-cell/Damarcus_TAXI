# Handoff: Damarcus Taxi — Tallahassee Rideshare App

## Overview

A distinctive on-demand taxi application for **Damarcus**, a local Tallahassee, FL taxi business. The app covers the complete ride journey — booking, scheduling, live tracking, in-trip communication, payment, and history — plus a companion driver experience for dispatch, navigation, and earnings.

The product identity is **first-name-basis, local, and human** — deliberately not a generic Uber/Lyft clone. Distinctive brand elements: warm ink black + amber gold, oversized display typography for fares and ETAs, a "checker flag" stripe motif, and copy that reads like a person ("Damarcus is 4 min out" — not "Your driver is en route").

## About the Design Files

The files bundled here (in `source/`) are **design references created in HTML** — a working, clickable prototype demonstrating layout, interactions, transitions, and copy. They are **not** production code to copy directly.

The task is to **recreate these designs in the target codebase's environment** using its existing patterns and libraries:
- If building on React Native / Expo → recreate as native components using React Native primitives (View, Text, Pressable) and a mapping library like `react-native-maps`.
- If building native iOS (SwiftUI) → recreate as `View` hierarchies with MapKit for the map surface.
- If building native Android (Jetpack Compose) → recreate with Compose primitives and Google Maps SDK.
- If no environment exists yet → recommend React Native + Expo for a passenger+driver dual-app rollout (fastest path to iOS+Android with one codebase; well-supported map ecosystem; TypeScript-friendly).

The HTML uses SVG placeholders for the map surface. In production, replace the `MapCanvas` component with a real map SDK.

## Fidelity

**High-fidelity (hifi).** The prototype is pixel-precise: final colors, typography, spacing, elevations, tap states, transitions, and copy are all decided and locked. Recreate the UI to match — including the oversized display type, the amber accent placements, and the checker stripe motif — using the codebase's component library where equivalents exist.

Two things are deliberately illustrative and should be replaced with real product code:
1. The **map surface** is a stylized SVG. Use a real map SDK with a custom dark style that matches (see Map Style below).
2. The **map street labels** ("MIDTOWN", "FSU", "CASCADES") are static text placed on the SVG. The real map SDK will handle labels natively.

---

## Brand System

### Colors

| Token          | Hex        | Usage                                                    |
|----------------|------------|----------------------------------------------------------|
| `ink`          | `#0E0E10`  | Primary dark surface (dark screens, primary text on light)|
| `ink2`         | `#1A1A1D`  | Raised card on dark surface                              |
| `ink3`         | `#26262A`  | Borders / dividers on dark surface                       |
| `paper`        | `#F5F1EA`  | Warm off-white — primary light surface                   |
| `paper2`       | `#EAE4D8`  | Subtle warm gray — inset cards on light                  |
| `amber`        | `#FFB400`  | **Signature accent** — CTAs, highlights, active states   |
| `amberDk`      | `#E29A00`  | Amber pressed/darker variant (button shadow, gradients)  |
| `garnet`       | `#7A1F2B`  | Tallahassee accent — used very sparingly                 |
| `green`        | `#3B7A57`  | Positive / online / route (map only)                     |
| `red`          | `#D14B3C`  | Cancel / SOS destructive actions                         |
| `line`         | `rgba(14,14,16,0.10)`      | Divider on light                            |
| `mute`         | `rgba(14,14,16,0.55)`      | Muted body copy on light                    |
| `muteDark`     | `rgba(245,241,234,0.55)`   | Muted body copy on dark                     |

Rule: never place amber on garnet or vice versa. Amber is the hero — one dominant amber element per screen at most.

### Typography

Three families:

| Role            | Family              | Weights       | Usage                                       |
|-----------------|---------------------|---------------|---------------------------------------------|
| **Display**     | **Archivo**         | 800, 900      | Headlines, fares, ETAs, big numerals        |
| **UI**          | **Inter**           | 400, 500, 600, 700 | Body copy, addresses, list rows, buttons |
| **Mono**        | **JetBrains Mono**  | 500, 700      | Labels, license plates, timestamps, tags    |

All from Google Fonts. The type system leans hard on Archivo Black (900) — fares like `$28.00` and ETAs like `4 MINUTES AWAY` are rendered enormous (30–130px) with tight negative letter-spacing (`-2` to `-5`). This is the app's most recognizable visual signature.

**Recommended scale:**

| Style               | Family       | Size | Weight | Letter-spacing |
|---------------------|--------------|------|--------|----------------|
| Display XXL         | Archivo      | 72–130 | 900  | -3 to -5       |
| Display XL          | Archivo      | 42–56 | 900   | -2             |
| Display L (title)   | Archivo      | 34–38 | 900   | -1.5           |
| Display M (heading) | Archivo      | 22–24 | 900   | -0.5           |
| Display S (subhead) | Archivo      | 16–20 | 800   | -0.3           |
| Body                | Inter        | 13–15 | 400/500 | 0            |
| Small               | Inter        | 11–12 | 500/600 | 0            |
| Label / caps        | JetBrains Mono | 9–11 | 500/700 | 1.2–2 (uppercase) |

### Spacing

Base unit **4px**. Standard values used: 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 40, 60, 80.
Screen edge padding: **20px** (light screens), **20–24px** (dark screens).

### Radius

| Token  | Value | Usage                              |
|--------|-------|------------------------------------|
| `xs`   | 6px   | Chips, tags, small pills           |
| `sm`   | 8–10px| Buttons inside cards, small icons  |
| `md`   | 12px  | List row icons, form controls      |
| `lg`   | 14–16px| Cards, action buttons             |
| `xl`   | 20–22px| Sheets, primary containers        |
| `2xl`  | 26–28px| Bottom sheets, hero cards         |
| Pill   | 999   | Status chips, tabs, tab-bar icons  |

Phone screen corner radius (for iOS-style device frame): **48px**.

### Shadows / Elevation

| Level     | Value                                                                   | Usage                          |
|-----------|-------------------------------------------------------------------------|--------------------------------|
| flat      | `0 0 0 1px rgba(0,0,0,0.05)`                                            | Card border on light           |
| raised    | `0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)`                | Home shortcut tiles            |
| card      | `0 4px 20px rgba(0,0,0,0.06)`                                           | Rating card                    |
| overlay   | `0 4px 14px rgba(0,0,0,0.12–0.25)`                                      | Search bar, top pills over map |
| sheet     | `0 -20px 60px rgba(0,0,0,0.15)`                                         | Bottom sheet                   |
| deep      | `0 20px 60px rgba(0,0,0,0.35–0.5)`                                      | Modal request cards            |
| button    | `0 6px 0 rgba(226,154,0,0.9), 0 12px 30px rgba(255,180,0,0.35)`         | Primary amber button           |

### Signature Motif: Checker Stripe

`repeating-linear-gradient(90deg, INK 0 22px, AMBER 22px 44px)` — used as an accent strip at the top of the Welcome screen, along the top of the Earnings header, and as short 6-14px stripes hanging off card corners on the Booked card and Complete banner. Never used as a background fill. Cell widths of 12–28px depending on scale.

---

## Screen Inventory

**16 screens total, 11 passenger + 5 driver.**

Route names in code correspond to the router keys in the prototype.

### Passenger Flow

| # | Route key      | Name              | Purpose                                          |
|---|----------------|-------------------|--------------------------------------------------|
| 1 | `welcome`      | Welcome / Auth    | First launch, sign-in entry                      |
| 2 | `home`         | Home              | Booking entry, saved places, upcoming ride       |
| 3 | `whereto`      | Where to          | Destination search + saved places                |
| 4 | `rideoptions`  | Ride options      | Pick service tier, see fare, toggle multi-stop / for-someone-else |
| 5 | `booked`       | Driver assigned   | Confirmation with driver + vehicle + ETA         |
| 6 | `tracking`     | Live tracking     | Driver en route on map with progress             |
| 7 | `intrip`       | In-trip           | Riding, ETA to drop-off, chat, share             |
| 8 | `complete`     | Rate + tip        | Post-trip rating, feedback tags, tip selection   |
| 9 | `schedule`     | Schedule ahead    | Day/time picker for pre-booking                  |
| 10| `history`      | Ride history      | Past trips + spend/rides summary                 |
| 11| `profile`      | Account           | Profile, payments, saved places, settings        |

### Driver Flow

| #  | Route key     | Name              | Purpose                                          |
|----|---------------|-------------------|--------------------------------------------------|
| 12 | `driverHome`  | Driver home       | Online status, today's earnings, next scheduled  |
| 13 | `driverReq`   | Ride request      | Incoming request with 12-sec countdown           |
| 14 | `driverNav`   | Navigate          | Turn-by-turn to pickup                           |
| 15 | `driverTrip`  | Trip in progress  | Speed HUD, next turn, swipe-to-complete          |
| 16 | `earnings`    | Earnings          | Weekly breakdown, chart, cash-out, regulars      |

---

## Detailed Screen Specs

Screens are described at 390×844 (iPhone 14/15 logical size). All measurements are in dp/pt.

### 1. Welcome (`welcome`)

**Layout:** Full-bleed dark (`ink`). Amber diagonal wedge (400×400) rotated 28° in top-right corner (bleeds off screen). Horizontal checker stripe (22px tall) at y=80. Content stack pinned to left, hero copy vertically centered.

**Components:**
- Wordmark (top-left, y=62, x=24): Amber square (20×20, radius 6) with black `D`, next to "DAMARCUS" in Archivo 900 / 20px / letter-spacing -0.5 / paper.
- Eyebrow: "TALLAHASSEE · SINCE 2019" in mono 11px, amber, letter-spacing 2.
- Hero: "YOUR / RIDE. / YOUR / **DRIVER.**" in Archivo 900 / 64px / line-height 0.9 / letter-spacing -2. "DRIVER." is amber; rest is paper.
- Subhead: Inter 15px, `rgba(245,241,234,0.7)`, max-width 300, line-height 1.45.
  - Copy: *"Not an algorithm. Damarcus and a handful of Tallahassee drivers you'll actually recognize."*
- Primary CTA: **GET STARTED** — full-width, height 60, radius 16, amber background, black text, Archivo 900 / 18px, right-arrow icon. Custom shadow: `0 6px 0 amberDk, 0 12px 30px rgba(255,180,0,0.35)`.
- Sign in link: "Have an account? **Sign in**" (amber, underlined).
- Phone-book fallback: mono 10px, muted, `📞 BOOK BY PHONE 850·727·4142`.

**Behavior:** Tap CTA or "Sign in" → `home`.

---

### 2. Home (`home`)

**Layout:** Two zones — map peek at top (0-340px, gradient-faded into paper), content scroll area below.

**Components:**
- Top bar (y=58): user avatar (42×42, radius 12, ink bg, white "KJ") — tap goes to `profile`; center pill "🟢 3 CARS NEAR YOU" (ink bg, paper text, mono 10 caps, letter-spacing 1.2); bell icon button (42×42, white, radius 12).
- Amber "you-are-here" dot at map coordinates (200, 20 relative to map): 20×20 amber circle with dual glow rings (6px `rgba(255,180,0,0.25)`, 12px `rgba(255,180,0,0.12)`).
- Greeting: mono 11px "THURSDAY · 8:14 PM" then Archivo 900 / 38px "Evening, Kayla. / Where to?"
- Search input (tappable): white card, 18px padding, radius 18, magnifier icon + placeholder "Enter destination" in Archivo 600 / 20px / mute, plus a mic button (34×34, `paper2` bg, radius 10).
- Saved shortcuts row: 3 equal-flex cards — Home, Work, Mom's — each with icon-in-square (30×30, `paper2` bg, radius 8), title Archivo 800 / 14px, subtitle Inter 11px muted.
- Upcoming ride card: dark ink card (radius 20, padding 20). Vertical checker stripe at right edge (14×100). "UPCOMING · SAT 6:30 AM" pill; "TLH Airport" title Archivo 900 / 24px; row with driver avatar + "Damarcus · Silver Camry · **$28 flat**" (amber "$28 flat").
- Bottom tab bar (see Global > Tab Bar).

**Behavior:**
- Tap avatar → push `profile`
- Tap search / any saved shortcut → push `whereto`
- Tap upcoming card → push `schedule`
- Bell → non-blocking notification (out of scope)

---

### 3. Where to (`whereto`)

**Layout:** Ink header (top 240px) with pickup+destination stack, then paper results list.

**Components:**
- Header: back button (40×40, `ink2` bg), title "Route" Archivo 800 / 20px, right-side "ADD STOP +" in mono 10 amber.
- Route stack: left "gutter" showing pickup dot (12×12 paper circle) → 44px vertical `rgba(255,255,255,0.3)` line → destination square (12×12 amber square).
- Pickup card: `ink2` bg, radius 12, mono 10 amber "PICKUP" label, Inter 15 "Current location · Midtown".
- Destination card: **amber bg**, radius 12, black text. Contains a real text input styled to look inline. Placeholder in prototype is "Doak Camp|" (cursor blink implied).
- Results list header: "SUGGESTED IN TALLAHASSEE" mono 10 muted.
- Result rows (5 total): 42×42 white icon tile (radius 10) + title Archivo 800 16px + subtitle Inter 12 muted. Some rows have a tag pill (e.g. `AIRPORT`, `EVENT` — amber bg, black text, small caps).

**Result data:**
| Title                          | Sub                                            | Tag       |
|--------------------------------|------------------------------------------------|-----------|
| Tallahassee Intl Airport       | 3300 Capital Cir SW · 12 min · $28 flat        | AIRPORT   |
| Doak Campbell Stadium          | FSU · 8 min · from $12                         | —         |
| Governor's Square Mall         | 1500 Apalachee Pkwy · 14 min                   | —         |
| Cascades Park                  | 1001 S Gadsden St · 6 min                      | —         |
| The Moon                       | 1105 E Lafayette · 10 min                      | EVENT     |

**Behavior:**
- Back → pop
- Tap any result → push `rideoptions`

---

### 4. Ride options (`rideoptions`)

**Layout:** Fullscreen map background with top overlay pills + bottom action sheet (fixed at bottom).

**Components:**
- Top row over map: back-button pill (44×44 white) + destination pill (white, gradient shadow) showing amber square marker + "Doak Campbell Stadium" + "2.4 mi" in mono.
- Bottom sheet: `paper` bg, top-radius 28, drag-handle bar (40×4).
- Header: "Choose your ride" Archivo 900 / 22px, plus "FARE ESTIMATE" mono 10 muted (right).
- Ride option rows (4): tappable, switching state — the picked one becomes ink-black with amber vertical strip on the right edge (6px wide). Icon tile (54×44) contains a `car` icon; icon color amber when picked, ink when not. Title Archivo 800 17 + tag pill "PICKED" (amber, 2×7px pad, 9px text, only on picked). Subtitle Inter 12. Fare Archivo 900 / 24px.
- Options:
  | Key | Title    | Sub                    | ETA     | Price |
  |-----|----------|------------------------|---------|-------|
  | std | Standard | Sedan · 1–4 riders     | 4 min   | $12   |
  | xl  | XL       | SUV/Van · up to 6      | 9 min   | $18   |
  | apt | Airport  | Flat rate to TLH       | 4 min   | $28   |
  | evt | Event    | Wedding/prom, wait     | 12 min  | $65   |
- Toggle row: two side-by-side cards.
  - "For someone else" — icon users, toggle switch, ink when active
  - "Multi-stop" — icon route, toggle switch, ink when active (default: ON)
- Primary CTA at bottom: "BOOK {SELECTED} · ${PRICE}" — same amber button as Welcome.

**Behavior:**
- Back → pop
- Tap a ride card → select (state updates the row background + CTA label)
- Tap toggle cards → flip state
- Tap CTA → push `booked`

---

### 5. Driver assigned (`booked`)

**Layout:** Full ink screen. Hero numeric ETA fills top; driver card centered; action buttons at bottom.

**Components:**
- Status line: green 8×8 pulsing dot + "DRIVER ASSIGNED" mono 11 amber caps.
- Massive ETA: "4" Archivo 900 / **130px**, letter-spacing -5. Followed by amber "·" separator.
- Sub-hero: "MINUTES AWAY" Archivo 900 / 40px.
- Body copy: "Damarcus is heading to **1121 E Park Ave**. Look for a silver Camry." (paper name bolded)
- Driver card (`ink2`, radius 22, padding 18) — **tappable** goes to `tracking`:
  - Small horizontal checker stripe (100×6) top-right
  - Row 1: 64×64 amber tile "DJ", name "Damarcus J." Archivo 900 22, star + rating "4.98 · 2,847 rides · Owner"
  - Row 2: 120×70 "photo" placeholder (ink3 bg, diagonal cross-hatch overlay, amber car icon) + vehicle info: "Silver Toyota Camry" Archivo 800 16 + license plate "DMC · 421" mono 22 amber letter-spacing 2
  - Amber CTA text at bottom: "TAP TO TRACK LIVE →"
- Action row (4 tiles, equal flex, 72 tall): Call, Text, Share ride, Safety — each with amber icon + white caption; `ink2` bg, radius 16
- "CANCEL RIDE" secondary button: transparent, 1.5px ink3 border, paper text, radius 16, height 54

**Behavior:**
- Tap driver card → push `tracking`
- Action tiles → placeholder alerts (Call/Text/Share/Safety not wired in prototype — implement per platform)
- CANCEL → go to `home` (in production: confirm dialog first)

---

### 6. Live tracking (`tracking`)

**Layout:** Full-bleed map. Compact status pill on top; large driver card on bottom.

**Components:**
- Top row: back button (44×44 white) + status pill (white) with mini avatar (26×26 amber "D") + "DAMARCUS IS / 4 min away · 0.8 mi" (mono label + Archivo 800 detail) + "LIVE" chip (ink bg, amber text, mono 10)
- Driver card at bottom: white, radius 22, padding 18 — **entire card is tappable** → push `intrip`
  - Row: 58×58 ink tile "DJ" (amber text) + name/vehicle + two action buttons: chat (42×42 `paper2`) and call (42×42 ink w/ amber icon)
  - Progress bar: 6px tall track (`paper2`), 30% filled amber, labels below: "ACCEPTED · 8:14" / "**EN ROUTE**" / "ARRIVING 8:18" (mono 10)
  - Share widget: `paper` bg card with share icon + "Share ride with **Mom** and **Sam**" + "SEND" action chip (ink bg, amber text)
  - Amber hint strip: "TAP CARD TO SIMULATE PICKUP →" (this is a prototype helper, remove in production)

**Behavior:**
- Back → pop
- Tap driver card → push `intrip`
- Tap chat/call buttons (with `stopPropagation`) → open messaging / call sheet

---

### 7. In-trip (`intrip`)

**Layout:** Compact map top (380px, gradient-faded into ink), main info below, chat + trip strip pinned bottom.

**Components:**
- Top status: "IN TRIP" chip (ink bg, amber pulsing dot) + "SHARE" button (white)
- Center info block:
  - "ARRIVING AT" mono 10 amber
  - "Doak Campbell / Stadium" Archivo 900 / 34px
  - Row: "8:34" Archivo 900 / 56px amber + "ETA · 12 min / Trip #4821" (small mute)
- Chat preview card (`ink2`, radius 16): 34×34 amber "D" avatar + "DAMARCUS · JUST NOW" mono label + message preview: *"Taking Gaines to skip the game traffic 👍"* + chev button
- Trip strip card (`ink2`, radius 16): left dot/line/square gutter + "From **1121 E Park Ave**" / "To **Doak Campbell Stadium**" + right: "FARE / $12.00" (Archivo 900 22, small ".00" in mute)

**Behavior:**
- Tap chat card → open full chat (out of scope, alert in prototype)
- Tap trip/fare card → push `complete`
- Share → open share sheet

---

### 8. Rate + tip (`complete`)

**Layout:** Amber hero banner (top), then rating card and tip card stacked in scroll area.

**Components:**
- Hero banner: amber bg, black text, padding 80/24/30. Bottom edge: checker stripe (14px tall).
  - "TRIP #4821 · COMPLETE" mono 11
  - "You made it. / Nice one." Archivo 900 / 56px letter-spacing -2
  - Metrics row: TOTAL (Archivo 900 / 42px), DURATION 18 min, DIST 2.4 mi
- Rating card (white, radius 20):
  - Driver row: 54×54 ink tile "DJ" + "How was Damarcus?" Archivo 900 20 + "Your 3rd ride with him"
  - 5 star tiles (54×54 each, radius 14). Each tile is tappable — sets rating from 1–5. Tiles ≤ rating are amber-filled; the rest are `paper2`. Star glyph is `ink` fill/stroke.
  - Feedback tag chips (Inter 12, radius 999): "Great convo", "Clean car", "Knew shortcuts", "On time". Toggle ink/paper on tap.
- Tip card (ink, radius 20, paper text):
  - "Add a tip" Archivo 900 20 + "100% TO DRIVER" mono 10 amber
  - 5 tip pills (equal flex, 54 tall): $0, $2, $3, $5, Other. Selected = amber bg / ink text; others = `ink2` bg / paper text.
  - **Selecting a tip updates the total in the hero banner in real time**.
- Primary CTA: "SUBMIT · $XX.XX TOTAL" — total = fare ($12) + selected tip.

**Behavior:**
- Tap star → set rating (1–5)
- Tap tag → toggle in/out of feedback set
- Tap tip → set tip; recompute total
- Submit → go to `home`

---

### 9. Schedule ahead (`schedule`)

**Layout:** Paper background, scrollable. Header with title, day picker, time picker, trip summary, CTA.

**Components:**
- Header: back button + "Book ahead" Archivo 900 22, then "Airport, / Saturday." Archivo 900 / 48px letter-spacing -2 (day name updates with picker).
- Day picker: 7 equal-flex tiles, 72 tall, radius 12.
  - Selected: ink bg, paper text, amber 5×5 dot underline
  - Unselected: white bg, ink text, 1px border
  - Each shows day-of-week caps (mono 9) + date (Archivo 900 20)
- Time picker: white card (radius 20), horizontal scrollable strip of 8 time pills (5:30 through 7:30). Selected: amber bg, larger size (26px), Archivo 900. Others: transparent, Archivo 700 18, mute.
- Sub-card: `paper` bg, 14/16 padding, radius 12 — clock icon + date subtitle + "6:30 AM pickup" Archivo 900 18 + "LOCKED IN" mono chip amber.
- Trip summary: ink card (paper text), pickup dot/line/square + "1121 E Park Ave" / "TLH Airport · Flat $28".
- CTA: "SCHEDULE FOR SAT" (matches selected day)

**Behavior:**
- Tap day → set day index (updates title + subtitle)
- Tap time → set time index
- Schedule → confirm & go to `home`

---

### 10. Ride history (`history`)

**Layout:** Paper. Header with title + summary card, then scrolling trip list.

**Components:**
- Header: "PAST 30 DAYS" mono 11 muted, "Your trips" Archivo 900 34, filter icon button
- Summary card (ink): three stats laid out as columns
  - SPENT $142 (Archivo 900 32)
  - RIDES 11 (Archivo 900 32)
  - FAV DRIVER · Damarcus · 8× (Archivo 900 18) — right-aligned
- Trip rows (5 total):
  - 46×46 icon tile (radius 12) — amber for the most recent, white for older
  - Date tag mono 9 + optional tag pill (e.g. FLAT for airport)
  - Title Archivo 800 16 + "from X · Driver Name" Inter 12 muted
  - Fare Archivo 900 18 (right-aligned)
- Trip data:
  | Date       | Destination                 | From    | Driver     | Fare    | Tag  |
  |------------|-----------------------------|---------|------------|---------|------|
  | YESTERDAY  | Doak Campbell Stadium       | Home    | Damarcus   | $12.00  | —    |
  | NOV 4      | TLH Airport                 | Home    | Damarcus   | $28.00  | FLAT |
  | OCT 28     | The Moon                    | Midtown | Marcus C.  | $14.50  | —    |
  | OCT 24     | Publix Betton Place         | Home    | Damarcus   | $8.00   | —    |
  | OCT 18     | Governor's Square           | Work    | Alicia T.  | $11.75  | —    |

**Behavior:**
- Tap trip → push `complete` (in production: dedicated receipt screen)
- Filter → filter UI (out of scope)

---

### 11. Account (`profile`)

**Layout:** Paper base. Ink hero at top with big amber avatar; grouped setting lists below.

**Components:**
- Hero (ink bg, decorative rotated amber square with 0.15 opacity in top-right):
  - 64×64 amber tile "KJ" (Archivo 900 26)
  - "Kayla Johnson" Archivo 900 24 + "MEMBER · SINCE 2023" mono 11 amber
  - 3 stat pills: RIDES 47, RATING 4.9★, REFERRAL "Give $5, get $5" (amber pill on right, wider)
- Grouped lists (title in mono 10 muted, cards white with radius 16 and inner dividers):
  - PAYMENT — Visa · 4821 (DEFAULT pill), Cash to driver, Venmo · @kayla-j
  - SAVED PLACES — Home / Work / Mom's (icon tiles `paper2`)
  - ACCOUNT — Notifications, Safety toolkit, Call Damarcus (with "850·727·4142" trailing)
- Row template: icon tile 40×30 (payment) or 36×36 (place/setting) + title Archivo 700 15 + subtitle Inter 11 muted + trailing chev

**Behavior:**
- Tap any row → dedicated detail screen (out of scope, prototype uses alert)

---

### 12. Driver home (`driverHome`)

**Layout:** Dark. Faint background map, gradient-faded. Identity strip top, gigantic online-status card, earnings card, next-scheduled peek at bottom.

**Components:**
- Identity strip: 44×44 amber "DJ" tile + "DRIVER · TALLAHASSEE" mono 9 amber + "Damarcus J." Archivo 900 16 + rating chip (star + 4.98)
- Online card: **amber gradient** (`linear-gradient(135deg, amber, amberDk)`), radius 28, padding 28/24. Decorative 200×200 dark circle top-right (opacity 0.06).
  - "STATUS · ONLINE" mono 11
  - "Accepting rides" Archivo 900 / 42px letter-spacing -1.5
  - Sub row: demand text + big 68×68 power button (ink bg, amber icon)
- **Tapping this card simulates an incoming ride request** → push `driverReq`
- Earnings card (`ink2`, radius 22):
  - "TODAY · THU" mono 10 amber + "$247.50" Archivo 900 / 52px letter-spacing -2 (".50" muted small)
  - Right: "ONLINE / 6h 22m"
  - 3-column mini stats: TRIPS 14 · TIPS $34 · MILES 62 (Archivo 900 22)
  - Mini bar chart (13 hour bars, 40 tall) — one bar amber (peak), rest `ink3`
- Bottom peek card (white on dark): calendar icon tile + "NEXT SCHEDULED · SAT 6:30 AM / Kayla J. → TLH Airport" + "$28" — tap → push `earnings`

**Behavior:**
- Tap online card → push `driverReq`
- Tap peek → push `earnings`

---

### 13. Ride request (`driverReq`)

**Layout:** Modal-feeling overlay on faint map. Countdown ring at top, request card as bottom sheet.

**Components:**
- Countdown ring: 96×96 conic-gradient (amber → transparent) that decreases with time. Inner 78×78 ink circle with "12s" Archivo 900 36. Amber caption "NEW REQUEST" mono 11.
- **12-second live countdown**. When timer hits 0 → auto-decline (`nav.pop`).
- Request card (white, radius 26, deep shadow):
  - Header row: Left: "ESTIMATED FARE / $28.00" (Archivo 900 / 64px). Right: two stacked pills: "AIRPORT · FLAT" (amber) + "SCHEDULED 6:30" (ink)
  - Route stack: dot/line/square gutter + pickup ("PICKUP · 4 MIN · 1.2 MI" / "1121 E Park Ave") + drop ("DROP · TLH AIRPORT" / "3300 Capital Cir SW") + trip stats "22 min / 9.4 mi"
  - Rider strip (`paper` bg, radius 12): 34×34 ink tile "KJ" + "Kayla J. · 3rd ride with you" + rating "★ 4.94 rider · 1 checked bag"
  - Action row: DECLINE (84 wide, `paper2` bg, ink text) + ACCEPT (flex, ink bg, amber text, arrow icon)

**Behavior:**
- Countdown: decrement `sec` every 1000ms; at 0 → `nav.pop()`
- DECLINE → pop
- ACCEPT → go `driverNav` (replaces the request in the stack)

---

### 14. Navigate (`driverNav`)

**Layout:** Three fixed regions — turn instruction (top 200px, ink), map (middle), pickup card (bottom).

**Components:**
- Turn banner: 88×88 amber tile with left-turn arrow SVG + "0.3 mi" Archivo 900 / 46px + "Turn left onto **N Monroe**" (N Monroe in amber)
- Map region: MapCanvas showing driver near a pickup
- Pickup card (white, radius 22): 54×54 ink tile "KJ" + "PICKING UP / Kayla Johnson / 1121 E Park Ave · Apt 2B" + "4 MIN" amber chip. Action row: TEXT + CALL + **ARRIVED** (ink bg amber text, wider). ARRIVED → go `driverTrip`.

**Behavior:**
- TEXT/CALL → open respective sheets
- ARRIVED → go `driverTrip`

---

### 15. Trip in progress (`driverTrip`)

**Layout:** Map top, HUD row at top, action card at bottom.

**Components:**
- HUD row: speed pill (ink bg, "34 / MPH", stacked, Archivo 900 32) + next-turn pill (amber bg, turn arrow + "0.8 mi / Left on Gaines St")
- Trip card (`ink2`, radius 22):
  - Row: DROP amber chip + "Doak Campbell Stadium / Kayla J. · Trip #4821"
  - 3-col stats: ETA 8:34 / LEFT 12 min / FARE $12 (all Archivo 900 28)
  - **Swipe-to-complete slider**: 52 tall, `ink3` track, amber fill grows with drag, 52-wide paper knob with arrow icon. When swipe > 80% → snap to 100% and navigate to `driverHome` after 300ms.

**Behavior:**
- Slider is a real horizontal drag interaction. On mouse/touch down, capture start X; on move, update `swipe` percentage (0–100); on release, if > 80% → complete, else spring back to 0.

**Native implementation:** Use `PanGestureHandler` (React Native Reanimated) or `DragGesture` (SwiftUI).

---

### 16. Earnings (`earnings`)

**Layout:** Paper base. Ink header with big weekly total + 7-day chart. Below: breakdown list, instant cash-out, regulars carousel.

**Components:**
- Header (ink): top-edge checker stripe (12 tall) + "WEEK · NOV 4–10" mono 11 amber + "$806.50" Archivo 900 / 72px letter-spacing -3 (".50" amber small) + "Payout Tuesday · Chase ···4821" caption
- 7-day chart: bars for Mon–Sun. Non-zero days: solid `ink3`; today (Thu) amber; future days: transparent with dashed `ink3` outline. Labels below in mono 10.
- Breakdown list (white card, dividers):
  | Line          | Value      | Sub                    | Highlight |
  |---------------|------------|------------------------|-----------|
  | Ride fares    | $672.00    | 38 trips               | —         |
  | Tips          | $104.50    | From 27 riders         | amberDk   |
  | Airport flat  | $56.00     | 2 trips                | —         |
  | Fees          | − $26.00   | Platform + payment     | —         |
- Cash-out banner: amber bg, radius 20, dark tile with amber $ icon + "AVAILABLE NOW / Cash out $412.50" + chev
- Regulars: horizontal scroll of 4 rider cards (min-width 110): initials avatar + name + "N RIDES" mono amberDk

**Behavior:**
- Cash out → confirmation flow (out of scope, alert in prototype)

---

## Global Components

### Map (`MapCanvas`)

The prototype uses an SVG-based stylized dark map. **Replace with real map SDK** using this dark style:

- Land: `#141417`
- Streets: `#2A2A2E` (secondary) / `#3A3A3F` (highway)
- Water: `#0F1B26`
- Park / green space: `#1B2A1E`
- Route line (amber, 5px, rounded caps): `#FFB400`
- Route shadow: `rgba(0,0,0,0.5)`, 7px behind
- Text labels (neighborhoods): `#3F3F44`, mono 9

**Markers:**
- Pickup: 20×20 white circle + 10×10 ink inner
- Destination: 14×14 ink square with 2px white border, with two 5×5 amber squares inset (checker-flag reference)
- Driver: 24×24 amber circle with soft glow ring (36×36 amber @ 0.25 opacity), containing an inverted ink triangle (heading indicator)

### Tab bar (`TabBarProto`)

- Position: floating pill at bottom, left/right 12, bottom 26, height 68
- Bg: white (or `ink2` on dark mode), radius 24, shadow `0 12px 40px rgba(0,0,0,0.18)`
- 4 tabs (passenger): Ride / Plan / Trips / Account. Icons + labels.
- 2 tabs (driver): Drive / Earnings
- Active state: icon inside a 44×30 amber rounded rect (radius 999)
- Label: mono 10 caps, letter-spacing 0.3
- Press feedback: scale 0.95

### Primary button (`PrimaryButton`)

- Full-width, height 60 (or 52 dense), radius 16
- amber bg, ink text, Archivo 900 / 18px, letter-spacing 0.2
- Shadow: `0 6px 0 rgba(226,154,0,0.9), 0 12px 30px rgba(255,180,0,0.35)` (creates a "stepped" 3D look)

### Tappable wrapper (`Tap`)

Every interactive element in the prototype uses:
- `cursor: pointer`
- Press feedback: `transform: scale(0.97)` on mousedown/touchstart
- Transition: `transform 0.08s ease-out`

In native, use `Pressable` with a `pressed` opacity or scale variant; iOS `Button` with `ButtonStyle`; Android `Modifier.clickable` + scale animation.

---

## Interactions & Transitions

- **Route push**: fade + slide 30px from right, 280ms, ease-out
- **Route pop**: fade + slide 30px from left, 280ms, ease-out
- **Route replace** (`nav.go`): same as push
- **Press feedback**: 97% scale, 80ms ease-out
- **Toggle**: knob slides 12px, 150ms ease; bg color crossfades 150ms
- **Ride option selection**: bg (paper→ink) + text (ink→paper) cross-fade 150ms
- **Star rating**: bg crossfade 150ms; no bounce
- **Countdown ring**: conic gradient percent updates 500ms linear per tick
- **Pulsing indicator dot**: 2-step animation, 1.6s infinite (opacity 1 ↔ 0.35)
- **Swipe-to-complete knob**: follows finger at 0ms; on release, if > 80% animates to 100% then navigates; else springs back to 0 at 200ms ease

---

## State Management

### Passenger flow state

- `currentRoute` — router stack (array of route keys); push/pop navigation
- `mode` — `'passenger' | 'driver'`
- `activeTab` — current tab key
- `rideOptions` — `{ tier: 'std' | 'xl' | 'apt' | 'evt', forOther: bool, multiStop: bool }`
- `destinationText` — string (from where-to input)
- `rating` — 1–5
- `feedbackTags` — Set of strings
- `tipIndex` — 0–4 index into tip options
- `scheduleDay` — 0–6 index into week days
- `scheduleTime` — 0–7 index into time options

### Driver flow state

- `online` — bool
- `requestCountdown` — number of seconds remaining on request (12 → 0, auto-decline)
- `swipeProgress` — 0–100 on trip completion slider

### Persistence

The prototype uses `localStorage` under key `damarcus.proto.v1` to persist `{stack, mode, tab}` so refresh preserves position. In production:
- **Auth** → secure token storage (Keychain / EncryptedSharedPreferences / SecureStore)
- **User profile** → API-backed
- **In-flight ride** → server-authoritative state; client polls or subscribes over WebSocket / push notification
- **Trip history** → paginated API
- **Saved places / payment methods** → API-backed

### Data model (suggested backend surface)

```ts
type RideRequest = {
  id: string;
  pickup: { address: string; lat: number; lng: number };
  destination: { address: string; lat: number; lng: number };
  tier: 'standard' | 'xl' | 'airport' | 'event';
  forOther?: { name: string; phone: string };
  multiStop?: Array<{ address: string; lat: number; lng: number }>;
  scheduledAt?: string; // ISO
  paymentMethod: 'card' | 'cash' | 'venmo';
  estimatedFare: number;
  estimatedDuration: number; // min
  estimatedDistance: number; // mi
};

type ActiveRide = {
  id: string;
  status: 'accepted' | 'en_route' | 'arrived' | 'in_trip' | 'completed' | 'cancelled';
  driver: {
    id: string; name: string; rating: number; totalRides: number;
    vehicle: { make: string; model: string; color: string; plate: string };
    location: { lat: number; lng: number; heading: number };
  };
  passenger: { id: string; name: string; rating: number };
  eta: number; // min
  fare: number;
  tip?: number;
  route: Array<{ lat: number; lng: number }>;
};

type Driver = {
  id: string; name: string; rating: number;
  online: boolean;
  earnings: {
    today: { total: number; trips: number; tips: number; miles: number };
    week: { total: number; breakdown: { fares: number; tips: number; airportFlat: number; fees: number }; days: number[] };
  };
  regulars: Array<{ riderId: string; name: string; rideCount: number }>;
};
```

---

## Assets

Nothing binary in this bundle — all UI is code + SVG.

**Icons**: Custom stroked icons defined inline in `brand.jsx` (see `Icons` object). 22 icons total. In production, replace with an icon library (Lucide, Phosphor, or Heroicons work well) — the design uses a chunky stroked style, stroke-width 2, round caps/joins.

**Fonts**: Google Fonts CDN — Archivo, Inter, JetBrains Mono. In native, bundle these as font files.

**Logo**: The "DAMARCUS" wordmark is typeset in Archivo 900 with a preceding amber square containing a `D`. No image file.

**Vehicle imagery**: The Booked screen uses a placeholder tile with a car icon. **Damarcus should supply real vehicle photos** for production.

**Driver photos**: All driver "avatars" are initials on colored tiles (KJ, DJ). Real driver photos should be uploaded through a driver-onboarding flow.

**Map imagery**: Replace SVG placeholder with real map SDK (Mapbox, Google Maps, Apple MapKit).

---

## Copy & Voice Guidelines

The app has a distinct voice — **first-name basis, warm, human, low on jargon**. Preserve these examples verbatim; use them as tone anchors when writing new copy:

**Do:**
- "Damarcus is 4 min out."
- "Taking Gaines to skip the game traffic 👍"
- "You made it. Nice one."
- "Evening, Kayla. Where to?"
- "Book by phone: 850·727·4142"

**Don't:**
- "Your driver has arrived at the pickup location."
- "Fare estimation is now displayed."
- "Trip session initiated."

Business specifics baked in:
- Company: Damarcus taxi service
- Location: Tallahassee, FL
- Established: 2019
- Phone: 850·727·4142 (placeholder — replace with real number)
- Fleet references: Silver Toyota Camry, license DMC-421 (placeholder plate)
- Sample driver: Damarcus J. (owner), rating 4.98, 2,847 rides
- Sample rider: Kayla Johnson, rating 4.9, 47 rides

---

## Files

The design bundle includes the following files in `source/`:

- `Damarcus Taxi Prototype.html` — Main entry point, clickable prototype with router + phone frame + guide rail (external developer reference)
- `brand.jsx` — Brand tokens (`DAM` object), icons (`Icons`), map component (`MapCanvas`), reusable UI primitives (`Pill`, `PrimaryButton`, `Wordmark`, `CheckerCorner`)
- `proto_shell.jsx` — Router (`useRouter`), phone frame chrome (`PhoneFrame`), tab bar (`TabBarProto`), tappable wrapper (`Tap`), guide rail, screen hints
- `routes_pax.jsx` — Passenger routes 1–5 (welcome, home, whereto, rideoptions, booked)
- `routes_pax_b.jsx` — Passenger routes 6–11 (tracking, intrip, complete, schedule, history, profile)
- `routes_driver.jsx` — Driver routes 12–16 (driverHome, driverReq, driverNav, driverTrip, earnings)
- `ios_frame.jsx` — iOS device chrome (status bar) used by the prototype

Also included in the project root (not needed for handoff, but useful for reference):
- `Damarcus Taxi.html` — Original design-canvas view of all 16 screens laid out side-by-side (Figma-style board)

---

## Implementation Recommendations

1. **Frameworks:** React Native + Expo for cross-platform; native swap-in later if needed. For maps, use `react-native-maps` (Google Maps / MapKit under the hood). For gestures (swipe-to-complete), use `react-native-gesture-handler` + `react-native-reanimated`.
2. **Routing:** File-based (Expo Router) or React Navigation stack navigator. Model each of the 16 screens as a route.
3. **State:** Zustand or Redux Toolkit for global state (auth, active ride). React Query / TanStack Query for server state.
4. **Real-time:** WebSocket or Firebase Realtime Database / Pusher for driver location and trip status.
5. **Payments:** Stripe (card), Venmo API for that flow, plus a manual "cash to driver" path on the driver side.
6. **Notifications:** Expo Notifications / FCM for ride status pushes and driver request pings.
7. **Testing priority:** The booking flow (Home → Whereto → Rideoptions → Booked → Tracking → InTrip → Complete) is the critical path — E2E-test it before touching the driver app.
8. **Accessibility:** The design uses very high type sizes and strong contrast — good starting point. Ensure the swipe-to-complete has an accessible tap-to-complete fallback. All amber-on-ink and ink-on-amber combinations pass WCAG AA. Amber-on-paper (`#FFB400` on `#F5F1EA`) does **not** — don't put amber text on paper.

---

## Open Questions for Damarcus

Flagging for follow-up:
1. Real business phone number & operating hours
2. Actual driver roster + photos + vehicle info
3. Definitive service tiers & pricing (Standard/XL/Airport/Event were chosen from services list — confirm pricing model)
4. Payment processor decision (Stripe vs. alternative)
5. Whether "Damarcus" is the driver himself or a business name (the app assumes he's a driver — the "Owner" tag on his profile card is a distinctive feature that only works if he drives)
6. Whether the "Share ride with family" feature needs SMS integration or just a shareable web URL
7. Airport flat rate — is $28 real or illustrative?
