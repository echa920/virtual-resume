import { profile } from '../portfolioData'

// Which school years an activity ran, as filled pills. Stops at the final year
// of the school system, so no 12th-grade box appears for an 11-year system.
export default function GradeYears({ grades }) {
  if (!grades.length) return null

  const all = []
  for (let g = 9; g <= profile.finalGrade; g++) all.push(g)

  return (
    <div className="detail-years">
      <span className="years-label">Grades</span>
      <ul className="grades">
        {all.map((grade) => (
          <li
            key={grade}
            className={grades.includes(grade) ? 'grade is-on' : 'grade'}
            aria-label={`Grade ${grade}: ${grades.includes(grade) ? 'yes' : 'no'}`}
          >
            {grade}
          </li>
        ))}
      </ul>
    </div>
  )
}
