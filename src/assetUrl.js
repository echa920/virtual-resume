// Files in public/ are served under the configured base path, which is not '/'
// on GitHub Pages. Vite rewrites absolute asset paths in index.html but not in
// JS strings, so join against BASE_URL by hand or the image 404s once deployed.
export default function assetUrl(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
