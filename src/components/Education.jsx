import { education } from '../resumeData'

export default function Education() {
  return (
    <ol className="entries">
      {education.map((item) => (
        <li className="entry" key={`${item.school}-${item.period}`}>
          <div className="entry-head">
            <h3 className="entry-role">{item.credential}</h3>
            <p className="entry-meta">{item.period}</p>
          </div>
          <p className="entry-sub">{item.school}</p>
          {item.detail ? <p className="entry-detail">{item.detail}</p> : null}
        </li>
      ))}
    </ol>
  )
}
