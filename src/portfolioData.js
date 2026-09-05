// ============================================================================
// All content for the site lives here. Edit this file only.
//
// Fields marked "Common App" mirror that form exactly, including its character
// limits. `null` means "not supplied yet" — the site flags those rather than
// guessing, because a wrong number on an application is worse than a blank one.
// ============================================================================

// Set true only while the content is placeholder. It is real now.
export const isSampleData = false

// UNLISTED — asks search engines not to index the page, so it is reachable by
// people you send the link to but does not turn up in a search for your name.
//
// This is not access control. GitHub Pages serves the site to anyone who
// requests the URL; there is no password and no way to add one on a free
// account. Treat everything here as public, just not advertised.
export const unlisted = true

export const profile = {
  name: 'Pablo Echavarria Builes',
  tagline: 'Class of 2027 · Applying to US universities from Medellín, Colombia',

  // Drop your photo in public/ and point to it, e.g. 'headshot.jpg'.
  photo: '',

  // Your words: first member of your family to attend an American university.
  // Note this is NOT the same as the Common App's "first-generation" status,
  // which asks whether your parents hold a degree at all, from any country.
  badge: 'First in my family to attend a university in the United States',

  intro:
    'Four things have taken most of my time in high school: a newscast I built ' +
    'from nothing, a basketball court, Model UN, and code. Click any activity ' +
    'for the version that does not fit in 150 characters.',

  location: 'Medellín, Colombia',

  // Left blank on purpose — this page is public. Add an address you are happy
  // for strangers to have, and it will appear in the contact line.
  email: '',

  school: 'Colegio Montessori Medellín',
  graduationYear: 2027,

  // Colombian secondary school ends at 11th grade — there is no 12th. The
  // Common App still shows a grade 12 checkbox; you simply leave it unticked.
  // Worth stating plainly, because a US reader may otherwise read a missing
  // 12th-grade year as a gap.
  finalGrade: 11,
  systemNote:
    'Colombian secondary school ends at 11th grade, so 11th is my final year.',

  coursework: [
    'Physics',
    'Trigonometry',
    'Calculus',
    'Robotics',
    'Advanced Engineering',
  ],

  // C++ came from the Advanced Engineering course, not the UT PREP camp — the
  // camp repos are all Python. Both are real, they just have different sources.
  programming: ['Python', 'C++'],

  languages: [
    { name: 'Spanish', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
    { name: 'Japanese', level: 'Basic proficiency' },
  ],

  links: [{ label: 'GitHub', href: 'https://github.com/echa920' }],
}

// The Common App lets you list at most 10 activities and 5 honors.
export const ACTIVITY_LIMIT = 10
export const HONORS_LIMIT = 5

// Common App character limits, enforced by the counters in the UI.
export const LIMITS = {
  position: 50,
  organization: 100,
  description: 150,
  honor: 100,
}

// The Common App "Activity type" dropdown. Use one of these verbatim.
export const ACTIVITY_TYPES = [
  'Academic',
  'Art',
  'Athletics: Club',
  'Athletics: JV/Varsity',
  'Career Oriented',
  'Community Service (Volunteer)',
  'Computer/Technology',
  'Cultural',
  'Dance',
  'Debate/Speech',
  'Environmental',
  'Family Responsibilities',
  'Foreign Exchange',
  'Internship',
  'Journalism/Publication',
  'Junior R.O.T.C.',
  'LGBT',
  'Military',
  'Music: Instrumental',
  'Music: Vocal',
  'Religious',
  'Research',
  'Robotics',
  'School Spirit',
  'Science/Math',
  'Social Justice',
  'Student Govt./Politics',
  'Theater/Drama',
  'Work (Paid)',
  'Other Club/Activity',
]

// Common App "Timing of participation" options.
export const TIMING = {
  year: 'During school year',
  break: 'During school break',
  all: 'All year',
}

// Common App honors "level of recognition".
export const HONOR_LEVELS = ['School', 'State/Regional', 'National', 'International']

export const categories = [
  { id: 'academic', label: 'Academic', heading: 'Academic Experiences' },
  { id: 'service', label: 'Charitable', heading: 'Charitable Activities' },
  {
    id: 'extracurricular',
    label: 'Extracurricular',
    heading: 'Extracurricular Activities',
  },
  { id: 'outdoor', label: 'Outdoor', heading: 'Outdoor Experiences' },
]

// ---------------------------------------------------------------------------
// Activities.
//
// `detail` is written strictly from what you told me — nothing invented. It is
// currently thin, and depth is the whole reason to send someone this link
// rather than the form. Expanding it is the highest-value thing left to do.
// ---------------------------------------------------------------------------

export const activities = [
  // ---------------------------------------------------------------- academic
  {
    id: 'ut-prep',
    category: 'academic',
    type: 'Computer/Technology',
    position: 'Student',
    organization: 'UT PREP Summer STEM Camp, University of Texas',
    description:
      'Five-week summer camp, 8-hour days Monday to Thursday. Completed six Python coursework modules and built projects including a video game.',
    // June–July 2026, the summer straight after 10th grade finished.
    grades: [10],
    timing: [TIMING.break],
    // 16 Jun – 17 Jul 2026. Week one started on the Tuesday, so 4 weeks of
    // 32 hours plus one of 24 = 152 hours; 30/week is the honest average.
    hoursPerWeek: 30,
    weeksPerYear: 5,
    continueInCollege: true,
    detail: [
      'Five weeks at the University of Texas, starting 16 June 2026, eight hours a day from Monday to Thursday. About 150 hours of actual desk time in a month.',
      'The structure was six coursework modules in Python, each one building on the last, then applying them to projects of our own — a video game among them.',
      'Every module is on GitHub under the UT-Prep-4 organisation, timestamped as I worked through it. It is the closest thing I have to a public record of how I actually learned to code, rather than a claim that I did.',
    ],
    highlights: [
      'Six coursework modules completed in five weeks',
      '~150 hours of Python',
      'Work published publicly, module by module',
    ],
    media: [],
  },
  {
    id: 'model-un',
    category: 'academic',
    type: 'Debate/Speech',
    position: 'Delegate',
    organization: 'Model United Nations, conferences across Medellín',
    description:
      'Attended 10 Model UN conferences across Medellín as a delegate. Won Best Delegate, Best Speaker twice, and Best Portfolio.',
    grades: [9, 10, 11],
    timing: [TIMING.year],
    hoursPerWeek: null,
    weeksPerYear: null,
    continueInCollege: true,
    detail: [
      'Ten conferences across Medellín over five years, always as a delegate and always participating rather than sitting quiet in the back rows.',
      'The awards came in three forms: Best Delegate, Best Speaker twice, and Best Portfolio. The portfolio award is the one I care about most, because it is the only one that measures preparation rather than performance on the day.',
    ],
    highlights: [
      '10 conferences attended',
      'Best Delegate',
      'Best Speaker, twice',
      'Best Portfolio',
    ],
    media: [],
  },

  // ----------------------------------------------------------------- service
  {
    id: 'villatina',
    category: 'service',
    type: 'Community Service (Volunteer)',
    position: 'Volunteer',
    organization: 'Villatina community project, Medellín',
    description:
      'Volunteer with the Villatina community in Medellín every Christmas, and once or twice a quarter through the rest of the year.',
    // Left empty deliberately: this is charitable work, not a school activity.
    // Note the Common App's own field means which school YEARS you took part
    // (9th/10th/11th), not marks — so it will still want at least one ticked.
    grades: [],
    notRequired: ['grades'],
    timing: [TIMING.all],
    hoursPerWeek: 4,
    weeksPerYear: 6, // ~1–2 per quarter plus Christmas.
    continueInCollege: true,
    detail: [
      'I go every Christmas, and once or twice a quarter the rest of the year. It is the one thing on this list that has nothing to do with school, applications or a team sheet.',
      'What we actually do there, and what it has meant, is the part still missing from this page — and it is the part worth writing.',
    ],
    highlights: ['Every Christmas, plus 1–2 visits a quarter'],
    media: [],
  },

  // --------------------------------------------------------- extracurricular
  {
    id: 'newscast',
    category: 'extracurricular',
    type: 'Journalism/Publication',
    position: 'Founder and President',
    organization: 'Newscast System, Colegio Montessori Medellín',
    description:
      "Founded the school's newscast system. Recorded 160+ hours of interviews, news and events, and recruited and trained 15 reporters.",
    grades: [9, 10, 11],
    timing: [TIMING.year],
    // 85 hours across three years ≈ 28 a year, which over a 28-week stretch of
    // the school year is about 1 hour a week.
    hoursPerWeek: 1,
    weeksPerYear: 28,
    continueInCollege: true,
    detail: [
      'The school had no newscast. I started one in 2023 and have run it since, which meant working out everything from scratch — what to cover, how to record it, and who would still be doing it after I graduate.',
      'Across four years we recorded more than 160 hours of interviews, news and school events. The part that took the longest was not the recording, it was recruiting: 15 reporters joined and were trained, which is what makes it a system rather than a one-person project.',
    ],
    highlights: [
      'Founded the newscast from nothing',
      '160+ hours of interviews, news and events recorded',
      '15 reporters recruited and trained',
    ],
    media: [],
  },
  {
    id: 'basketball',
    category: 'extracurricular',
    type: 'Athletics: JV/Varsity',
    position: 'Team Captain',
    organization: 'Colegio Montessori Medellín and club team',
    description:
      'Seven years on school and club teams, named captain of both in my third year. MVP at Miami Heat camp and the Barranquilla international games.',
    grades: [9, 10, 11],
    timing: [TIMING.all],
    // 4 sessions a week at 1h30 = 6 hours. Weeks per year still needed.
    hoursPerWeek: 8,
    weeksPerYear: null,
    continueInCollege: true,
    detail: [
      'Seven years of basketball across my school team and a club team, which between them run most of the year rather than a single season.',
      'Training runs to about eight hours a week across four sessions, before games.',
      'I was made captain of both in my third year. That was decided on leadership rather than being the best player on the floor, and it is the reason basketball is on this list at all.',
      'The two MVP awards came at the Miami Heat basketball camp and the Barranquilla international games.',
    ],
    highlights: [
      '7 years, school and club teams',
      '~8 hours a week of training',
      'Captain of both teams from year three',
      'MVP, Miami Heat camp',
      'MVP, Barranquilla international games',
    ],
    media: [
      {
        type: 'video',
        src: 'media/basketball-3x3.mp4',
        poster: 'media/basketball-3x3-poster.jpg',
        caption: '3x3 tournament, FIBA 3x3 Tour Colombia',
      },
    ],
  },
  {
    id: 'robotics',
    category: 'extracurricular',
    type: 'Robotics',
    position: 'Team Member',
    organization: 'VEX Robotics competition team',
    description:
      'Competed in two VEX robotics competitions. Helped design and build three robots, two of which won their competition.',
    grades: [10],
    timing: [TIMING.year],
    hoursPerWeek: null,
    weeksPerYear: null,
    continueInCollege: true,
    detail: [
      'Two VEX competitions, three robots built with the team, two of them winning. Robotics is also one of my formal courses at school, so the competition work and the coursework fed each other.',
    ],
    highlights: [
      '2 VEX competitions entered',
      '3 robots built, 2 of them winning',
    ],
    media: [],
  },
  {
    id: 'class-president',
    category: 'extracurricular',
    type: 'Student Govt./Politics',
    position: 'Classroom President; Personero Candidate',
    organization: 'Colegio Montessori Medellín',
    description:
      'Classroom president all year. Ran for personero, the school-wide student representative, and placed second against four other candidates.',
    // 7th grade cannot be ticked: the Common App records grades 9 and up. It
    // stays in the write-up, where it is true.
    grades: [11],
    timing: [TIMING.all],
    // The form has no all-year-round option for hours: it wants a number even
    // when the role never really stops. An honest estimate is what goes here.
    hoursPerWeek: null,
    weeksPerYear: 40,
    continueInCollege: true,
    detail: [
      'Classroom president, elected by the people I sit with every day — once in 7th grade and again in 11th, four years apart. Winning it the second time, after they had already seen me do the job once, is the part that means something.',
      'In 11th grade I also ran for personero, the student elected to represent the whole school rather than one classroom, and came second out of five candidates.',
      'It is a real campaign: you stand in front of every year group and ask them to pick you. Losing it narrowly, to people I still see every day, taught me more than the classroom elections I won.',
    ],
    highlights: [
      'Second of five in the school-wide personero election',
      'Classroom president, elected twice',
    ],
    media: [],
  },

  // ----------------------------------------------------------------- outdoor
  // STUB — created only so the two wakesurfing clips have somewhere to live.
  // Everything factual about it is still unknown: how many years, how often,
  // where, whether it is coached or just family weekends. Fill the nulls in or
  // delete this entry; do not send the link to anyone while it reads like this.
  {
    id: 'wakesurfing',
    category: 'outdoor',
    type: 'Athletics: Club',
    position: '',
    // Not a claim about a club or team — just a label so the entry is
    // clickable in the list. Replace it with the real organization.
    organization: 'Wakesurfing',
    description: '',
    grades: [],
    timing: [],
    hoursPerWeek: null,
    weeksPerYear: null,
    continueInCollege: null,
    detail: [],
    highlights: [],
    media: [
      {
        type: 'video',
        src: 'media/wakesurf-1.mp4',
        poster: 'media/wakesurf-1-poster.jpg',
        caption: 'Wakesurfing',
      },
      {
        type: 'video',
        src: 'media/wakesurf-2.mp4',
        poster: 'media/wakesurf-2-poster.jpg',
        caption: 'Wakesurfing',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Honors. The Common App gives you FIVE, at 100 characters each, and asks for
// the grade level and the level of recognition for every one.
// ---------------------------------------------------------------------------

export const honors = [
  {
    id: 'mun-awards',
    title: 'Model UN: Best Delegate, Best Speaker (×2), Best Portfolio',
    grades: [],
    level: null,
  },
  {
    id: 'character-counts',
    title: 'Character Counts Award of the Year',
    grades: [],
    level: null,
  },
  {
    id: 'mvp-barranquilla',
    title: 'MVP, Barranquilla International Games (basketball)',
    grades: [],
    level: 'International',
  },
  {
    id: 'mvp-miami',
    title: 'MVP, Miami Heat Basketball Camp',
    grades: [],
    level: null,
  },
]
