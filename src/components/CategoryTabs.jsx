import { useRef } from 'react'

export default function CategoryTabs({ categories, counts, active, onChange }) {
  const refs = useRef({})

  // Roving-focus tablist: arrows move between tabs, Home/End jump to the ends.
  function onKeyDown(event) {
    const ids = categories.map((c) => c.id)
    const i = ids.indexOf(active)
    let next = null

    if (event.key === 'ArrowRight') next = ids[(i + 1) % ids.length]
    else if (event.key === 'ArrowLeft') next = ids[(i - 1 + ids.length) % ids.length]
    else if (event.key === 'Home') next = ids[0]
    else if (event.key === 'End') next = ids[ids.length - 1]
    else return

    event.preventDefault()
    onChange(next)
    refs.current[next]?.focus()
  }

  return (
    <div className="tabs" role="tablist" aria-label="Activity categories" onKeyDown={onKeyDown}>
      {categories.map((category) => {
        const selected = category.id === active
        return (
          <button
            key={category.id}
            ref={(el) => {
              refs.current[category.id] = el
            }}
            type="button"
            role="tab"
            id={`tab-${category.id}`}
            className="tab"
            aria-selected={selected}
            aria-controls={`panel-${category.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(category.id)}
          >
            <span className="tab-label">{category.label}</span>
            <span className="tab-count">{counts[category.id] ?? 0}</span>
          </button>
        )
      })}
    </div>
  )
}
