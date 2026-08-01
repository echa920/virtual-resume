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
