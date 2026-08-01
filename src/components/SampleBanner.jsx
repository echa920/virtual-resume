import { useEffect } from 'react'

// While the site holds placeholder content, keep it out of search results as
// well as labelling it on screen. Removing the flag removes both.
export default function SampleBanner() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <p className="sample-banner" role="status">
      <strong>Placeholder content.</strong> The activities on this page are
      examples used while the site is being built — they are not a real record.
    </p>
  )
}
