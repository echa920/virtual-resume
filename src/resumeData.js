// Edit this file to fill in your resume. Nothing else needs to change.
// Every string below is placeholder text — replace it with your own.

export const profile = {
  name: 'Pablo Echavarria Builes',
  title: 'Your Professional Title',

  // Drop your photo in public/ and point to it, e.g. '/photo.jpg'.
  // Leave as '' and the header renders without an avatar — no layout break.
  photo: '',

  summary:
    'One or two sentences about what you do and what you are looking for. ' +
    'Keep it short — this is the first thing anyone reads.',

  // Shown as a small pill under your name. Set to '' to hide it.
  badge: 'First-generation Colombian',

  location: 'City, Country',
  email: 'you@example.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/echa920' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
  ],
}

export const experience = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: '2024 — Present',
    location: 'City, Country',
    bullets: [
      'What you owned, and the outcome it produced.',
      'Lead with a verb; include a number whenever you can.',
      'Three or four bullets per role is plenty.',
    ],
  },
  {
    role: 'Previous Job Title',
    company: 'Previous Company',
    period: '2022 — 2024',
    location: 'City, Country',
    bullets: [
      'Another accomplishment, framed as impact rather than duty.',
      'Tools and technologies you used, in context.',
    ],
  },
]

export const projects = [
  {
    name: 'Project Name',
    description: 'What it does and why you built it, in one sentence.',
    tech: ['React', 'Vite'],
    href: '',
  },
  {
    name: 'Another Project',
    description: 'A second project, described the same way.',
    tech: ['Python'],
    href: '',
  },
]

export const skills = [
  { group: 'Programming', items: ['JavaScript', 'Python', 'SQL'] },
  { group: 'Frameworks', items: ['React', 'Node.js'] },
  { group: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
  // Bilingual is worth listing outright — edit or delete this group as you like.
  { group: 'Spoken languages', items: ['Spanish', 'English'] },
]

export const education = [
  {
    school: 'School or Program Name',
    credential: 'Degree or Certificate',
    period: '2020 — 2024',
    detail: 'Optional: focus area, honors, or relevant coursework.',
  },
]
