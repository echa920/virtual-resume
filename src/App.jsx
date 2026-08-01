import { useMemo, useState } from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import ActivityList from './components/ActivityList'
import ActivityDetail from './components/ActivityDetail'
import { categories, activities } from './portfolioData'
import './App.css'

function App() {
  const byCategory = useMemo(() => {
    const map = {}
    for (const category of categories) {
      map[category.id] = activities.filter((a) => a.category === category.id)
    }
    return map
  }, [])

  const counts = useMemo(() => {
    const map = {}
    for (const category of categories) {
      map[category.id] = byCategory[category.id].length
    }
    return map
  }, [byCategory])

  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  // One remembered selection per category, so switching tabs and coming back
  // does not lose the activity you were reading.
  const [selected, setSelected] = useState(() => {
    const map = {}
    for (const category of categories) {
      map[category.id] = byCategory[category.id][0]?.id ?? null
    }
    return map
  })

  function select(categoryId, activityId) {
    setSelected((prev) => ({ ...prev, [categoryId]: activityId }))
  }

  return (
    <main className="page">
      <Header />

      <CategoryTabs
        categories={categories}
        counts={counts}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Every panel stays mounted and is hidden with [hidden] rather than
          unmounted, so printing can reveal all four at once. */}
      {categories.map((category) => {
        const list = byCategory[category.id]
        const activeId = selected[category.id]

        return (
          <section
            key={category.id}
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            hidden={category.id !== activeCategory}
            className="panel"
          >
            <h2 className="panel-title">{category.heading}</h2>

            {list.length === 0 ? (
              <p className="empty">Nothing listed here yet.</p>
            ) : (
              <div className="split">
                <ActivityList
                  activities={list}
                  active={activeId}
                  onSelect={(id) => select(category.id, id)}
                />

                <div className="detail-pane">
                  {list.map((activity) => (
                    <div key={activity.id} hidden={activity.id !== activeId}>
                      <ActivityDetail activity={activity} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}

export default App
