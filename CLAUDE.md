# Keyur Pawaskar — portfolio

React 19 + Vite SPA in `web/`. Live at https://keyur-portfolio-psi.vercel.app — Vercel auto-deploys every push to `main`.

## Commands (run in `web/`)
- `npm run dev` — dev server on :5173 (also `.claude/launch.json` → "dev")
- `npm run lint` — must stay at zero errors
- `npm run build` — run before every push

## Where things live
- Content: `src/data/projectList.js` (projects + curated `displayOrder`), `src/data/experience.js`, `src/data/skills.js`, copy in `src/components/Mystory.jsx` and `src/pages/About.jsx`
- Design tokens (colors, fonts, glass, contrast): `src/index.css`
- Motion: springs and gesture math in `src/components/ui/physics.js`; reusable wrappers (`FadeIn`, `Reveal`, `Stagger*`) in `src/components/ui/Animations.jsx`
- Resume: `web/public/resume.pdf` (served at `/resume.pdf`)

## Design conventions (Apple fluid-interface principles)
- Motion uses the shared `spring` (critically damped) set as the default in `<MotionConfig>` in `App.jsx`. Use `flickSpring` (slight bounce) only after a user's own flick. No eased tweens, no `mode="wait"` page exits.
- Animate only `transform`/`opacity`. Never `transition: all`; never animate width/height.
- Press feedback is instant (`:active` scale in `index.css`); hover transforms go inside `@media (hover: hover)`.
- Font sizes in `rem`. Tracking/leading tighten as headings grow (rules in `index.css`).
- Navbar switches to the menu button at 1200px — the value lives in both `Navbar.jsx` (`MOBILE`) and `Navbar.css`; change both.
- Respect `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast`. Keep Lighthouse accessibility at 100.
- No loading shimmer/working states unless a wait is longer than ~300ms.

## Content guardrails (copy is about a real person — never fabricate)
- Only state facts Keyur has provided. If a claim isn't sourced, don't add it.
- YouGov: use only the four approved bullets in `experience.js`. Never reintroduce "90%", "security tools", or "compliance".
- No overselling ("deep", "expert", "world-class"), no name-dropping big companies, no presumed activities (e.g. open-source contributions).
- Work authorization: the only allowed phrasing is "authorized to work in the US". Never lead with sponsorship/OPT.
- Site copy, `experience.js`, and `resume.pdf` must tell the same story with the same numbers.

## Git
- Commit straight to `main`. No `Co-Authored-By: Claude` trailers.
