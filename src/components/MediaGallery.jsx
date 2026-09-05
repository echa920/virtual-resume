import assetUrl from '../assetUrl'

// Three kinds of item, so a clip can live in the repo or on YouTube:
//
//   { type: 'image', src: 'robotics.jpg', caption: '...' }
//   { type: 'video', src: 'clip.mp4', poster: 'still.jpg', caption: '...' }
//   { type: 'embed', src: 'https://www.youtube.com/embed/ID', caption: '...' }
//
// Anything without a type is treated as an image, so older entries still work.
function Item({ item }) {
  if (item.type === 'embed') {
    return (
      <div className="media-frame">
        <iframe
          src={item.src}
          title={item.caption || 'Video'}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (item.type === 'video') {
    return (
      <video
        controls
        preload="none"
        playsInline
        poster={item.poster ? assetUrl(item.poster) : undefined}
      >
        <source src={assetUrl(item.src)} />
        Your browser cannot play this clip.
      </video>
    )
  }

  return <img src={assetUrl(item.src)} alt={item.caption || ''} loading="lazy" />
}

export default function MediaGallery({ items }) {
  if (!items?.length) return null

  return (
    <ul className="gallery">
      {items.map((item) => (
        <li key={item.src} className={item.type === 'embed' ? 'is-wide' : undefined}>
          <Item item={item} />
          {item.caption ? <p className="caption">{item.caption}</p> : null}
        </li>
      ))}
    </ul>
  )
}
