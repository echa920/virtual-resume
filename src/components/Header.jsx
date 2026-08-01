import { profile, activities, ACTIVITY_LIMIT } from '../portfolioData'
import assetUrl from '../assetUrl'

export default function Header() {
  const annualHours = activities.reduce(
    (total, activity) => total + activity.hoursPerWeek * activity.weeksPerYear,
    0,
  )
  const overLimit = activities.length > ACTIVITY_LIMIT

  return (
    <header className="header">
      <div className="identity">
        {profile.photo ? (
          <img className="avatar" src={assetUrl(profile.photo)} alt={profile.name} />
        ) : null}

        <div>
          <h1 className="name">{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          {profile.badge ? <p className="badge">{profile.badge}</p> : null}
        </div>
      </div>

      <p className="intro">{profile.intro}</p>

      <ul className="contact">
        <li>
          {profile.highSchool} · Class of {profile.graduationYear}
        </li>
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

      <dl className="totals">
        <div className="total">
          <dt>Activities listed</dt>
          <dd className={overLimit ? 'num is-over' : 'num'}>
            {activities.length}
            <span className="of">of {ACTIVITY_LIMIT} allowed</span>
          </dd>
        </div>
        <div className="total">
          <dt>Hours per year, combined</dt>
          <dd className="num">{annualHours.toLocaleString('en-US')}</dd>
        </div>
      </dl>

      {overLimit ? (
        <p className="warn">
          The Common App accepts {ACTIVITY_LIMIT} activities. You have{' '}
          {activities.length} — cut {activities.length - ACTIVITY_LIMIT} before
          filling in the form, or keep them here and list only your strongest ten.
        </p>
      ) : null}
    </header>
  )
}
