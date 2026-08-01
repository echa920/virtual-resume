// "Grades 9–12" when the years are contiguous, "Grades 9, 11" when they are not.
export default function gradeRange(grades) {
  if (!grades.length) return ''
  const sorted = [...grades].sort((a, b) => a - b)
  const contiguous = sorted.every((g, i) => i === 0 || g === sorted[i - 1] + 1)
  return contiguous && sorted.length > 1
    ? `Grades ${sorted[0]}–${sorted[sorted.length - 1]}`
    : `Grade${sorted.length > 1 ? 's' : ''} ${sorted.join(', ')}`
}
