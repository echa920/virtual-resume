import { useState } from 'react'
import { LIMITS } from '../portfolioData'
import GradeYears from './GradeYears'
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

// Anything not filled in yet is simply left out. The one summary at the bottom
// says what is missing, so every blank does not need its own placeholder.
function Field({ label, value, limit }) {
  if (!value) return null

  return (
    <div className="field">
      <div className="field-head">
        <span className="field-label">{label}</span>
        <span className="field-tools">
          {limit ? <CharCount value={value} limit={limit} /> : null}
          <CopyButton text={value} />
        </span>
      </div>
      <p className="field-value">{value}</p>
    </div>
  )
}

function Stat({ label, value }) {
  if (value === null || value === undefined) return null
  return (
    <div className="stat">
      <dt>{label}</dt>
      <dd className="num">{value}</dd>
    </div>
  )
}

export default function CommonAppFields({ activity }) {
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
        <GradeYears grades={activity.grades} />
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
