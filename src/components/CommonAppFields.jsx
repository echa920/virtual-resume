import { useState } from 'react'
import { LIMITS } from '../portfolioData'
import { missingFields, annualHours } from '../validation'

function CharCount({ value, limit }) {
  const used = value.length
  const over = used > limit
  return (
    <span className={over ? 'count is-over' : 'count'}>
      {used}/{limit}
      {over ? ` · ${used - limit} over` : ''}
    </span>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className="copy" onClick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function Field({ label, value, limit }) {
  const blank = !value

  return (
    <div className="field">
      <div className="field-head">
        <span className="field-label">{label}</span>
        <span className="field-tools">
          {limit && !blank ? <CharCount value={value} limit={limit} /> : null}
          {!blank ? <CopyButton text={value} /> : null}
        </span>
      </div>
      <p className={blank ? 'field-value is-blank' : 'field-value'}>
        {blank ? 'Not written yet' : value}
      </p>
    </div>
  )
}

function Stat({ label, value }) {
  const blank = value === null || value === undefined
  return (
    <div className="stat">
      <dt>{label}</dt>
      <dd className={blank ? 'is-blank' : 'num'}>{blank ? 'Not set' : value}</dd>
    </div>
  )
}

export default function CommonAppFields({ activity }) {
  const grades = [...activity.grades].sort((a, b) => a - b)
  const allGrades = [9, 10, 11, 12]
  const hours = annualHours(activity)
  const missing = missingFields(activity)

  return (
    <div className="capp">
      <p className="capp-title">
        Common App entry
        <span className="capp-note">
          exactly what goes in the form — counters show the real limits
        </span>
      </p>

      <Field label="Activity type" value={activity.type} />
      <Field label="Position / Leadership" value={activity.position} limit={LIMITS.position} />
      <Field label="Organization" value={activity.organization} limit={LIMITS.organization} />
      <Field label="Description" value={activity.description} limit={LIMITS.description} />

      <div className="field">
        <span className="field-label">Participation grade levels</span>
        {grades.length ? (
          <ul className="grades">
            {allGrades.map((grade) => (
              <li key={grade} className={grades.includes(grade) ? 'grade is-on' : 'grade'}>
                {grade}
              </li>
            ))}
          </ul>
        ) : (
          <p className="field-value is-blank">Not set</p>
        )}
      </div>

      <dl className="stats">
        <Stat label="Timing" value={activity.timing.length ? activity.timing.join(', ') : null} />
        <Stat label="Hours per week" value={activity.hoursPerWeek} />
        <Stat label="Weeks per year" value={activity.weeksPerYear} />
        <Stat label="Hours per year" value={hours === null ? null : hours.toLocaleString('en-US')} />
        <Stat label="Continue in college" value={activity.continueInCollege ? 'Yes' : 'No'} />
      </dl>

      {missing.length ? (
        <p className="warn">
          <strong>The form needs {missing.length} more thing{missing.length > 1 ? 's' : ''}:</strong>{' '}
          {missing.join(', ')}. I left {missing.length > 1 ? 'these' : 'this'} blank rather than
          guess — a wrong number here is worse than an empty one.
        </p>
      ) : null}
    </div>
  )
}
