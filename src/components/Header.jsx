import { profile, activities, ACTIVITY_LIMIT } from '../portfolioData'
import { totalAnnualHours, missingFields } from '../validation'
import assetUrl from '../assetUrl'
import { workingView } from '../viewMode'

export default function Header() {
  const hours = totalAnnualHours(activities)
  const overLimit = activities.length > ACTIVITY_LIMIT
  const incomplete = activities.filter((a) => missingFields(a).length > 0)

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
          {profile.school} · Class of {profile.graduationYear}
        </li>
        <li>{profile.location}</li>
        {profile.email ? (
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        ) : null}
        {profile.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {workingView ? (
        <dl className="totals">
          <div className="total">
            <dt>Activities listed</dt>
            <dd className={overLimit ? 'num is-over' : 'num'}>
              {activities.length}
              <span className="of">of {ACTIVITY_LIMIT} allowed</span>
            </dd>
          </div>
          <div className="total">
            <dt>Hours per year, counted</dt>
            <dd className="num">
              {hours.toLocaleString('en-US')}
              {incomplete.length ? <span className="of">incomplete</span> : null}
            </dd>
          </div>
        </dl>
      ) : null}

      {workingView && overLimit ? (
        <p className="warn">
          The Common App accepts {ACTIVITY_LIMIT} activities. You have {activities.length} — cut{' '}
          {activities.length - ACTIVITY_LIMIT}.
        </p>
      ) : null}

      {workingView && incomplete.length ? (
        <p className="warn">
          <strong>
            {incomplete.length} of {activities.length} activities are missing required form fields.
          </strong>{' '}
          Mostly hours per week and weeks per year, which you have not given me. Open any activity to
          see exactly what its entry still needs.
        </p>
      ) : null}
    </header>
  )
}
