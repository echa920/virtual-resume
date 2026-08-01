import { useEffect } from 'react'

// Asks crawlers to neither index this page nor follow its links. Renders
// nothing. Honoured by Google, Bing and other mainstream crawlers; it is a
// request, not enforcement, so it hides the page from search rather than
// restricting who can load it.
export default function NoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return null
}
