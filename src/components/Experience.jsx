import { experience } from '../resumeData'

export default function Experience() {
  return (
    <ol className="entries">
      {experience.map((job) => (
        <li className="entry" key={`${job.company}-${job.period}`}>
          <div className="entry-head">
            <h3 className="entry-role">
              {job.role} <span className="entry-at">at</span> {job.company}
            </h3>
            <p className="entry-meta">
              {job.period}
              {job.location ? ` · ${job.location}` : ''}
            </p>
          </div>
          <ul className="bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
