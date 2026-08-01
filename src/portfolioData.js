// ============================================================================
// All content for the site lives here. Edit this file only.
//
// The entries below are SAMPLE DATA so the layout is easy to judge — replace
// every one of them with your own activities.
//
// The fields marked "Common App" mirror the Activities section of the Common
// Application exactly, including its character limits. The site shows a live
// counter for each capped field so you can paste straight into the real form.
// ============================================================================

// SAFETY FLAG — leave this true while the activities below are still the
// invented sample data. It shows a banner saying so, so nothing here can be
// mistaken for your real record. Set it to false once real content is in.
export const isSampleData = true

// UNLISTED — asks search engines not to index the page, so it is reachable by
// people you send the link to but does not turn up in a search for your name.
//
// This is not access control. GitHub Pages serves the site to anyone who
// requests the URL; there is no password and no way to add one on a free
// account. Treat everything here as public, just not advertised.
export const unlisted = true

export const profile = {
  name: 'Pablo Echavarria Builes',
  tagline: 'Applying for Fall 2027 · Intended major: Computer Science',

  // Drop your photo in public/ and point to it, e.g. 'headshot.jpg'.
  // Leave as '' to render the header without an avatar.
  photo: '',

  badge: 'First-generation Colombian',

  intro:
    'I build things and I teach what I learn. The four sections below are the ' +
    'shortest honest summary of how I spend my time outside of class — click ' +
    'any activity for the full story behind the one-line version.',

  location: 'Austin, Texas',
  email: 'sample@example.com',
  highSchool: 'Sample High School',
  graduationYear: 2027,

  links: [
    { label: 'GitHub', href: 'https://github.com/echa920' },
  ],
}

// The Common App lets you list at most 10 activities.
export const ACTIVITY_LIMIT = 10

