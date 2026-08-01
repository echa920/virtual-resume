import { skills } from '../resumeData'

export default function Skills() {
  return (
    <dl className="skills">
      {skills.map((group) => (
        <div className="skill-group" key={group.group}>
          <dt>{group.group}</dt>
          <dd>
            <ul className="tags">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
