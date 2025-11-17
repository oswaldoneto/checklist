# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React app (Vite). Components live in `src/components/`, shared theming in `src/theme.js`, styles in `src/styles/`, and data loaders/mappings in `src/data/` (per-manufacturer folders plus `aircrafts.js` and `manufacturers.js` registries).
- `public/` contains static assets bundled by Vite. `dist/` is generated output from `npm run build`.
- `data/` (repo root) stores source checklist artifacts; keep edits synchronized with the compiled JS in `src/data/` if you update both.
- Entry points: `src/main.jsx` mounts `App` into `index.html`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server with hot reload.
- `npm run build` — produce production build in `dist/`.
- `npm run preview` — serve the built app locally for smoke checks.

## Coding Style & Naming Conventions
- Use React functional components and hooks; prefer MUI components and Emotion styling already in use. Tailwind config exists but is not primary.
- Indentation: 2 spaces; keep semicolons and single quotes consistent with current files.
- Data modules follow uppercase phase keys (`FLIGHT_PHASES`) and item IDs/titles in uppercase strings; file names are lowercase model identifiers (e.g., `src/data/cessna/c700.js`). Preserve the existing shape when adding aircraft.

## Testing Guidelines
- No automated test suite is present. Verify manually by running `npm run dev` or `npm run preview`; expand phases, check toggling, reset flow, and scroll/highlight behavior.
- When adding checklists, ensure every phase and item has unique `id` fields and that `aircrafts.js` registers the model with `available: true` and a `checklistImport` pointing to the module.

## Commit & Pull Request Guidelines
- Follow the existing history: concise, imperative subject lines that mention the aircraft or change (e.g., `Add Cessna 152 checklist`). Include issue or feature refs when relevant.
- For PRs, include: what changed, why, and how to verify (commands or navigation steps). Attach screenshots/GIFs when UI changes occur and link related issues.

## Adding or Updating Aircraft Data
- Create or edit the model file under the appropriate manufacturer folder in `src/data/`. Export a default object with `FLIGHT_PHASES` keyed by phase name, each containing `id` and `items`.
- Add the model to `src/data/aircrafts.js` with metadata (name, manufacturer, `available`) and lazy `checklistImport`. If adding a manufacturer, update `src/data/manufacturers.js` as well.