// Common App character limits, enforced by the counters in the UI.
export const LIMITS = {
  position: 50,
  organization: 100,
  description: 150,
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

// Your four groupings. These are how the site is organised; they are not a
// Common App field — the per-activity `type` below is what the form asks for.
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
// Activities. `id` must be unique. Everything from `type` through
// `continueInCollege` maps 1:1 onto a Common App field. Everything after that
// is website-only depth with no character limit.
// ---------------------------------------------------------------------------

export const activities = [
  // ---------------------------------------------------------------- academic
  {
    id: 'robotics',
    category: 'academic',
    type: 'Robotics',
    position: 'Team Captain',
    organization: 'Sample High School Robotics, FRC Team 8412',
    description:
      'Led 14-person team to state finals. Redesigned drivetrain, cutting cycle time 30%. Ran build sessions and taught CAD to nine new members.',
    grades: [10, 11, 12],
    timing: [TIMING.year],
    hoursPerWeek: 8,
    weeksPerYear: 30,
    continueInCollege: true,
    detail: [
      'I joined as a freshman who had never used a wrench and left as the person who ran the build season. The turning point was our second competition, where we lost four matches because our drivetrain kept binding under load. Nobody on the team could tell me why.',
      'I spent three weekends measuring deflection on the frame and found the problem: our bearing blocks were mounted to a plate that flexed about 2mm under torque, enough to bind the chain. I redesigned the mount in Onshape with a gusset, we cut new plates, and cycle time dropped from roughly 20 seconds to 14.',
      'What I am prouder of is the teaching. We had nine new members and one person who knew CAD, which was a problem I had lived through myself. I wrote a six-session intro to Onshape and ran it after school. Seven of the nine designed a competition part that season.',
    ],
    highlights: [
      'State finals qualifier, 2 consecutive seasons',
      'Cycle time 20s to 14s after drivetrain redesign',
      'Wrote and taught a 6-session CAD curriculum',
    ],
    photos: [],
  },
  {
    id: 'research',
    category: 'academic',
    type: 'Research',
    position: 'Student Researcher',
    organization: 'UT Austin Dept. of Computer Science, Summer Program',
    description:
      'Selected from 200+ applicants. Built ML pipeline classifying 40k bus GPS traces; results cited in a graduate paper on transit reliability.',
    grades: [11],
    timing: [TIMING.break],
    hoursPerWeek: 35,
    weeksPerYear: 8,
    continueInCollege: true,
    detail: [
      'Eight weeks in a graduate lab, working on why buses bunch. I was handed 40,000 raw GPS traces and the question of whether we could predict a bunching event before it happened.',
      'Most of the work was unglamorous. About a fifth of the traces had clock drift or dropped points, and my first model was excellent at predicting garbage. Learning to distrust my own results before someone else did was the actual lesson of the summer.',
      'The final classifier hit 0.81 F1 on held-out routes. More importantly, a figure I generated appears in a graduate student paper, and I understand now that research is mostly cleaning, not modeling.',
    ],
    highlights: [
      'Selected from 200+ applicants',
      '0.81 F1 on held-out routes',
      'Figure included in a graduate publication',
    ],
    photos: [],
  },
  {
    id: 'math-league',
    category: 'academic',
    type: 'Science/Math',
    position: 'Member, then Problem Setter',
    organization: 'Regional Math League',
    description:
      'Placed 4th regionally as a junior. Wrote and edited practice sets used by the team weekly; ran problem-of-the-week for underclassmen.',
    grades: [9, 10, 11, 12],
    timing: [TIMING.year],
    hoursPerWeek: 4,
    weeksPerYear: 28,
    continueInCollege: false,
    detail: [
      'Four years of Tuesday afternoons. I was not the strongest competitor on the team, which turned out to matter less than being the person who liked writing the problems.',
      'By junior year I was setting our weekly practice sets. Writing a good problem is harder than solving one: it has to be tractable, have exactly one clean insight, and not reward guessing. I got better at explaining things here than anywhere else.',
    ],
    highlights: ['4th place regional, junior year', 'Set weekly practice problems for 2 years'],
    photos: [],
  },

  // ----------------------------------------------------------------- service
  {
    id: 'food-bank',
    category: 'service',
    type: 'Community Service (Volunteer)',
    position: 'Volunteer Shift Lead',
    organization: 'Central Texas Food Bank',
    description:
      'Led Saturday shifts of 12 volunteers for 3 years, ~420 hours total. Rewrote the Spanish intake sheet after watching families struggle with it.',
    grades: [10, 11, 12],
    timing: [TIMING.all],
    hoursPerWeek: 4,
    weeksPerYear: 35,
    continueInCollege: true,
    detail: [
      'Three years of Saturday mornings, about 420 hours. I started as the kid who moved boxes and ended up leading a dozen volunteers a shift.',
      'The thing I actually changed was a piece of paper. The Spanish intake form was a machine translation, and I watched a woman my grandmother\'s age give up on it and leave without food. I rewrote it that week with two other bilingual volunteers, in plain Spanish, and asked four families to read it back to us before we printed it.',
      'Intake time for Spanish-speaking families dropped by roughly half. It is the piece of work I point to when someone asks what being bilingual is good for.',
    ],
    highlights: [
      '~420 hours over 3 years',
      'Led shifts of 12 volunteers',
      'Rewrote Spanish intake form; intake time roughly halved',
    ],
    photos: [],
  },
  {
    id: 'tutoring',
    category: 'service',
    type: 'Community Service (Volunteer)',
    position: 'Founder and Tutor',
    organization: 'Puentes Tutoring (student-run, bilingual)',
    description:
      'Founded free bilingual tutoring for middle schoolers. Grew to 8 tutors and 31 students; average math grade rose roughly one letter.',
    grades: [11, 12],
    timing: [TIMING.year],
    hoursPerWeek: 5,
    weeksPerYear: 30,
    continueInCollege: true,
    detail: [
      'I started this because my younger cousin was failing pre-algebra and the school tutoring was English-only, which meant his mother could not help him and could not ask anyone why.',
      'We began with me and two friends in a church basement. Two years later there are eight tutors and 31 students, and every session has at least one tutor who can talk to a parent in Spanish.',
      'Recruiting tutors was easy. Keeping them was not — we lost four in the first semester because nobody knew what to do when a student showed up angry. So I wrote a short guide on the first ten minutes of a session, and retention stopped being the problem.',
    ],
    highlights: [
      'Founded from scratch; now 8 tutors, 31 students',
      'Average math grade up roughly one letter',
      'Every session staffed with a Spanish speaker',
    ],
    photos: [],
  },

  // --------------------------------------------------------- extracurricular
  {
    id: 'debate',
    category: 'extracurricular',
    type: 'Debate/Speech',
    position: 'Varsity Debater',
    organization: 'Sample High School Debate Team',
    description:
      'Semifinalist at two state-qualifying tournaments. Coached novice squad in research method; ran weekly practice rounds for 10 debaters.',
    grades: [9, 10, 11, 12],
    timing: [TIMING.year],
    hoursPerWeek: 6,
    weeksPerYear: 26,
    continueInCollege: false,
    detail: [
      'Debate is where I learned that being right and being convincing are different skills, and that the gap between them is mostly preparation.',
      'My first year I lost almost every round because I argued what I believed instead of what the evidence supported. By junior year I kept an indexed evidence file and could find a card in under fifteen seconds. That habit is why research feels natural to me now.',
    ],
    highlights: ['State-qualifying semifinalist, 2 tournaments', 'Coached the novice squad'],
    photos: [],
  },
  {
    id: 'jazz',
    category: 'extracurricular',
    type: 'Music: Instrumental',
    position: 'Bass, Jazz Ensemble',
    organization: 'Sample High School Jazz Ensemble',
    description:
      'Upright and electric bass, 4 years. Played 20+ public performances including two regional festivals; arranged two charts for the group.',
    grades: [9, 10, 11, 12],
    timing: [TIMING.year],
    hoursPerWeek: 5,
    weeksPerYear: 32,
    continueInCollege: true,
    detail: [
      'Bass is a supporting instrument, which suited me. Your job is to make everyone else sound better and to be absolutely reliable about time.',
      'I arranged two charts for the group, including a cumbia we played at the spring festival. Getting a jazz band to sit inside a cumbia groove took six rehearsals and taught me more about rhythm than four years of lessons.',
    ],
    highlights: ['20+ public performances', 'Arranged 2 charts, including a cumbia'],
    photos: [],
  },
  {
    id: 'work',
    category: 'extracurricular',
    type: 'Work (Paid)',
    position: 'Line Cook, Weekends',
    organization: 'Family restaurant',
    description:
      'Weekend line cook, 2 years. Contribute to household expenses and cover the Saturday dinner rush; trained two new hires on the grill station.',
    grades: [11, 12],
    timing: [TIMING.all],
    hoursPerWeek: 14,
    weeksPerYear: 50,
    continueInCollege: false,
    detail: [
      'Fourteen hours most weekends for two years. Part of what I earn goes to household expenses, which is the plain reason this is on the list.',
      'A Saturday dinner rush is a scheduling problem with consequences. Six tickets, four burners, and every dish has to land hot at the same time. I am calmer under deadline pressure than I would otherwise be, and this is why.',
    ],
    highlights: ['~14 hrs/week, 2 years', 'Trained 2 new hires on the grill station'],
    photos: [],
  },

  // ----------------------------------------------------------------- outdoor
  {
    id: 'eagle-scout',
    category: 'outdoor',
    type: 'Other Club/Activity',
    position: 'Eagle Scout',
    organization: 'Boy Scouts of America, Troop 419',
    description:
      'Earned Eagle Scout rank. Led 22 volunteers over 180 hours to build erosion-control terracing on a flood-damaged public trail.',
    grades: [9, 10, 11, 12],
    timing: [TIMING.all],
    hoursPerWeek: 5,
    weeksPerYear: 40,
    continueInCollege: false,
    detail: [
      'The Eagle project was a quarter-mile of public trail that washed out every spring. I proposed terracing it with cut-log check dams, which required a plan the parks department would actually sign off on.',
      'The permitting took four months and three rejected drawings. I learned to read a drainage plan and to accept that "no" from a public agency usually means "not like that."',
      'Build weekend was 22 volunteers and 180 person-hours. The terracing survived the following spring intact, which is the only review that mattered.',
    ],
    highlights: [
      'Eagle Scout rank',
      'Led 22 volunteers, 180 person-hours',
      'Terracing survived the next flood season',
    ],
    photos: [],
  },
  {
    id: 'trail-crew',
    category: 'outdoor',
    type: 'Environmental',
    position: 'Summer Trail Crew Member',
    organization: 'Texas State Parks Conservation Corps',
    description:
      'Two summers on backcountry trail crew. 10-hour days rebuilding 3 miles of eroded trail; certified in wilderness first aid and chainsaw safety.',
    grades: [10, 11],
    timing: [TIMING.break],
    hoursPerWeek: 50,
    weeksPerYear: 6,
    continueInCollege: true,
    detail: [
      'Two summers of ten-hour days with hand tools, mostly out of cell range. We rebuilt about three miles of trail that had eroded into a channel.',
      'This is the hardest physical work I have done and the only place I have been genuinely useless at first. Learning to swing a pick efficiently took a week of being the slowest person on the crew, in front of people who were kind about it.',
      'I came out with wilderness first aid and chainsaw safety certifications, and with a strong preference for work where you can see what you finished.',
    ],
    highlights: [
      '2 summers, 10-hour days',
      '~3 miles of trail rebuilt',
      'Wilderness First Aid + chainsaw safety certified',
    ],
    photos: [],
  },
]
