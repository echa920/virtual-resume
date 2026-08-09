import { LIMITS } from './portfolioData'

// Everything the Common App requires for an activity. A blank here is a blank
// on the form, so the site names them rather than quietly rendering nothing.
const REQUIRED = [
  { key: 'position', label: 'Position / leadership' },
  { key: 'organization', label: 'Organization' },
  { key: 'description', label: 'Description' },
  { key: 'grades', label: 'Grade levels' },
  { key: 'timing', label: 'Timing' },
  { key: 'hoursPerWeek', label: 'Hours per week' },
  { key: 'weeksPerYear', label: 'Weeks per year' },
]

function isBlank(value) {
  if (value === null || value === undefined) return true
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'string') return value.trim() === ''
  return false
}

export function missingFields(activity) {
  return REQUIRED.filter((field) => isBlank(activity[field.key])).map((f) => f.label)
}

export function overLimitFields(activity) {
  return ['position', 'organization', 'description']
    .filter((key) => (activity[key] ?? '').length > LIMITS[key])
    .map((key) => key)
}

export function annualHours(activity) {
  if (activity.hoursPerWeek === null || activity.weeksPerYear === null) return null
  return activity.hoursPerWeek * activity.weeksPerYear
}

export function totalAnnualHours(list) {
  return list.reduce((sum, activity) => sum + (annualHours(activity) ?? 0), 0)
}
