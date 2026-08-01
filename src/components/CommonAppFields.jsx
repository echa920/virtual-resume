import { useState } from 'react'
import { LIMITS, TIMING } from '../portfolioData'

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

function CopyButton({ text, label }) {
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
      {copied ? 'Copied' : label}
    </button>
  )
}

function Field({ label, value, limit, copyable }) {
  return (
    <div className="field">
      <div className="field-head">
        <span className="field-label">{label}</span>
        <span className="field-tools">
          {limit ? <CharCount value={value} limit={limit} /> : null}
          {copyable ? <CopyButton text={value} label="Copy" /> : null}
        </span>
      </div>
      <p className="field-value">{value}</p>
    </div>
  )
}

export default function CommonAppFields({ activity }) {
  const grades = [...activity.grades].sort((a, b) => a - b)
  const allGrades = [9, 10, 11, 12]
  const annualHours = activity.hoursPerWeek * activity.weeksPerYear

  return (
    <div className="capp">
      <p className="capp-title">
        Common App entry
        <span className="capp-note">
          exactly what goes in the form — counters show the real limits
        </span>
      </p>

      <Field label="Activity type" value={activity.type} />
      <Field
        label="Position / Leadership"
        value={activity.position}
        limit={LIMITS.position}
        copyable
      />
      <Field
        label="Organization"
        value={activity.organization}
        limit={LIMITS.organization}
        copyable
      />
      <Field
        label="Description"
        value={activity.description}
        limit={LIMITS.description}
        copyable
      />

      <div className="field">
        <span className="field-label">Participation grade levels</span>
        <ul className="grades">
          {allGrades.map((grade) => (
            <li
              key={grade}
              className={grades.includes(grade) ? 'grade is-on' : 'grade'}
              aria-label={`Grade ${grade}${grades.includes(grade) ? ', selected' : ', not selected'}`}
            >
              {grade}
            </li>
          ))}
        </ul>
      </div>

      <dl className="stats">
        <div className="stat">
          <dt>Timing</dt>
          <dd>{activity.timing.join(', ')}</dd>
        </div>
        <div className="stat">
          <dt>Hours per week</dt>
          <dd className="num">{activity.hoursPerWeek}</dd>
        </div>
        <div className="stat">
          <dt>Weeks per year</dt>
          <dd className="num">{activity.weeksPerYear}</dd>
        </div>
        <div className="stat">
          <dt>Hours per year</dt>
          <dd className="num">{annualHours.toLocaleString('en-US')}</dd>
        </div>
        <div className="stat">
          <dt>Continue in college</dt>
          <dd>{activity.continueInCollege ? 'Yes' : 'No'}</dd>
        </div>
      </dl>

      {activity.timing.includes(TIMING.all) && activity.weeksPerYear < 40 ? (
        <p className="warn">
          Timing says “{TIMING.all}” but weeks per year is {activity.weeksPerYear}.
          Reviewers notice that mismatch — check which one is right.
        </p>
      ) : null}
    </div>
  )
}
