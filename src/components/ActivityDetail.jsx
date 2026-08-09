import CommonAppFields from './CommonAppFields'
import GradeYears from './GradeYears'
import assetUrl from '../assetUrl'
import { workingView } from '../viewMode'

export default function ActivityDetail({ activity }) {
  return (
    <article className="detail">
      <header className="detail-head">
        <p className="detail-type">{activity.type}</p>
        <h3 className="detail-org">{activity.organization}</h3>
        <p className="detail-position">{activity.position}</p>
        <GradeYears grades={activity.grades} />
      </header>

      {activity.highlights.length ? (
        <ul className="highlights">
          {activity.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <div className="prose">
        {activity.detail.length ? (
          activity.detail.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        ) : (
          <p className="is-blank">
            No write-up yet. This is the part the form has no room for, so it is
            the reason to send someone this link at all.
          </p>
        )}
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

      {workingView ? <CommonAppFields activity={activity} /> : null}
    </article>
  )
}
