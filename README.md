# virtual-resume

An interactive college application portfolio built with React and Vite. Four
categories — Academic, Charitable, Extracurricular, Outdoor — each with a list of
activities you click to read in depth.

The point of the site is the gap it fills: the Common App gives you **150
characters** to describe an activity. This holds the 150-character version *and*
the full story behind it, so a link in your application goes somewhere useful.

## Editing your content

Everything lives in [`src/portfolioData.js`](src/portfolioData.js). You should not
need to touch a component.

The file currently contains **sample data** — invented activities used to show the
layout. Replace all of it.

### Per-activity fields

Fields that map onto the Common App Activities section, with its real limits:

| Field | Common App limit |
| --- | --- |
| `type` | Must be one of `ACTIVITY_TYPES` (the form's dropdown) |
| `position` | 50 characters |
| `organization` | 100 characters |
| `description` | 150 characters |
| `grades` | Any of `9, 10, 11, 12` |
| `timing` | Values from `TIMING` |
| `hoursPerWeek`, `weeksPerYear` | Numbers |
| `continueInCollege` | Boolean |

Website-only fields, with no length limit — this is where the depth goes:

| Field | Renders as |
| --- | --- |
| `detail` | Array of paragraphs, the main narrative |
| `highlights` | Short bulleted outcomes above the narrative |
| `photos` | `{ src, caption }` grid |

The site shows a live character count next to each capped field and turns it red
when you're over, so you can write here and paste into the form with confidence.
Each capped field also has a **Copy** button.

The Common App accepts **10 activities**; the header counts yours and warns if you
list more.

## Adding photos

Put images in [`public/`](public/) and reference them by filename:

```js
photos: [{ src: 'robotics-team.jpg', caption: 'State finals, spring 2026' }],
```

Same for your headshot — set `profile.photo`. A leading `/` is optional; paths are
joined against Vite's `BASE_URL` so they resolve both locally and on GitHub Pages.

## Running locally

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Notes

- Light and dark themes follow the OS setting.
- Category tabs are a proper ARIA tablist — arrow keys, Home and End all work.
- **Printing expands everything.** On screen you see one activity at a time; in
  print every activity in every category is revealed, one category per page. So
  Ctrl+P produces a complete activities packet, not a screenshot of what happened
  to be open.
- `vite.config.js` sets `base: '/virtual-resume/'` for GitHub Pages. Change it to
  `'/'` for a custom domain.

## Photos and video

Each activity has a `media` array. Three kinds of item:

```js
media: [
  { type: 'image', src: 'robotics-team.jpg', caption: 'VEX regional, 2025' },
  { type: 'video', src: 'clip.mp4', poster: 'still.jpg', caption: 'Newscast open' },
  { type: 'embed', src: 'https://www.youtube.com/embed/VIDEO_ID', caption: 'Full episode' },
]
```

Files for `image` and `video` go in [`public/`](public/) and are referenced by
filename. `embed` takes a full YouTube or Vimeo **embed** URL — note `/embed/`,
not the `watch?v=` address from the browser bar.

Images sit in a grid; embeds span the full width, since a thumbnail-sized player
is unusable.

### Keep video out of the repo

Git stores every version of a binary forever, so a committed video bloats the
repo permanently even after deletion. GitHub also rejects files over 100 MB, and
Pages sites are capped at 1 GB with a 100 GB/month bandwidth limit.

- **Long video** — upload to YouTube as *Unlisted* and use `type: 'embed'`.
  Unlisted means link-only, same as this site.
- **Short clip** under ~10 MB — `type: 'video'` in `public/` is fine. Give it a
  `poster` image so the page does not load megabytes before anyone presses play.
- **Photos** — resize to about 1600px on the long edge and save as JPEG. A phone
  photo is often 5 MB and looks identical at 400 KB.
