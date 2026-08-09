// Two audiences, one page.
//
// A university should see the writing: what you did and why it mattered. The
// Common App field panel and the missing-field warnings are working notes for
// you, and on a shared link they read as an unfinished form.
//
// So they are hidden by default and appear when the URL ends in ?form —
// bookmark that version for yourself, share the plain URL with everyone else.
export const workingView =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('form')
