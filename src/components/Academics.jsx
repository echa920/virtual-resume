import { profile, honors, HONORS_LIMIT } from '../portfolioData'
import { workingView } from '../viewMode'

export default function Academics() {
  const overHonors = honors.length > HONORS_LIMIT

  return (
    <section className="academics">
      <div className="acad-block">
        <h2 className="panel-title">School</h2>
        <p className="acad-lead">{profile.school}</p>
        <p className="acad-sub">Graduating June {profile.graduationYear}</p>
        {profile.systemNote ? <p className="acad-note">{profile.systemNote}</p> : null}

        <p className="acad-label">Relevant coursework</p>
        <ul className="tags">
          {profile.coursework.map((course) => (
            <li key={course} className="tag">
              {course}
            </li>
          ))}
        </ul>
      </div>

      <div className="acad-block">
        <h2 className="panel-title">Languages</h2>

        <p className="acad-label">Spoken</p>
        <ul className="tags">
          {profile.languages.map((language) => (
            <li key={language.name} className="tag">
              {language.name} — {language.level}
            </li>
          ))}
        </ul>

        <p className="acad-label">Programming</p>
        <ul className="tags">
          {profile.programming.map((language) => (
            <li key={language} className="tag">
              {language}
            </li>
          ))}
        </ul>
      </div>

      <div className="acad-block">
        <h2 className="panel-title">
          Honors
          {workingView ? (
            <span className="acad-count">
              {honors.length} of {HONORS_LIMIT} allowed
            </span>
          ) : null}
        </h2>

        <ul className="honors">
          {honors.map((honor) => (
            <li key={honor.id} className="honor">
              <span className="honor-title">{honor.title}</span>
            </li>
          ))}
        </ul>

        {workingView && overHonors ? (
          <p className="warn">
            The Common App accepts {HONORS_LIMIT} honors. You have {honors.length} — cut{' '}
            {honors.length - HONORS_LIMIT}.
          </p>
        ) : null}
      </div>
    </section>
  )
}
