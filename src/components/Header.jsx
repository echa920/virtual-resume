import { profile } from '../resumeData'

// Files in public/ are served under the configured base path, which is not '/'
// on GitHub Pages. Vite rewrites absolute asset paths in index.html but not in
// JS strings, so join against BASE_URL by hand or the image 404s once deployed.
function assetUrl(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

export default function Header() {
  return (
    <header className="header">
      <div className="identity">
        {profile.photo ? (
          <img
            className="avatar"
            src={assetUrl(profile.photo)}
            alt={profile.name}
          />
        ) : null}

        <div>
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
          {profile.badge ? <p className="badge">{profile.badge}</p> : null}
        </div>
      </div>

      <p className="summary">{profile.summary}</p>

      <ul className="contact">
        <li>{profile.location}</li>
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        {profile.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
