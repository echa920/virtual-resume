import { profile } from '../resumeData'

export default function Header() {
  return (
    <header className="header">
      <h1 className="name">{profile.name}</h1>
      <p className="title">{profile.title}</p>
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
