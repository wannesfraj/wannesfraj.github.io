# Page brief — unified engineering portfolio

- Stage: existing portfolio, user-requested visual and information-architecture refinement.
- Users: technical recruiters, engineering teams and internship supervisors.
- Primary task: browse one shared project collection, open a project detail page and download a CV.
- Entry: index.html opens with the human-and-robot hand connection and a centered 0–100% loader, then presents the homepage content.
- First decision: open a project from the unified collection or download a CV.
- Skills: keep an Edge AI & Robotics row and an AI row, with the technologies requested by the user in their matching row.
- Shared identity: biography, education, work experience, IEEE volunteering and direct contact remain on the homepage.
- Success: one clear project list, direct routes to project details, visible human-and-robot artwork on project pages, and working CV downloads.
- Recovery: skip the entry animation, use reduced-motion settings, follow direct links, or use browser Back.
- Mobile primary action: open a project card from the one-column collection; the header keeps one My projects link.
- Temperament: immersive, dimensional, technical; inspired by the supplied CSTAM reference.
- Foundation: semantic HTML, shared custom CSS, small progressive JavaScript. Native links rather than a JavaScript-only view switcher.
- Risks: blocking access if the entry image or script fails, low contrast, or project links opening without visible content.
- Verification: direct project links, one homepage card per distinct project, reduced-motion and no-JavaScript entry behavior, keyboard access and responsive layouts.

Claims remain sourced from the supplied CVs and original portfolio. Autonomous Vehicle Navigation and Intelligent Mobile Manipulator are preserved from the original portfolio. The home collection lists CubeSat Thermal Prediction once.

## Revised entry and journey - 2026-09-19

The user prioritized immediate project discoverability. Entry is now a compact identity hero followed by My projects, with a persistent Projects header link. Domain panels describe real work and open the relevant #projects anchor. Project categories remain separate. Both domain routes show projects before technology inventories. See PROJECT_DISCOVERY_REVIEW.md for verified positions and audit coverage.

## Homepage skills ordering - user correction, 2026-09-19

The homepage now shows Skills & technologies between the compact introduction and My projects. Edge AI & Robotics occupies the first horizontal row (17 existing technologies); AI & Automation occupies the second (21 existing technologies). Each row keeps its icons and text on one line with native horizontal scrolling, keyboard focus and no JavaScript requirement. Mobile labels sit above their respective single-line rails. Full skill sections remain on their domain pages. This explicit ordering supersedes the immediately-adjacent introduction/projects layout in the preceding review; its prior first-screen project coordinates are historical.

## Moving homepage skill rows - user correction, 2026-09-19

Both homepage skill rows now move continuously and independently, matching the earlier domain skill rails. home-skills.js adds seamless loops with mouse dragging, native touch/trackpad scrolling and Left/Right/Home/End keyboard navigation. Hover/focus and manual interaction pause motion; Space allows explicit pause/resume. Rows stop when offscreen or the document is hidden. Reduced motion shows only the original items with manual browsing. Without JavaScript, the same two single-line lists remain natively scrollable. Browser checks passed for both automatic loops, independent hover pause, dragging, keyboard navigation, Space, offscreen pause, touch swipes and reduced-motion fallback.

## Homepage entry and unified project collection - user correction, 2026-10-12

The homepage starts with the human-and-robot hand connection and a 0–100% progress indicator that follows the animation. Visitors can skip the intro. Reduced-motion settings bypass it, and JavaScript-disabled visits show the page without a loader. The existing hand animation is no longer played again on the Edge AI & Robotics landing page.

My projects is one grid containing six distinct projects, each linking directly to its detail page. CubeSat Thermal Prediction appears once. A single My projects link replaces the Edge AI & Robotics and AI & Automation header tabs. The centered loader follows the supplied 0–100% reference, the human-and-robot image appears on each project detail, and Experience appears before My projects.
