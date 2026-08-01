# virtual-resume

A single-page virtual resume built with React and Vite.

## Editing your resume

All content lives in one file — [`src/resumeData.js`](src/resumeData.js). Edit the
text there and the page updates; you shouldn't need to touch the components.

| Export | Renders as |
| --- | --- |
| `profile` | Name, title, summary, contact links |
| `experience` | Experience entries with bullet points |
| `projects` | Project cards |
| `skills` | Grouped skill tags |
| `education` | Education entries |

The values currently in that file are **placeholders** — replace them with your own.

### Adding a photo

Put the image file in [`public/`](public/) and point `profile.photo` at it:

```js
photo: '/headshot.jpg',   // file lives at public/headshot.jpg
```

Anything in `public/` is copied to the site root as-is, so the path never includes
`public`. A leading `/` is optional — the header joins the path against Vite's
`BASE_URL` so it resolves correctly both locally and on GitHub Pages.

Leave `photo: ''` and the header simply renders without an avatar. A square image
works best — it's cropped to a circle.

## Running locally

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Notes

- Light and dark themes both supported, following the OS setting.
- A print stylesheet is included, so **Ctrl+P → Save as PDF** produces a clean
  one-file resume.
- `vite.config.js` sets `base: '/virtual-resume/'` for GitHub Pages. Change it to
  `'/'` if you deploy to a custom domain or a `<user>.github.io` repo.
