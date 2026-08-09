export default function ActivityList({ activities, active, onSelect }) {
  return (
    <ul className="list">
      {activities.map((activity) => {
        const selected = activity.id === active
        return (
          <li key={activity.id}>
            <button
              type="button"
              className={selected ? 'list-item is-active' : 'list-item'}
              aria-current={selected ? 'true' : undefined}
              onClick={() => onSelect(activity.id)}
            >
              <span className="list-org">{activity.organization}</span>
              <span className="list-position">{activity.position}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
