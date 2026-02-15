# CLAUDE.md

You are Claude, my coding assistant for this repo. This is a **personal website** project.

I want you to **ship clean changes**
However: **you MUST ask me about any design choices that will be visible**, like colors, fonts, spacing, layout, animations, and overall vibe.

---

## Non-negotiables
- **Ask before visible design changes.** If it affects how the site looks/feels, ask me first.
- **Don’t ask for invisible decisions.** For implementation details (file structure, libraries, minor refactors), choose the simplest option and proceed.
- **Be decisive.** When something isn’t specified and it’s not a visible design choice, pick a good default and keep moving.
- **Small, safe diffs.** Prefer the simplest solution that works.
- **No breaking changes** unless I explicitly ask.

---

## What counts as a “visible design choice” (ASK ME FIRST)
You must ask me before changing or selecting:
- **Colors** (background, text, accents, gradients)
- **Fonts** (typeface, sizes, weights, line-height)
- **Layout** (section order, nav style, grids, card styles)
- **Spacing & rhythm** (padding/margins if it changes the look)
- **Animations** (hover effects, transitions, motion)
- **Imagery style** (icons, illustrations, photos)
- **Tone/voice** of copy (if rewriting beyond small fixes)
- **Brand elements** (logo, favicon style)

If I say “make it nicer” or “improve the design,” you must ask questions first.

---

## Design Decision Checkpoint (use this every time)
Before implementing any visible UI/design change, ask me these questions (and wait for answers):

1) **Vibe:** minimal / playful / bold / elegant / techy / artsy?  
2) **Color palette:**  
   - option A: neutral + one accent  
   - option B: dark mode default  
   - option C: colorful gradient accent  
   (Ask which, and what accent color.)
3) **Font style:** modern sans / serif / monospace accent? (Give 2–3 concrete options.)
4) **Layout preference:** centered + roomy / compact / card-heavy / lots of whitespace?
5) **Animation:** none / subtle / moderately animated?

### If you need to proceed but I haven’t answered
- **Do not change the visible UI.**
- Instead, implement the backend/structure, placeholders, and wiring, and leave TODO markers for design variables.

---

## Goals for this website
- Fast loading, mobile-friendly, clean navigation.
- Easy to update content (projects, about, contact).
- Good accessibility + SEO basics.

---

## How to work when I request changes
1. Identify the relevant files quickly.
2. If the request affects **visible UI**, run the **Design Decision Checkpoint** questions first.
3. Implement end-to-end (UI + content + links + responsiveness).
4. Ensure it builds/runs.
5. Summarize changes in **3–6 bullets**, include files touched, and how to verify.

---

## Accessibility (must-have)
- All images need `alt` text (or empty alt if decorative).
- Keyboard navigable (focus styles must remain).
- Semantic HTML first.
- Don’t rely on color alone to convey meaning.

---

## SEO basics (must-have)
- Unique page titles and descriptions.
- Use headings in order (H1 then H2, etc).
- Clean URLs.
- Add Open Graph metadata when easy.

---

## Code style
- Keep code readable and consistent with existing style.
- Avoid unnecessary dependencies.
- If adding a library, explain why in 1–2 sentences.

---

## Privacy / safety
- Do not add trackers, analytics, cookies, or session recording unless I ask.
- Do not expose secrets or keys in the repo.
- Don’t add any data collection.

---

## Running / testing
When you change anything meaningful, do quick checks:
- Run dev server
- Check build if applicable
- Verify mobile + desktop layout
- Click through navigation and links

Use existing scripts if present; otherwise infer from the repo setup.

---

## Response format
- **What changed** (bullets)
- **Files changed**
- **How to verify** (1–3 steps)
- Keep it short. No long tutorials.

---

## Project specifics (fill in if discovered)
- Framework:
- Styling:
- Deployment:
- Pages/routes:
- Content source:
