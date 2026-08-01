# virtual-resume

Interactive college application portfolio for Pablo Echavarria Builes, applying
Fall 2027, intended major Computer Science. First-generation Colombian.

Despite the repo name, this is **not** a job resume — it was pivoted to a college
application portfolio. Don't reintroduce job-resume framing.

## Purpose

The Common App allows 150 characters per activity description. This site holds the
150-character version *and* the full story behind it, so a link in an application
goes somewhere worth reading.

## Architecture

- All content lives in `src/portfolioData.js`. Content edits should never require
  touching a component.
- Four categories (`academic`, `service`, `extracurricular`, `outdoor`) shown as an
  ARIA tablist with roving arrow-key focus, then a master-detail split: activity
  list left, full detail right.
- Each activity carries Common App fields (`type` from `ACTIVITY_TYPES`, `position`
  50ch, `organization` 100ch, `description` 150ch, `grades`, `timing`,
  `hoursPerWeek`, `weeksPerYear`, `continueInCollege`) plus unlimited website-only
  fields (`detail`, `highlights`, `photos`).
- `CommonAppFields.jsx` renders live character counters against the real caps and
  copy buttons, so the site is where you draft and the form is where you paste.

## Things that will bite you

- **`base: '/virtual-resume/'`** is set in `vite.config.js` for GitHub Pages. Vite
  rewrites absolute asset paths in `index.html` but *not* in JS strings, so any
  `public/` asset referenced from JS must go through `src/assetUrl.js`. A bare
  `/photo.jpg` silently 404s only once deployed.
- **Panels and details stay mounted, hidden via the `hidden` attribute**, not
  unmounted. This is deliberate: the print stylesheet overrides `[hidden]` to
  reveal every activity in every category, one category per page. Switching to
  conditional rendering would silently break printing.
- `ActivityList.jsx` must only export a component — `gradeRange` lives in
  `src/gradeRange.js` because oxlint's `react(only-export-components)` rule flags
  mixed exports.
- Semantic `--danger*` tokens are separate from `--accent` on purpose; warnings
  should not read as branding.

## Status

`src/portfolioData.js` currently holds **invented sample data** — 10 activities
sized to show how real text behaves. Pablo will replace it with real content and
photos. Do not present the sample activities as his real history.

## Commands

```bash
npm run dev      # http://localhost:5173/virtual-resume/
npm run build
npm run lint     # oxlint, must stay clean
```

GitHub Pages is **not** set up yet.
