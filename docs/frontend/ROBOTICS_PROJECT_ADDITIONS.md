# RoboDog and TOR project additions — 2026-11-19

The shared homepage collection now contains eight distinct projects. RoboDog and TOR 4.0 each have a homepage card, an entry on the existing robotics page and a dedicated detail page with GitHub links. TOR also links to the repository's video demonstration.

The user supplied the results: RoboDog was selected among the top two projects; the TOR team took fourth place. Selection is not described as second place. No event dates or measured performance results were added. Technical descriptions come from the two supplied repositories. Asset sources are recorded in assets/PROVENANCE.md.

The implementation reuses the existing static HTML, project cards, typography and human-and-robot wallpaper. Project metadata is now 12px and can wrap. Simulation covers retain their intrinsic aspect ratios on mobile. A pre-existing missing closing angle bracket in the robotics subnavigation was repaired; it had placed later sections inside the navigation and compressed the desktop layout.

## Observed verification

- Playwright with Microsoft Edge checked index.html, edge-ai.html and both new detail pages at 1440px, 390px and 320px: no horizontal page overflow, overflowing project text, broken images, local HTTP failures or JavaScript errors.
- The homepage contains eight project cards, with exactly one card for each new project. Both cards were opened and the return-to-projects navigation was exercised.
- Desktop and mobile screenshots of all four routes were inspected. The diagram uses contain sizing on the robotics card to keep its control paths visible.
- Homepage navigation and both detail pages remain usable without JavaScript. Browser checks used reduced motion.
- Static validation checked 159 local links, assets and fragment targets across the four routes, one h1 and unique IDs on each page, and the SVG's XML validity.
- git diff --check passed.

The mechanical design scan identified inherited styles as well as small card metadata. Metadata was corrected. The existing cyan lighting is part of the committed visual direction in DESIGN.md; the dark-glow detector exception is scoped to the four reviewed HTML files in .impeccable/config.json. Shared lighting styles were preserved. Other findings on unrelated existing content were outside this project-addition task.

## Requested quadruped photo

The user subsequently requested a quadruped photograph for RoboDog. Its homepage card, robotics card and detail cover now use a locally hosted WebP photograph of Spot by Jonte, credited and labeled illustrative in the detail caption with the CC BY-SA 4.0 license link. The diagram remains as an unused original asset. Playwright checked the three surfaces at 1440px and 390px: the image loads at 1280 × 853, with no page overflow or JavaScript errors. Desktop and mobile screenshots were inspected; the robot and its four feet remain visible. git diff --check passed.

## Higgsfield cover integrated

The current RoboDog cover is the professional orange-and-black illustration generated with Higgsfield from the user's MuJoCo screenshot. All three HTML image references now use `assets/robotics/robodog-mujoco-pro.webp`, a 101,970-byte display copy preserving the original 2048 × 1360 composition. The previous stock photograph remains an unused asset. The detail caption identifies the illustration and links directly to the unmodified simulation screenshot.

Playwright verified the homepage card, robotics card and detail cover at 1440px, 390px and 320px. All nine combinations loaded the new image, contained no old stock-photo reference and had no page overflow or JavaScript errors. The detail cover also loaded without JavaScript. Desktop and mobile screenshots were inspected, and git diff --check passed.

## PID, PPO and MuJoCo description

The user clarified that the team tested PID and PPO and trained the PPO policy in MuJoCo. The homepage category now reads Reinforcement Learning instead of Top 2 selection, and its description states the two approaches and the training environment. The robotics entry, detail introduction, tags, page metadata and technical sections are synchronized. The team selection remains recorded in the detail results. Browser checks at 1440px, 390px and 320px confirmed the requested terms on all three surfaces without clipped text or horizontal page overflow. Desktop and mobile screenshots were inspected; git diff --check passed.

## TOR cover and navigation category

The user supplied Webots cafe and LiDAR mapping screenshots and requested a Higgsfield cover using them. Both originals are preserved unchanged and linked from the detail caption. A GPT Image 2.6 illustration, job 9335584b-c52d-4358-b7a0-9e7b437b430d, now appears on the homepage card, robotics card and TOR detail page as a 248,982-byte WebP. The original generated PNG and exact generation settings are retained. The caption identifies the cover as an illustration inspired by the simulation.

The homepage category reads Autonomous Navigation with ROS 2 alongside it. The fourth-place result is in the description, and the detail introduction and tags follow the same hierarchy. The robotics card no longer overlays an award badge on the cover.

Browser verification covered all three surfaces at 1440px, 390px and 320px. Every case loaded the new image without page overflow, clipped copy or JavaScript errors. Both original screenshot links returned HTTP 200, and the cover works without JavaScript. Desktop and mobile screenshots were inspected. git diff --check passed.

## ROS 2 card labels and embedded TOR map

The Enova and RoboDog homepage cards now show ROS 2 in the right-hand metadata slot. The user's original LiDAR mapping screenshot is embedded in TOR's From sensing to navigation section, with its full aspect ratio, descriptive alternative text and a link to the full-size original. Browser checks at 1440px, 390px and 320px confirmed both labels, the loaded 1335 by 697 map and no horizontal overflow or clipped map figure. The full-size image link was exercised. Desktop and mobile screenshots were inspected, and git diff --check passed.
