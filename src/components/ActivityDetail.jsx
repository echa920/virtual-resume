import CommonAppFields from './CommonAppFields'
import gradeRange from '../gradeRange'
import assetUrl from '../assetUrl'

export default function ActivityDetail({ activity }) {
  return (
    <article className="detail">
      <header className="detail-head">
        <p className="detail-type">{activity.type}</p>
        <h3 className="detail-org">{activity.organization}</h3>
        <p className="detail-position">
          {activity.position} · {gradeRange(activity.grades)}
        </p>
      </header>

      {activity.highlights.length ? (
        <ul className="highlights">
          {activity.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <div className="prose">
        {activity.detail.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {activity.photos.length ? (
        <ul className="gallery">
          {activity.photos.map((photo) => (
            <li key={photo.src}>
              <img src={assetUrl(photo.src)} alt={photo.caption} loading="lazy" />
              {photo.caption ? <p className="caption">{photo.caption}</p> : null}
            </li>
          ))}
        </ul>
      ) : null}

      <CommonAppFields activity={activity} />
    </article>
  )
}
